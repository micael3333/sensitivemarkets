import { analyticsConfig } from "./config";
export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "vsl_play"
  | "checkout_click";
export function trackEvent(
  name: AnalyticsEvent,
  data: Record<string, string> = {},
) {
  if (
    !analyticsConfig.metaPixelId &&
    !analyticsConfig.ga4Id &&
    !analyticsConfig.gtmId
  )
    return;
  window.dispatchEvent(
    new CustomEvent("sma:analytics", { detail: { name, data } }),
  );
}
