import { useEffect, useRef } from "react";
import { STRIPE_PUBLISHABLE_KEY, STRIPE_BUY_BUTTON_ID, WHITELISTED_BUTTON_IDS } from "@/config/stripe";

interface StripeBuyButtonProps {
  /** The Stripe Buy Button ID. Must be whitelisted in stripe config. Defaults to the main product button. */
  buyButtonId?: string;
  className?: string;
}

/**
 * Safe Stripe Buy Button wrapper.
 * 
 * Instead of using dangerouslySetInnerHTML, this component creates the
 * stripe-buy-button custom element programmatically with validated attributes.
 * Only whitelisted button IDs are accepted to prevent injection.
 */
const StripeBuyButton = ({ buyButtonId = STRIPE_BUY_BUTTON_ID, className }: StripeBuyButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Validate button ID against whitelist
    if (!WHITELISTED_BUTTON_IDS.has(buyButtonId)) {
      console.error(`StripeBuyButton: Invalid button ID "${buyButtonId}". Must be whitelisted in stripe config.`);
      return;
    }

    // Create the custom element programmatically (no innerHTML needed)
    const button = document.createElement("stripe-buy-button");
    button.setAttribute("buy-button-id", buyButtonId);
    button.setAttribute("publishable-key", STRIPE_PUBLISHABLE_KEY);

    // Clear container and append
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(button);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [buyButtonId]);

  return (
    <div
      ref={containerRef}
      className={className || "[&_stripe-buy-button]:scale-125 [&_stripe-buy-button]:origin-center"}
    />
  );
};

export default StripeBuyButton;
