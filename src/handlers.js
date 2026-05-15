const { sendText, sendList, sendButtons } = require("./whatsapp");
const config = require("./config");

// ─── MAIN MENU ────────────────────────────────────────────
async function sendMainMenu(to) {
  await sendList(
    to,
    "Goodwill Language Solution 🌍",
    "Welcome! We are certified language service providers in Africa since 2017.\n\nServing 27 countries worldwide. How can we help you today?",
    "goodwilllanguage.com",
    "View Our Services",
    [
      {
        title: "Our Services",
        rows: [
          { id: "translation",    title: "🔤 Document Translation",  description: "Legal, medical, academic & more" },
          { id: "interpretation", title: "🎙️ Interpretation",        description: "Conferences, courts, meetings" },
          { id: "subtitling",     title: "🎬 Subtitling & Voiceover", description: "Videos, films, podcasts" },
          { id: "classes",        title: "📚 Language Classes",      description: "Online 24/7, all languages" },
          { id: "transcription",  title: "📝 Transcription",         description: "Audio & video to text" },
          { id: "equipment",      title: "🎧 Equipment Rental",      description: "Conference interpretation gear" },
        ],
      },
      {
        title: "Get Help",
        rows: [
          { id: "quote", title: "💰 Get a Quote",       description: "Request pricing for any service" },
          { id: "team",  title: "👤 Speak to Our Team", description: "Talk to our Project Manager" },
        ],
      },
    ]
  );
}

// ─── TRANSLATION ──────────────────────────────────────────
async function sendTranslation(to) {
  await sendList(
    to,
    "🔤 Document Translation",
    "We translate all document types with certified linguists in 30+ languages.\n\nSelect a document category:",
    "Certified & accurate translations",
    "Select Document Type",
    [
      {
        title: "Document Types",
        rows: [
          { id: "trans_legal",       title: "⚖️ Legal & Court Docs",    description: "Court orders, affidavits, contracts" },
          { id: "trans_medical",     title: "🏥 Medical Reports",        description: "Health records, prescriptions" },
          { id: "trans_academic",    title: "🎓 Academic Certificates",  description: "Transcripts, diplomas, degrees" },
          { id: "trans_business",    title: "💼 Business Contracts",     description: "MOUs, agreements, proposals" },
          { id: "trans_immigration", title: "✈️ Immigration Papers",     description: "Visas, passports, permits" },
          { id: "trans_personal",    title: "🪪 Personal Documents",     description: "Birth certs, marriage certs" },
        ],
      },
      {
        title: "Quick Actions",
        rows: [
          { id: "quote", title: "💰 Get a Quote",  description: "Request pricing" },
          { id: "menu",  title: "🔙 Back to Menu", description: "View all services" },
        ],
      },
    ]
  );
}

async function sendTranslationDetail(to, docType) {
  const names = {
    trans_legal: "Legal & Court Documents",
    trans_medical: "Medical Reports",
    trans_academic: "Academic Certificates",
    trans_business: "Business Contracts",
    trans_immigration: "Immigration Papers",
    trans_personal: "Personal Documents",
  };
  await sendButtons(
    to,
    `✅ ${names[docType]}`,
    `We handle ${names[docType]} translation with certified linguists.\n\n✔️ 30+ languages available\n✔️ Certified & accurate\n✔️ Confidential handling\n✔️ Fast turnaround time\n\nWhat would you like to do next?`,
    "Translate@goodwilllanguage.com",
    [
      { id: "quote",       title: "💰 Get a Quote" },
      { id: "team",        title: "👤 Speak to Team" },
      { id: "translation", title: "🔙 Back" },
    ]
  );
}

// ─── INTERPRETATION ───────────────────────────────────────
async function sendInterpretation(to) {
  await sendList(
    to,
    "🎙️ Interpretation Services",
    "Professional interpretation for conferences, courts, meetings & NGO events.\n\nSelect an interpretation type:",
    "Available in 30+ languages worldwide",
    "Select Type",
    [
      {
        title: "Interpretation Types",
        rows: [
          { id: "interp_sim",     title: "🔄 Simultaneous",   description: "Real-time interpretation" },
          { id: "interp_con",     title: "🔁 Consecutive",     description: "After-speech interpretation" },
          { id: "interp_remote",  title: "💻 Remote / Online", description: "Virtual interpretation" },
          { id: "interp_whisper", title: "🗣️ Whisper",        description: "1-on-1 quiet interpretation" },
        ],
      },
      {
        title: "Quick Actions",
        rows: [
          { id: "quote", title: "💰 Get a Quote",  description: "Request pricing" },
          { id: "menu",  title: "🔙 Back to Menu", description: "View all services" },
        ],
      },
    ]
  );
}

