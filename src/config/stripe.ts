/**
 * Stripe Configuration
 * 
 * SECURITY NOTE: The publishable key is designed by Stripe to be used client-side.
 * It is NOT a secret key. Never store secret keys in client-side code.
 * 
 * All Stripe button IDs are whitelisted below. Only these IDs can be used
 * with the StripeBuyButton component to prevent injection attacks.
 */

export const STRIPE_PUBLISHABLE_KEY = "pk_live_51SK0ndFXIgtr666GrmKudtOsf3HHcaBw06Ei3x8LbGKOYQ3oZeIrmpMpTfoTBJ5c7tPyFfbRC7pugHMC0l6b3ZKP009fgyIrGc";

export const STRIPE_BUY_BUTTON_ID = "buy_btn_1SKm3dFXIgtr666GOD7ZP6da";

/**
 * Whitelisted Stripe Buy Button IDs.
 * Only buttons with these IDs can be rendered via StripeBuyButton.
 * Add new button IDs here when creating new Stripe products.
 */
export const WHITELISTED_BUTTON_IDS: ReadonlySet<string> = new Set([
  STRIPE_BUY_BUTTON_ID,
  // Premium domain button IDs
  "buy_btn_1SN9FfFXIgtr666GmNPKEJ8i",
  "buy_btn_1SNRycFXIgtr666GBjLWqMdJ",
  "buy_btn_1SNULFFXIgtr666GCNLGPr2U",
  "buy_btn_1SNkisFXIgtr666Gzh9XcHXf",
  "buy_btn_1SNkm3FXIgtr666GOuiUKoOa",
  "buy_btn_1SNkoOFXIgtr666GlUAHJDnG",
  "buy_btn_1SNktNFXIgtr666GVLBXPiqg",
  "buy_btn_1SNkvRFXIgtr666GuaUqxdYe",
  "buy_btn_1SNkxBFXIgtr666GCOk6SOYH",
  "buy_btn_1SNl0QFXIgtr666G4PaRH8fW",
  "buy_btn_1SNl2LFXIgtr666G36bbxlXN",
]);
