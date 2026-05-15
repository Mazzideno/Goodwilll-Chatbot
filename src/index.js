require("dotenv").config();
const express = require("express");
const path = require("path");
const config = require("./config");
const { markRead } = require("./whatsapp");
const { route } = require("./router");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// ─── HEALTH CHECK ─────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/health", (req, res) => {
  res.json({
    status: "live",
    service: "Goodwill Language Solution WhatsApp Bot",
    version: "2.0.0",
    timestamp: new Date().toISOString(),
  });
});

// ─── WEBHOOK VERIFICATION (Meta GET request) ───────────────
app.get(`/${config.webhookEndpoint}`, (req, res) => {
  const mode      = req.query["hub.mode"];
  const token     = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log(`[WEBHOOK] Verification request — mode: ${mode}, token: ${token}`);

  if (mode === "subscribe" && token === config.webhookVerifyToken) {
    console.log("[WEBHOOK] ✅ Verified successfully!");
    res.status(200).send(challenge);
  } else {
    console.error("[WEBHOOK] ❌ Verification failed — token mismatch");
    res.sendStatus(403);
  }
});

// ─── WEBHOOK MESSAGES (Meta POST request) ─────────────────
app.post(`/${config.webhookEndpoint}`, async (req, res) => {
  // Always respond 200 immediately so Meta doesn't retry
  res.sendStatus(200);

  try {
    const body = req.body;
    if (config.debug) console.log("[WEBHOOK] Payload:", JSON.stringify(body, null, 2));

    if (body.object !== "whatsapp_business_account") return;

    const entry   = body.entry?.[0];
    const change  = entry?.changes?.[0];
    const value   = change?.value;
    const message = value?.messages?.[0];

    if (!message) return;

    const from = message.from;
    const msgId = message.id;

    console.log(`[MESSAGE] From: +${from} | Type: ${message.type}`);

    // Mark as read (shows blue ticks)
    await markRead(msgId);

    // Route based on message type
    if (message.type === "text") {
      await route(from, "text", message.text.body);
    } else if (message.type === "interactive") {
      const reply =
        message.interactive?.button_reply?.id ||
        message.interactive?.list_reply?.id;
      if (reply) await route(from, "interactive", reply);
    } else {
      // Handle audio, image, document etc with fallback
      await route(from, "other", message.type);
    }

  } catch (err) {
    console.error("[WEBHOOK] Error:", err.response?.data || err.message);
  }
});

// ─── START SERVER ─────────────────────────────────────────
app.listen(config.port, () => {
  console.log(`\n🚀 Goodwill Language Solution WhatsApp Bot`);
  console.log(`📡 Server running on port ${config.port}`);
  console.log(`🔗 Webhook endpoint: /${config.webhookEndpoint}`);
  console.log(`🌐 Demo: http://localhost:${config.port}`);
  console.log(`\n📋 To expose with ngrok: ngrok http ${config.port}`);
  console.log(`   Then set webhook on Meta: https://YOUR_NGROK_URL/${config.webhookEndpoint}\n`);
});
