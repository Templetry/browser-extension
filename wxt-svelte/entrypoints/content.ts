// Runs inside matching pages. Narrow `matches` as far as the extension's one
// purpose allows: `<all_urls>` draws the longest store review and the scariest
// install warning.
export default defineContentScript({
  matches: ["https://example.com/*"],
  main() {
    console.log("Template App: content script running on", location.href);
  },
});
