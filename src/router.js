const handlers = require("./handlers");

const MENU_TRIGGERS = [
  "hi", "hello", "hey", "start", "menu", "helo", "hai",
  "good morning", "good afternoon", "good evening", "help",
  "0", "back", "services"
];

const SHORTCUT_NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8"];

async function route(from, type, payload) {
  try {
    global.userStates = global.userStates || {};
    
    // Initialize or preserve session object tracking
    if (!global.userStates[from] || typeof global.userStates[from] !== "object") {
      global.userStates[from] = { step: "IDLE", chosenService: null, answers: "" };
    }
    
    const userSession = global.userStates[from];

    if (type === "text") {
      const text = payload.toLowerCase().trim();

      // If they input a structural navigational command, clear their state tracking completely
      if (MENU_TRIGGERS.includes(text) || SHORTCUT_NUMBERS.includes(text)) {
        global.userStates[from] = { step: "IDLE", chosenService: null, answers: "" };
        
        if (MENU_TRIGGERS.includes(text)) return handlers.sendMainMenu(from);
        
        switch (text) {
          case "1": return handlers.sendTranslation(from);
          case "2": return handlers.sendInterpretation(from);
          case "3": return handlers.sendSubtitling(from);
          case "4": return handlers.sendClasses(from);
          case "5": return handlers.sendTranscription(from);
          case "6": return handlers.sendEquipment(from);
          case "7": return handlers.sendQuote(from);
          case "8": return handlers.sendTeam(from);
        }
      }

      // If they are responding to questions or pasting email evidence, forward to processing engine
      if (userSession.step === "AWAITING_ASSESSMENT" || userSession.step === "AWAITING_EMAIL_EVIDENCE") {
        return await handlers.forwardToManager(from, payload);
      }

      // Plain baseline text fallback routing
      return handlers.sendFallback(from);
    }

    if (type === "interactive") {
      const id = payload;

      // Global navigation interception buttons
      if (id === "team") return handlers.sendTeam(from);
      if (id === "menu") {
        global.userStates[from] = { step: "IDLE", chosenService: null, answers: "" };
        return handlers.sendMainMenu(from);
      }
      if (id === "quote") {
        global.userStates[from] = { step: "IDLE", chosenService: null, answers: "" };
        return handlers.sendQuote(from);
      }

      // Cache the active service branch into their session parameters while they browse
      if (id === "translation" || id.startsWith("trans_"))       userSession.chosenService = "translation";
      if (id === "interpretation" || id.startsWith("interp_")) userSession.chosenService = "interpretation";
      if (id === "subtitling" || id.startsWith("sub_"))         userSession.chosenService = "subtitling";
      if (id === "classes" || id.startsWith("cls_"))           userSession.chosenService = "classes";
      if (id === "transcription" || id.startsWith("trs_"))     userSession.chosenService = "transcription";
      if (id === "equipment" || id.startsWith("equip_"))       userSession.chosenService = "equipment";

      // If they are clicking regular buttons, keep their interaction step flag at baseline IDLE
      if (userSession.step !== "AWAITING_ASSESSMENT" && userSession.step !== "AWAITING_EMAIL_EVIDENCE") {
        userSession.step = "IDLE";
      }

      // Core service panel routers
      if (id === "translation")    return handlers.sendTranslation(from);
      if (id === "interpretation") return handlers.sendInterpretation(from);
      if (id === "subtitling")     return handlers.sendSubtitling(from);
      if (id === "classes")        return handlers.sendClasses(from);
      if (id === "transcription")  return handlers.sendTranscription(from);
      if (id === "equipment")      return handlers.sendEquipment(from);

      if (id.startsWith("trans_")) return handlers.sendTranslationDetail(from, id);
      if (id.startsWith("interp_")) return handlers.sendInterpretationDetail(from, id);
      if (id.startsWith("sub_"))   return handlers.sendSubtitlingDetail(from, id);
      if (id.startsWith("cls_"))   return handlers.sendClassesDetail(from, id);
      if (id.startsWith("trs_"))   return handlers.sendTranscriptionDetail(from);
      if (id.startsWith("equip_")) return handlers.sendEquipmentPlan(from, id);

      return handlers.sendFallback(from);
    }

    return handlers.sendFallback(from);

  } catch (err) {
    console.error("Router master thread runtime issue:", err.message);
  }
}

module.exports = { route };