async function sendInterpretationDetail(to, type) {
  const names = {
    interp_sim: "Simultaneous Interpretation",
    interp_con: "Consecutive Interpretation",
    interp_remote: "Remote / Online Interpretation",
    interp_whisper: "Whisper Interpretation",
  };
  await sendButtons(
    to,
    `✅ ${names[type]}`,
    `We provide ${names[type]} for:\n\n✔️ Conferences & summits\n✔️ Court & legal proceedings\n✔️ Business meetings\n✔️ Government & NGO events\n✔️ UN & international sessions\n\nAvailable in 30+ languages.`,
    "goodwilllanguage.com",
    [
      { id: "quote",          title: "💰 Get a Quote" },
      { id: "team",           title: "👤 Speak to Team" },
      { id: "interpretation", title: "🔙 Back" },
    ]
  );
}

// ─── SUBTITLING ───────────────────────────────────────────
async function sendSubtitling(to) {
  await sendList(
    to,
    "🎬 Subtitling & Voiceover",
    "We help your content reach global audiences with native-speaker quality.\n\nSelect a service type:",
    "SRT, VTT & all subtitle formats",
    "Select Service",
    [
      {
        title: "Service Types",
        rows: [
          { id: "sub_movie",     title: "🎥 Movies & Docs",     description: "Films, documentaries" },
          { id: "sub_youtube",   title: "▶️ YouTube & Social",  description: "Online video content" },
          { id: "sub_corporate", title: "💼 Corporate Videos",  description: "Training & presentations" },
          { id: "sub_voiceover", title: "🔊 Voice-Over",        description: "Dubbing & narration" },
          { id: "sub_ads",       title: "📢 Ads & Promos",      description: "Advertisements" },
        ],
      },
      {
        title: "Quick Actions",
        rows: [
          { id: "quote", title: "💰 Get a Quote",  description: "Request pricing" },
          { id: "menu",  title: "🔙 Back to Menu", description: "View all services" },
        ],
      },
    ]
  );
}

async function sendSubtitlingDetail(to, type) {
  const names = {
    sub_movie: "Movies & Documentaries",
    sub_youtube: "YouTube & Social Media",
    sub_corporate: "Corporate Training Videos",
    sub_voiceover: "Voice-Over & Dubbing",
    sub_ads: "Ads & Promo Videos",
  };
  await sendButtons(
    to,
    `✅ ${names[type]}`,
    `We produce high-quality ${names[type]}.\n\n✔️ Native-speaker voice artists\n✔️ SRT, VTT & all subtitle formats\n✔️ Accurate lip-sync matching\n✔️ Fast professional delivery`,
    "goodwilllanguage.com",
    [
      { id: "quote",     title: "💰 Get a Quote" },
      { id: "team",      title: "👤 Speak to Team" },
      { id: "subtitling", title: "🔙 Back" },
    ]
  );
}

// ─── LANGUAGE CLASSES ─────────────────────────────────────
async function sendClasses(to) {
  await sendList(
    to,
    "📚 Language Classes",
    "Learn any language with our certified tutors — online 24/7.\n\nSelect a language:",
    "Beginner to advanced levels",
    "Choose Language",
    [
      {
        title: "Languages Available",
        rows: [
          { id: "cls_fr",    title: "🇫🇷 French",           description: "Français" },
          { id: "cls_ar",    title: "🇸🇦 Arabic",           description: "العربية" },
          { id: "cls_zh",    title: "🇨🇳 Mandarin",         description: "Chinese" },
          { id: "cls_es",    title: "🇪🇸 Spanish",          description: "Español" },
          { id: "cls_af",    title: "🌍 African Languages", description: "Yoruba, Hausa, Igbo, Swahili" },
          { id: "cls_de",    title: "🇩🇪 German",           description: "Deutsch" },
          { id: "cls_pt",    title: "🇵🇹 Portuguese",       description: "Português" },
          { id: "cls_other", title: "🗺️ Other Languages",  description: "Ask us about any language" },
        ],
      },
      {
        title: "Quick Actions",
        rows: [
          { id: "quote", title: "💰 Enrol / Get Pricing", description: "Request pricing" },
          { id: "menu",  title: "🔙 Back to Menu",        description: "View all services" },
        ],
      },
    ]
  );
}

