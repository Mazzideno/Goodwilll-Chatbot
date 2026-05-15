const whatsapp = require("./whatsapp");
const config = require("./config");

global.userStates = global.userStates || {};

// ─── MAIN CATALOG WHEEL ───────────────────────────────────
async function sendMainMenu(to) {
  await whatsapp.sendList(
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
          { id: "team",  title: "👤 Talk to Specialist", description: "Connect with our Project Team" },
        ],
      },
    ]
  );
}

// ─── SERVICES SUITE NAVIGATION ────────────────────────────
async function sendTranslation(to) {
  await whatsapp.sendList(
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
    trans_legal: "Legal Documents", trans_medical: "Medical Reports", trans_academic: "Academic Certs",
    trans_business: "Business Contracts", trans_immigration: "Immigration Papers", trans_personal: "Personal Docs"
  };
  await whatsapp.sendButtons(
    to,
    `✅ ${names[docType] || "Translation"}`,
    `We handle this translation category with certified native linguists.\n\n✔️ 30+ languages available\n✔️ Certified & accurate\n✔️ Fast turnaround time\n\nWhat would you like to do next?`,
    "Translate@goodwilllanguage.com",
    [
      { id: "quote",       title: "💰 Get a Quote" },
      { id: "team",        title: "👤 Talk to Specialist" },
      { id: "translation", title: "🔙 Back" },
    ]
  );
}

async function sendInterpretation(to) {
  await whatsapp.sendList(
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
          { id: "interp_con",     title: "🔁 Consecutive",    description: "After-speech interpretation" },
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
  const names = { interp_sim: "Simultaneous", interp_con: "Consecutive", interp_remote: "Remote / Online", interp_whisper: "Whisper Interp" };
  await whatsapp.sendButtons(
    to,
    `✅ ${names[type] || "Interpretation"}`,
    `We provide expert services for:\n\n✔️ Conferences & summits\n✔️ Court & legal proceedings\n✔️ Business meetings\n\nAvailable in 30+ languages.`,
    "goodwilllanguage.com",
    [
      { id: "quote",          title: "💰 Get a Quote" },
      { id: "team",           title: "👤 Talk to Specialist" },
      { id: "interpretation", title: "🔙 Back" },
    ]
  );
}

async function sendSubtitling(to) {
  await whatsapp.sendList(
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
  const names = { sub_movie: "Movies & Docs", sub_youtube: "YouTube & Social", sub_corporate: "Corporate Videos", sub_voiceover: "Voice-Over/Dubbing", sub_ads: "Ads & Promo Videos" };
  await whatsapp.sendButtons(
    to,
    `✅ ${names[type] || "Subtitling"}`,
    `We produce premium quality work:\n\n✔️ Native-speaker voice artists\n✔️ SRT, VTT & all formats\n✔️ Fast professional delivery`,
    "goodwilllanguage.com",
    [
      { id: "quote",      title: "💰 Get a Quote" },
      { id: "team",       title: "👤 Talk to Specialist" },
      { id: "subtitling", title: "🔙 Back" },
    ]
  );
}

async function sendClasses(to) {
  await whatsapp.sendList(
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
          { id: "cls_es",    title: "🇪🇸 Spanish",           description: "Español" },
          { id: "cls_af",    title: "🌍 African Languages", description: "Yoruba, Hausa, Igbo, Swahili" },
          { id: "cls_de",    title: "🇩🇪 German",           description: "Deutsch" },
          { id: "cls_pt",    title: "🇵🇹 Portuguese",       description: "Português" },
          { id: "cls_other", title: "🗺️ Other Languages",  description: "Ask us about any language" },
        ],
      },
      {
        title: "Quick Actions",
        rows: [
          { id: "quote", title: "💰 Enrol / Pricing", description: "Request pricing" },
          { id: "menu",  title: "🔙 Back to Menu",    description: "View all services" },
        ],
      },
    ]
  );
}

async function sendClassesDetail(to, lang) {
  const names = { cls_fr: "French", cls_ar: "Arabic", cls_zh: "Mandarin", cls_es: "Spanish", cls_af: "African Langs", cls_de: "German", cls_pt: "Portuguese", cls_other: "Chosen Lang" };
  await whatsapp.sendButtons(
    to,
    `✅ ${names[lang] || "Language"} Classes`,
    `We offer classes with expert certified tutors.\n\n✔️ Online 24/7 — learn at your pace\n✔️ One-on-one & group sessions`,
    "goodwilllanguage.com",
    [
      { id: "quote",   title: "💰 Enrol / Pricing" }, 
      { id: "team",    title: "👤 Talk to Specialist" },
      { id: "classes", title: "🔙 Back" },
    ]
  );
}

