// extension/content-script.js

/**
 * Scans the page for Elementor widgets and splits them into core vs. EAEL.
 */
function detectWidgets() {
  const widgets = Array.from(document.querySelectorAll('.elementor-widget'));
  const slugs = [...new Set(
    widgets
      .map(el => el.dataset.widgetType?.split('.')[0])
      .filter(Boolean)
  )];

  return {
    core: slugs.filter(s => !s.startsWith('eael-')),
    eael: slugs.filter(s => s.startsWith('eael-'))
  };
}

// Listen for requests from the popup and respond with our detection results
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'getWidgetList') {
    sendResponse(detectWidgets());
  }
});
