/** Event names pushed to dataLayer for GTM to forward to GA4. */
export const ANALYTICS_EVENTS = {
  NAVBAR_CLICK: 'navbar_click',
  LANGUAGE_TOGGLE: 'language_toggle',
  PROJECT_IMAGE_NAVIGATION: 'project_image_navigation',
};

/** Push a structured event that GTM custom-event triggers can listen to. */
export function trackEvent(event, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
