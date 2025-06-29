# 🕵️‍♂️ wp-widget-detector

> A Chrome extension that instantly scans any Elementor-built WordPress page and lists all core Elementor & Essential Addons widgets in use.  

---

## 🔍 Features

- **Real-time scanning**  
  Detects every `.elementor-widget` wrapper on the current page (with a CSS-class fallback).  
- **Core vs. Addons**  
  Separates official Elementor widgets from Essential Addons (free & pro).  
- **Clickable links**  
  Click any widget slug to scroll & highlight its location on the page.  
- **Live counts**  
  Shows total widget counts for each plugin right in the popup header.  
- **Lightweight & private**  
  Runs entirely in your browser—no external servers, no tracking.

---

## 📦 Installation

1. **Download** this repository: https://github.com/AmitPaul-akp/wp-widget-detector

2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable** Developer Mode (top right toggle)
4. Click **Load unpacked** and select the `wp-widget-detector/` unzipped folder
5. You’re all set! The extension icon appears in your toolbar.

---

## 🚀 Usage

1. **Navigate** to any **published** or **previewed** Elementor page on your WordPress site.
2. Click the **wp-widget-detector** icon in your toolbar.
3. In the popup, you’ll see:

   * **Elementor Widgets (▶️ count)**
   * **Essential Addons (▶️ count)**
4. **Click** any slug in the list to scroll & highlight that widget on the page.

---

## ⚙️ Development

* **Reload extension** after any code change:

  1. Go to `chrome://extensions/` → click **Reload** under **wp-widget-detector**.
  2. Hard-refresh your Elementor page (⌘+R / F5) if you changed the content script.

* **Project structure**

  ```
  wp-widget-detector/
  ├── manifest.json       # Extension metadata & permissions
  ├── content-script.js   # DOM scanning & scroll/highlight logic
  ├── popup.html          # Popup UI markup & styling
  ├── popup.js            # Popup logic (counts, links, messaging)
  ```

---

