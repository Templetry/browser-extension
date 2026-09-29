import { defineConfig } from "wxt";

// https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-svelte"],
  manifest: {
    name: "Template App",
    description: "Template App, a Chromium extension.",
    // Ask for the least that works. Every permission is questioned in the
    // Chrome Web Store review, and each one is a warning at install time.
    permissions: ["storage"],
  },
});
