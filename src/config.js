require("dotenv").config();

const config = {
  // Meta App
  appId: process.env.M4D_APP_ID,
  appSecret: process.env.M4D_APP_SECRET,

  // WhatsApp
  phoneNumberId: process.env.WA_PHONE_NUMBER_ID,
  businessAccountId: process.env.WA_BUSINESS_ACCOUNT_ID,
  accessToken: process.env.CLOUD_API_ACCESS_TOKEN,
  apiVersion: process.env.CLOUD_API_VERSION || "v19.0",

  // Webhook
  webhookEndpoint: process.env.WEBHOOK_ENDPOINT || "webhook",
  webhookVerifyToken: process.env.WEBHOOK_VERIFICATION_TOKEN || "goodwill2024",

  // Business
  managerNumber: process.env.MANAGER_NUMBER || "2349044791052",
  port: parseInt(process.env.LISTENER_PORT) || 3000,
  debug: process.env.DEBUG === "true",
};

// Validate required fields
const required = ["phoneNumberId", "accessToken"];
required.forEach((key) => {
  if (!config[key]) {
    console.warn(`⚠️  WARNING: ${key} is not set in environment variables`);
  }
});

module.exports = config;