async function sendTranscription(to) {
  await whatsapp.sendList(
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
          { id: "trs_podcast",   title: "🎙️ Podcasts",          description: "YouTube, audio shows" },
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
  await whatsapp.sendButtons(
    to,
    "✅ Transcription Ready!",
    "We can handle your transcription with precision.\n\n✔️ Verbatim or clean-read format\n✔️ Multilingual transcription\n✔️ Fast 24–48hr turnaround",
    "goodwilllanguage.com",
    [
      { id: "quote",         title: "💰 Get a Quote" },
      { id: "team",          title: "👤 Talk to Specialist" },
      { id: "transcription", title: "🔙 Back" },
    ]
  );
}

async function sendEquipment(to) {
  await whatsapp.sendList(
    to,
    "🎧 Equipment Rental",
    "Professional interpretation equipment for every conference size.\n\nSetup & technical support included across Nigeria.\n\nSelect a plan:",
    "10 to 1,000+ attendees",
    "Choose a Plan",
    [
      {
        title: "Equipment Plans",
        rows: [
          { id: "equip_basic", title: "🟢 Basic — $420/day", description: "Small conferences (10-100 people)" },
          { id: "equip_plus",  title: "🔵 Plus — $620/day",  description: "Medium conferences (101-200 people)" },
          { id: "equip_max",   title: "🔴 Max — $820/day",   description: "Large conferences (201-300 people)" },
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
    equip_basic: { title: "🟢 Basic — $420/day", body: "Small Conferences (10–100 people)\n\n✔️ 10–100 headphones\n✔️ 1 Interpreter booth\n✔️ 1 standby pro-technician" },
    equip_plus: { title: "🔵 Plus — $620/day", body: "Medium Conferences (101–200 people)\n\n✔️ 101–200 headphones\n✔️ 2 Interpreter booths\n✔️ 2 standby pro-technicians" },
    equip_max: { title: "🔴 Max — $820/day", body: "Large Conferences (201–300 people)\n\n✔️ 201–300 headphones\n✔️ 4 Interpreter booths\n✔️ 5 standby pro-technicians" }
  };
  const p = plans[plan] || plans.equip_basic;
  await whatsapp.sendButtons(
    to,
    p.title,
    p.body,
    "Setup & support included across Nigeria",
    [
      { id: "quote",     title: "💰 Request Service" },
      { id: "team",      title: "👤 Talk to Specialist" },
      { id: "equipment", title: "🔙 Compare Plans" },
    ]
  );
}

async function sendQuote(to) {
  await whatsapp.sendButtons(
    to,
    "💰 Request a Quote",
    "To give you an accurate quote, please tell us:\n\n1️⃣ Service needed\n2️⃣ Language pair (e.g. English → French)\n3️⃣ Pages / duration / file length\n4️⃣ Your deadline\n\nWe reply within 30 minutes during business hours ⏱️\n\n📧 Translate@goodwilllanguage.com",
    "Mon-Sat 8am-6pm WAT",
    [
      { id: "team", title: "👤 Talk to Specialist" },
      { id: "menu", title: "🔙 Back to Menu" },
    ]
  );
}

// ─── STEP 1: TALK TO SPECIALIST SCREENING ASSESSMENT ──────
async function sendTeam(to) {
  const userSession = global.userStates[to];

  // If they randomly clicked this button from the main menu without selecting a clear service line first
  if (!userSession || !userSession.chosenService) {
    await whatsapp.sendText(
      to,
      "👋 To route you to the correct language engineer, please browse any service from our menu options and click 'Talk to Specialist' directly inside that page!"
    );
    return;
  }

  // Engage screening phase lock
  userSession.step = "AWAITING_ASSESSMENT";

  // Display the required project diagnostic checklist prompt
  await whatsapp.sendText(
    to,
    "📋 *Goodwill Project Assessment*\n\n" +
    "To accurately brief our specialized project floor, please answer our screening questions below:\n\n" +
    "✍️ *Reply directly into this chat with your details:*\n" +
    "1️⃣ Which specific layout service details or project files are we handling?\n" +
    "2️⃣ What are your target source & destination languages?\n" +
    "3️⃣ What is your clear turnaround timeline/deadline target?"
  );
}

// ─── STEP 2: VERIFICATION GATEKEEPER CONDITION ───────────
async function triggerEmailGatekeeper(to) {
  const userSession = global.userStates[to];
  userSession.step = "AWAITING_EMAIL_EVIDENCE";

  await whatsapp.sendButtons(
    to,
    "⚠️ Final Email Dispatch Verification",
    `Thank you for providing your workspace metrics.\n\n` +
    "To confirm your slot and open a live configuration chat with our management team:\n\n" +
    "1️⃣ Forward your project request details text to our email inbox: *translate@goodwilllanguage.com*\n" +
    "2️⃣ *PASTE VERIFICATION COPY:* Copy the text body of the email you sent and paste it right here into this chat.\n\n" +
    `💡 *Note:* The text brief MUST mention your request for *${userSession.chosenService}* or the bot will block validation logs.`,
    "System Validation Key Pending",
    [{ id: "menu", title: "🔙 Cancel & Return to Menu" }]
  );
}

// ─── BASELINE MESSAGING RECOVERY ──────────────────────────
async function sendFallback(to) {
  await whatsapp.sendButtons(
    to,
    "🌍 Goodwill Language Solutions",
    "Welcome to our unified communications line. Please use the controls below to discover available support systems:",
    "goodwilllanguage.com",
    [
      { id: "menu",  title: "📋 Discover Services" },
      { id: "quote", title: "💰 Get a Quote" }
    ]
  );
}

// ─── CORE PROCESSING MACHINE ──────────────────────────────
async function forwardToManager(from, message) {
  const cleanMsg = message.trim().toLowerCase();
  const userSession = global.userStates[from];

  if (!userSession) return;

  // STEP 1 TRANSITION: Checking layout response answers to the 3 assessment questions
  if (userSession.step === "AWAITING_ASSESSMENT") {
    if (message.length < 10) {
      await whatsapp.sendText(
        from,
        "❌ *Incomplete Details Provided.*\n\nOur language specialists require authentic details to consult. Please answer the questions fully."
      );
      return;
    }
    
    // Save answers text details to session log data structure
    userSession.answers = message;
    
    // Immediately proceed to the email milestone phase
    return await triggerEmailGatekeeper(from);
  }

  // STEP 2 TRANSITION: Enforcing the strict mail check matching the chosen service keyword
  if (userSession.step === "AWAITING_EMAIL_EVIDENCE") {
    const targetKeyword = userSession.chosenService; 

    // Validate email structures AND verify the keyword matches the category they checked out
    const structuralFormatCheck = cleanMsg.includes("@") || cleanMsg.includes("dear") || cleanMsg.includes("goodwill") || message.length > 20;
    const preciseKeywordMatch = cleanMsg.includes(targetKeyword);

    if (!structuralFormatCheck || !preciseKeywordMatch) {
      await whatsapp.sendText(
        from,
        `❌ *Proof Verification Failed.*\n\n` +
        `The text copy pasted here does not match an email layout outlining our *${targetKeyword}* services.\n\n` +
        `Please email your briefing document directly to *translate@goodwilllanguage.com*, then copy the body text containing the keyword "${targetKeyword}" and paste it here.`
      );
      return;
    }

    // DISPATCH UNLOCKED - RESET SESSION METRICS CLEANLY
    global.userStates[from] = { step: "IDLE", chosenService: null, answers: "" };

    await whatsapp.sendButtons(
      from,
      "✅ Verification Approved",
      "Thank you! Your email file tracking dispatch has cleared logs.\n\n" +
      "👤 *Project Manager Active Line:*\n" +
      "📱 +234 807 976 3934\n\n" +
      "Click the live mobile number link link above to launch your chat configuration coordination right now.",
      "Access Unlocked",
      [{ id: "menu", title: "🔙 Return to Menu" }]
    );

    if (config.managerNumber) {
      try {
        await whatsapp.sendText(
          config.managerNumber,
          `🔔 *QUALIFIED CONVERSION LEAD UNLOCKED!*\n\n` +
          `👤 Client Line: +${from}\n` +
          `🎯 Service Domain: ${targetKeyword.toUpperCase()}\n` +
          `📋 *Screening Answers Summary:*\n"${userSession.answers}"\n\n` +
          `📝 *Pasted Email Proof Text:*\n"${message.slice(0, 350)}..."`
        );
      } catch (err) {
        console.error("Manager logging sync notification failure:", err.message);
      }
    }
    return;
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
  sendQuote, sendTeam, sendFallback, forwardToManager
};