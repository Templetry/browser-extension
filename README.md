# Templetry parent: browser-extension

Browser-extension templates for [Templetry](https://github.com/Templetry). One **parent repo**, multiple **forms** — each form is a subdirectory that compiles on its own and carries its own `template.yml` ([ADR-0011](https://github.com/Templetry/wiki/blob/main/adr/0011-template-forms.md)).

| Form | What it is | Status |
|---|---|---|
| [`wxt-svelte/`](wxt-svelte/) | Chromium MV3 extension — WXT + Svelte 5 + TypeScript, popup and service worker, optional options page, content script and Vitest, presets `full`/`minimal` | ✅ ready |

Target: Chromium (Chrome, Edge, Brave). One repository per extension, since each has its own store listing, version and review cycle.

## Usage

```sh
templetry init browser-extension/wxt-svelte --out ./my-extension --set "project_name=My Extension" --preset full
```

Forms are **chosen**, not combined. Inside a form, the manifest's features (and presets) are the combinable axis.