async function sendClassesDetail(to, lang) {
  const names = {
    cls_fr: "French", cls_ar: "Arabic", cls_zh: "Mandarin Chinese",
    cls_es: "Spanish", cls_af: "African Languages", cls_de: "German",
    cls_pt: "Portuguese", cls_other: "Your Chosen Language",
  };
  await sendButtons(
    to,
    `✅ ${names[lang]} Classes`,
    `We offer ${names[lang]} classes with certified tutors.\n\n✔️ Online 24/7 — learn at your pace\n✔️ One-on-one & group sessions\n✔️ Beginner to advanced levels\n✔️ Business & conversational focus\n✔️ Exam preparation available`,
    "goodwilllanguage.com",
    [
      { id: "quote",   title: "💰 Enrol / Get Pricing" },
      { id: "team",    title: "👤 Speak to Team" },
      { id: "classes", title: "🔙 Back" },
    ]
  );
}

// ─── TRANSCRIPTION ────────────────────────────────────────
async function sendTranscription(to) {
  await sendList(
    to,
    "📝 Transcription Services",
    "We convert audio & video to accurate written text.\n\nWhat type of content do you need transcribed?",
    "24-48hr turnaround • Confidential",
    "Select Content Type",
    [
      {
        title: "Content Types",
        rows: [
          { id: "trs_interview", title: "🎤 Interviews",        description: "Focus groups, research" },
          { id: "trs_lecture",   title: "🎓 Lectures",          description: "Seminars, conferences" },
          { id: "trs_court",     title: "⚖️ Court & Legal",     description: "Legal recordings" },
          { id: "trs_podcast",   title: "🎙️ Podcasts",         description: "YouTube, audio shows" },
          { id: "trs_meeting",   title: "💼 Business Meetings", description: "Calls, conferences" },
          { id: "trs_medical",   title: "🏥 Medical",           description: "Dictations, reports" },
        ],
      },
      {
        title: "Quick Actions",
        rows: [
          { id: "quote", title: "💰 Get a Quote",  description: "Request pricing" },
          { id: "menu",  title: "🔙 Back to Menu", description: "View all services" },
        ],
      },
    ]
  );
}

async function sendTranscriptionDetail(to) {
  await sendButtons(
    to,
    "✅ Transcription Ready!",
    "We can handle your transcription with precision.\n\n✔️ Verbatim or clean-read format\n✔️ Timestamped transcripts available\n✔️ Multilingual transcription\n✔️ Confidential & secure handling\n✔️ Fast 24–48hr turnaround",
    "goodwilllanguage.com",
    [
      { id: "quote",         title: "💰 Get a Quote" },
      { id: "team",          title: "👤 Speak to Team" },
      { id: "transcription", title: "🔙 Back" },
    ]
  );
}

// ─── EQUIPMENT RENTAL ─────────────────────────────────────
async function sendEquipment(to) {
  await sendList(
    to,
    "🎧 Equipment Rental",
    "Professional interpretation equipment for every conference size.\n\nSetup & technical support included across Nigeria.\n\nSelect a plan:",
    "10 to 1,000+ attendees",
    "Choose a Plan",
    [
      {
        title: "Equipment Plans",
        rows: [
          { id: "equip_basic", title: "🟢 Basic Plan — $420/day", description: "Small conferences (10-100 people)" },
          { id: "equip_plus",  title: "🔵 Plus Plan — $620/day",  description: "Medium conferences (101-200 people)" },
          { id: "equip_max",   title: "🔴 Max Plan — $820/day",   description: "Large conferences (201-300 people)" },
        ],
      },
      {
        title: "Quick Actions",
        rows: [
          { id: "quote", title: "💰 Custom Quote",  description: "Get personalized pricing" },
          { id: "menu",  title: "🔙 Back to Menu",  description: "View all services" },
        ],
      },
    ]
  );
}

