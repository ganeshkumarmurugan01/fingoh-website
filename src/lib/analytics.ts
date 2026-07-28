export const GA_ID = 'G-PELQ8TCVFT';

// Generic event tracker
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;
  if (!(window as any).gtag) return;
  (window as any).gtag('event', eventName, params);
}

// Specific conversion events
export const Analytics = {
  bookDemoClick: (source: string) =>
    trackEvent('book_demo_click', { source }),

  demoBooked: () =>
    trackEvent('demo_booked'),

  waitlistOpen: () =>
    trackEvent('waitlist_open'),

  waitlistSubmitted: () =>
    trackEvent('waitlist_submitted'),

  pricingClick: (plan: string) =>
    trackEvent('pricing_click', { plan }),

  heroCtaClick: () =>
    trackEvent('hero_cta_click'),
};