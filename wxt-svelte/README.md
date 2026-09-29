# TemplateApp

Chromium extension (Manifest V3) generated with [Templetry](https://github.com/Templetry): [WXT](https://wxt.dev) + Svelte 5 + TypeScript. It runs on Chrome, Edge and Brave.

```sh
npm install
npm run dev       # opens Chrome with the extension loaded, rebuilds on save
npm run build     # svelte-check + wxt build, output in .output/chrome-mv3
npm run zip       # the .zip you upload to the Chrome Web Store
npm test          # vitest feature
```

## Layout

| Path | What it is |
|---|---|
| `entrypoints/background.ts` | Service worker. Torn down at will: keep no state in variables |
| `entrypoints/popup/` | The toolbar popup, a Svelte app |
| `entrypoints/options/` | Options page (feature `options`) |
| `entrypoints/content.ts` | Content script (feature `content_script`) |
| `lib/` | Code shared by every entrypoint; `settings.ts` holds typed storage items |
| `public/icon/` | Store icons (16/32/48/96/128). These are placeholders: replace them |

WXT reads `entrypoints/` and writes `manifest.json` from what it finds, so adding a side panel or a new content script is adding a file.

## Publishing to the Chrome Web Store

1. Replace the icons, and set the real `description` in `wxt.config.ts`.
2. Keep `permissions` and content-script `matches` to the minimum the extension's single purpose needs; each one is questioned in review.
3. Bump `version` in `package.json` for every upload.
4. `npm run zip`, then upload the archive in the developer dashboard. The first listing is filled in by hand (screenshots, description, privacy policy URL, data-use declarations).
5. All code must ship in the package: Manifest V3 forbids loading remote code.
