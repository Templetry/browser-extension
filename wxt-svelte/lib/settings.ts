import { storage } from "#imports";

/**
 * Typed storage items: one place that names each key and its default, so the
 * popup, the options page and the service worker cannot disagree about them.
 */
export const visits = storage.defineItem<number>("local:visits", { fallback: 0 });
