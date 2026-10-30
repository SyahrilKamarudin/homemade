// Page content loader. Returns the full UI dictionary for a language, with any
// values the client edited in Sanity (homePage / aboutPage / productsPage
// singletons) overlaid on top of the built-in copy. Field names in those
// singletons mirror the dictionary keys, so the overlay is automatic.
// Fetched at BUILD TIME; falls back to the hardcoded strings so the build never
// breaks before the CMS is connected or when a field is left blank.
import type { Lang } from '../config';
import { STR, type Dict } from '../i18n/strings';
import { sanityEnabled, sanityClient } from './sanity';

// Overlay a singleton doc's locale fields onto the dictionary (in place).
function overlay(base: Record<string, string>, doc: any, lang: Lang) {
  if (!doc || typeof doc !== 'object') return;
  for (const [key, val] of Object.entries(doc)) {
    if (key.startsWith('_')) continue;
    if (val && typeof val === 'object' && ('en' in (val as any) || 'ms' in (val as any))) {
      const picked = (val as any)[lang] || (val as any).en || (val as any).ms;
      if (typeof picked === 'string' && picked.trim()) base[key] = picked;
    }
  }
}

const QUERY = `{
  "home": *[_type == "homePage"][0],
  "about": *[_type == "aboutPage"][0],
  "products": *[_type == "productsPage"][0]
}`;

const _cache: Partial<Record<Lang, Dict>> = {};

export async function getContent(lang: Lang): Promise<Dict> {
  if (_cache[lang]) return _cache[lang]!;
  const base: Record<string, string> = { ...(STR[lang] as Record<string, string>) };

  if (sanityEnabled && sanityClient) {
    try {
      const { home, about, products } = await sanityClient.fetch(QUERY);
      overlay(base, home, lang);
      overlay(base, about, lang);
      overlay(base, products, lang);
    } catch (err) {
      console.warn('[content] Sanity fetch failed, using built-in copy:', (err as Error).message);
    }
  }

  _cache[lang] = base as unknown as Dict;
  return _cache[lang]!;
}
