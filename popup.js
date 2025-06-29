chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action !== 'widgetList') return;
  const append = (id, items) => {
    const ul = document.getElementById(id);
    items.forEach(w => {
      const li = document.createElement('li');
      li.textContent = w;
      ul.appendChild(li);
    });
  };
  append('core-list', msg.core);
  append('eael-list', msg.eael);
});
