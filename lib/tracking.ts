// Lightweight client-side tracking helper.
// Safe to import from server components — calls no-op on the server
// or when gtag/fbq are not present.

type EventParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: EventParams) => void;
    fbq?: (command: string, eventName: string, params?: EventParams) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, params);
    }
  } catch {
    // Never let tracking errors break the UI.
  }
}

export function trackWhatsAppClick(source?: string) {
  trackEvent("WhatsAppClicked", source ? { source } : undefined);
}

export function trackLeadSubmitted(formName?: string) {
  trackEvent("LeadSubmitted", formName ? { form: formName } : undefined);
}

export function trackQuizStarted() {
  trackEvent("QuizStarted");
}

export function trackQuizCompleted(result?: string) {
  trackEvent("QuizCompleted", result ? { result } : undefined);
}

export function trackAppointmentClick(source?: string) {
  trackEvent("AppointmentClicked", source ? { source } : undefined);
}

export function trackServiceViewed(service: string) {
  trackEvent("ServiceViewed", { service });
}

export function trackCalculatorUsed(name: string) {
  trackEvent("CalculatorUsed", { name });
}
