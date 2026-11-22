export const META_PIXEL_ID = "1064156553352167";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fire a standard Meta Pixel event (e.g. Lead after quote submit). */
export function trackMetaEvent(
  event: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params) window.fbq("track", event, params);
  else window.fbq("track", event);
}
