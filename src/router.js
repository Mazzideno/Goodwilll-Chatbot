const handlers = require("./handlers");

const MENU_TRIGGERS = [
  "hi", "hello", "hey", "start", "menu", "helo", "hai",
  "good morning", "good afternoon", "good evening", "help",
  "0", "back",
];

// ─── ROUTE INCOMING MESSAGE ────────────────────────────────
async function route(from, type, payload) {
  try {
    if (type === "text") {
      const text = payload.toLowerCase().trim();

      // Forward every customer message to manager
      await handlers.forwardToManager(from, payload);

      if (MENU_TRIGGERS.includes(text)) return handlers.sendMainMenu(from);

      // Number shortcuts
      switch (text) {
        case "1": return handlers.sendTranslation(from);
        case "2": return handlers.sendInterpretation(from);
        case "3": return handlers.sendSubtitling(from);
        case "4": return handlers.sendClasses(from);
        case "5": return handlers.sendTranscription(from);
        case "6": return handlers.sendEquipment(from);
        case "7": return handlers.sendQuote(from);
        case "8": return handlers.sendTeam(from);
        default: return handlers.sendFallback(from);
      }
    }

    if (type === "interactive") {
      const id = payload;
      await handlers.forwardToManager(from, `[Selected: ${id}]`);

      // Main menu
      if (id === "menu")           return handlers.sendMainMenu(from);
      if (id === "quote")          return handlers.sendQuote(from);
      if (id === "team")           return handlers.sendTeam(from);

      // Services
      if (id === "translation")    return handlers.sendTranslation(from);
      if (id === "interpretation") return handlers.sendInterpretation(from);
      if (id === "subtitling")     return handlers.sendSubtitling(from);
      if (id === "classes")        return handlers.sendClasses(from);
      if (id === "transcription")  return handlers.sendTranscription(from);
      if (id === "equipment")      return handlers.sendEquipment(from);

      // Translation sub-items
      if (id.startsWith("trans_")) return handlers.sendTranslationDetail(from, id);

      // Interpretation sub-items
      if (id.startsWith("interp_")) return handlers.sendInterpretationDetail(from, id);

      // Subtitling sub-items
      if (id.startsWith("sub_")) return handlers.sendSubtitlingDetail(from, id);

      // Classes sub-items
      if (id.startsWith("cls_")) return handlers.sendClassesDetail(from, id);

      // Transcription sub-items
      if (id.startsWith("trs_")) return handlers.sendTranscriptionDetail(from);

      // Equipment plans
      if (id.startsWith("equip_")) return handlers.sendEquipmentPlan(from, id);

      return handlers.sendFallback(from);
    }

    // Unsupported message types (image, audio, etc)
    return handlers.sendFallback(from);

  } catch (err) {
    console.error("Router error:", err.response?.data || err.message);
  }
}

module.exports = { route };
