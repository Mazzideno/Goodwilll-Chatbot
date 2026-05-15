#Goodwill Language Solution — WhatsApp Chatbot v2.0

Official WhatsApp Cloud API chatbot following Meta's production standards.

---

## 📁 Project Structure

```
goodwill-bot-v5/
├── src/
│   ├── index.js       ← Main Express server (webhook handler)
│   ├── config.js      ← All environment variables
│   ├── whatsapp.js    ← Meta Cloud API sender (text, list, buttons)
│   ├── handlers.js    ← All bot reply logic (every service)
│   └── router.js      ← Message routing (text/interactive)
├── public/
│   └── index.html     ← Live bot demo (opens in browser)
├── .env.example       ← Environment variables template
├── package.json
└── README.md
```

---

## 🚀 SETUP GUIDE — Step by Step

### STEP 1 — Install Node.js
Download from: https://nodejs.org (version 16 or later)

---

### STEP 2 — Open project in VS Code
1. Open VS Code
2. File → Open Folder → select `goodwill-bot-v5`
3. Open Terminal → Terminal → New Terminal

---

### STEP 3 — Install dependencies
```bash
npm install
```

---

### STEP 4 — Create your .env file
```bash
cp .env.example .env
```
Then open `.env` and fill in your values:

```env
M4D_APP_ID=your_app_id_here
M4D_APP_SECRET=your_app_secret_here
WA_PHONE_NUMBER_ID=your_phone_number_id_here
WA_BUSINESS_ACCOUNT_ID=your_business_account_id_here
CLOUD_API_ACCESS_TOKEN=your_access_token_here
CLOUD_API_VERSION=v19.0
WEBHOOK_ENDPOINT=webhook
WEBHOOK_VERIFICATION_TOKEN=your_verify_token_here
MANAGER_NUMBER=your_phone_number_here
LISTENER_PORT=3000
```

---
⚠️ IMPORTANT:
Never share your real credentials publicly.
Create a `.env` file using the template above.

### STEP 5 — Start the bot
```bash
npm start
```
You should see:
```
🚀 Goodwill Language Solution WhatsApp Bot
📡 Server running on port ****
🔗 Webhook endpoint: /webhook
🌐 Demo: http://localhost:****
```

---

### STEP 6 — Open ngrok (new terminal tab)
```bash
ngrok http ****
```
You will see a URL like:
```
https://xxxx-xxxx.ngrok-free.app
```
Copy that URL.

---

### STEP 7 — Set webhook on Meta
1. Go to: developers.facebook.com/apps/11111111
2. Click Use cases → Customize → Configuration
3. Under Webhook click Edit
4. Callback URL: `https://YOUR_NGROK_URL/webhook`
5. Verify token: `WEBHOOK_VERIFICATION_TOKEN=your_verify_token_here`
6. Click Verify and save
7. Scroll down → find messages → click Subscribe

---

### STEP 8 — Test it!
Send "Hi" to +234 000 479 **** on WhatsApp
The bot replies instantly with the full services menu!

---

## 🔑 Getting Permanent Token (never expires)

1. Go to: business.facebook.com/settings/system-users
2. Click Goodwill Bot → Generate token
3. Select app: Goodwill Chatbot
4. Expiration: Never
5. Tick: whatsapp_business_messaging + whatsapp_business_management
6. Click Generate token → Copy immediately
7. Paste into .env as CLOUD_API_ACCESS_TOKEN

---

## 💬 How the bot works

| Customer types | Bot replies with |
|---|---|
| Hi / Hello / Menu | Welcome + Full services menu |
| 1 | Document Translation submenu |
| 2 | Interpretation submenu |
| 3 | Subtitling & Voice-Over submenu |
| 4 | Language Classes submenu |
| 5 | Transcription submenu |
| 6 | Equipment Rental (3 plans) |
| 7 | Get a Quote |
| 8 | Speak to Our Team |
| Any text | Friendly fallback + menu |

---

## 📦 Deploy to Render (permanent hosting)

1. Push this folder to GitHub
2. Go to render.com → New Web Service
3. Connect GitHub repo
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables from .env
7. Copy Render URL → update Meta webhook URL

---

## 📞 Support
- Email: Translate@goodwilllanguage.com
- Website: goodwilllanguage.com
- Manager: +234 *** 976 ****
