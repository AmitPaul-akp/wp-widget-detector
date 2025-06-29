// 1. Grab all Elementor widgets
const widgets = Array.from(document.querySelectorAll('.elementor-widget'));

// 2. Extract unique slugs
const slugs = [...new Set(
  widgets
    .map(el => el.dataset.widgetType?.split('.')[0])
    .filter(Boolean)
)];

// 3. Separate core vs. EAEL
const core = slugs.filter(s => !s.startsWith('eael-'));
const eael = slugs.filter(s => s.startsWith('eael-'));

// 4. Send results to the popup
chrome.runtime.sendMessage({ action: 'widgetList', core, eael });
