const axios = require("axios");
const config = require("./config");

const BASE_URL = `https://graph.facebook.com/${config.apiVersion}/${config.phoneNumberId}`;
const HEADERS = {
  Authorization: `Bearer ${config.accessToken}`,
  "Content-Type": "application/json",
};

// ─── MARK MESSAGE AS READ ────────────────────────────────
async function markRead(messageId) {
  try {
    await axios.post(
      `${BASE_URL}/messages`,
      { messaging_product: "whatsapp", status: "read", message_id: messageId },
      { headers: HEADERS }
    );
  } catch (err) {
    if (config.debug) console.error("markRead error:", err.response?.data);
  }
}

// ─── SEND PLAIN TEXT ─────────────────────────────────────
async function sendText(to, body) {
  return axios.post(
    `${BASE_URL}/messages`,
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "text",
      text: { preview_url: false, body },
    },
    { headers: HEADERS }
  );
}

// ─── SEND INTERACTIVE LIST (main menu) ───────────────────
async function sendList(to, header, body, footer, buttonLabel, sections) {
  return axios.post(
    `${BASE_URL}/messages`,
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "interactive",
      interactive: {
        type: "list",
        header: { type: "text", text: header },
        body: { text: body },
        footer: { text: footer },
        action: { button: buttonLabel, sections },
      },
    },
    { headers: HEADERS }
  );
}

// ─── SEND INTERACTIVE BUTTONS (up to 3 buttons) ──────────
async function sendButtons(to, header, body, footer, buttons) {
  return axios.post(
    `${BASE_URL}/messages`,
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "interactive",
      interactive: {
        type: "button",
        header: { type: "text", text: header },
        body: { text: body },
        footer: { text: footer },
        action: {
          buttons: buttons.map((b) => ({
            type: "reply",
            reply: { id: b.id, title: b.title.substring(0, 20) },
          })),
        },
      },
    },
    { headers: HEADERS }
  );
}

module.exports = { sendText, sendList, sendButtons, markRead };
