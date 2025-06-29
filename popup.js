// extension/popup.js

// When the popup opens, query the active tab for its widget list
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { action: 'getWidgetList' },
    (response) => {
      if (!response) return;  // nothing to show if no Elementor widgets found

      const appendItems = (ulId, items) => {
        const ul = document.getElementById(ulId);
        items.forEach(w => {
          const li = document.createElement('li');
          li.textContent = w;
          ul.appendChild(li);
        });
      };

      appendItems('core-list', response.core);
      appendItems('eael-list', response.eael);
    }
  );
});