async function sendEquipmentPlan(to, plan) {
  const plans = {
    equip_basic: {
      title: "🟢 Basic Plan — $420/day",
      body: "Small Conferences (10–100 people)\n\n✔️ 10–100 headphones\n✔️ 10–100 receivers\n✔️ 1 interpreter's booth\n✔️ 2 delegate microphones\n✔️ 1 standby pro-technician\n\nPerfect for small meetings and seminars.",
    },
    equip_plus: {
      title: "🔵 Plus Plan — $620/day",
      body: "Medium Conferences (101–200 people)\n\n✔️ 101–200 headphones\n✔️ 101–200 receivers\n✔️ 2 interpreter booths\n✔️ 5 delegate microphones\n✔️ 2 standby pro-technicians\n\nIdeal for NGO events and mid-size conferences.",
    },
    equip_max: {
      title: "🔴 Max Plan — $820/day",
      body: "Large Conferences (201–300 people)\n\n✔️ 201–300 headphones\n✔️ 201–300 receivers\n✔️ 4 interpreter booths\n✔️ 10 delegate microphones\n✔️ 5 standby pro-technicians\n\nDesigned for large summits and government events.",
    },
  };
  const p = plans[plan];
  await sendButtons(
    to,
    p.title,
    p.body,
    "Setup & support included across Nigeria",
    [
      { id: "quote",     title: "💰 Request Service" },
      { id: "team",      title: "👤 Speak to Team" },
      { id: "equipment", title: "🔙 Compare Plans" },
    ]
  );
}

// ─── QUOTE ────────────────────────────────────────────────
async function sendQuote(to) {
  await sendButtons(
    to,
    "💰 Request a Quote",
    "To give you an accurate quote, please tell us:\n\n1️⃣ Service needed\n2️⃣ Language pair (e.g. English → French)\n3️⃣ Pages / duration / file length\n4️⃣ Your deadline\n\nWe reply within 30 minutes during business hours ⏱️\n\n📧 Translate@goodwilllanguage.com\n🌐 goodwilllanguage.com",
    "Mon-Sat 8am-6pm WAT",
    [
      { id: "team", title: "👤 Speak to Team" },
      { id: "menu", title: "🔙 Back to Menu" },
    ]
  );
}

// ─── TEAM ESCALATION ──────────────────────────────────────
async function sendTeam(to) {
  await sendButtons(
    to,
    "👤 Speak to Our Team",
    "Our Project Manager is ready to assist you! 🙋\n\n📱 +234 807 976 3934\n\nTap the number above to open a direct WhatsApp chat with our team.\n\n⏰ Mon–Sat: 8am – 6pm WAT\n📍 Barushi Plaza, Akala Express, Elebu Rd, Ibadan\n📧 Translate@goodwilllanguage.com",
    "We look forward to serving you!",
    [{ id: "menu", title: "🔙 Back to Menu" }]
  );

  // Alert manager
  if (config.managerNumber) {
    const { sendText } = require("./whatsapp");
    await sendText(
      config.managerNumber,
      `🚨 *URGENT — Customer wants to speak to team!*\n\n👤 Customer: +${to}\n\nPlease reply to them directly on WhatsApp now.\n\nThey have been given your number (+234 807 976 3934).`
    ).catch((e) => console.error("Manager alert error:", e.message));
  }
}

// ─── FALLBACK (AI-like) ───────────────────────────────────
async function sendFallback(to) {
  await sendButtons(
    to,
    "😊 Goodwill Language Solution",
    "Thank you for reaching out!\n\nWe are here to help with all your language needs — translation, interpretation, transcription, subtitling, voice-over, language classes and equipment rental.\n\nPlease select a service from our menu to continue.",
    "goodwilllanguage.com",
    [
      { id: "menu",  title: "📋 View Our Services" },
      { id: "quote", title: "💰 Get a Quote" },
      { id: "team",  title: "👤 Speak to Team" },
    ]
  );
}

// ─── FORWARD TO MANAGER ───────────────────────────────────
async function forwardToManager(from, message) {
  if (!config.managerNumber) return;
  // Skip forwarding menu selections to avoid spam
  if (message.startsWith("[Selected:") && message.includes("menu")) return;
  const { sendText } = require("./whatsapp");
  const time = new Date().toLocaleTimeString("en-NG", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
  });
  try {
    await sendText(
      config.managerNumber,
      `📩 *New Customer Message*\n\n👤 Customer: +${from}\n🕐 Time: ${time} WAT\n💬 Message: ${message}\n\n_Reply directly to +${from} on WhatsApp._`
    );
  } catch (e) {
    // Silently ignore — manager number may not be on WhatsApp API yet
    if (config.debug) console.error("Forward error:", e.message);
  }
}

module.exports = {
  sendMainMenu,
  sendTranslation, sendTranslationDetail,
  sendInterpretation, sendInterpretationDetail,
  sendSubtitling, sendSubtitlingDetail,
  sendClasses, sendClassesDetail,
  sendTranscription, sendTranscriptionDetail,
  sendEquipment, sendEquipmentPlan,
  sendQuote, sendTeam, sendFallback, forwardToManager,
};