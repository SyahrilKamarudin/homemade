// SEO override loader. Lets the client fine-tune each page's <title> and meta
// description from Sanity (seoMeta singleton). Returns {} when not connected or
// when a page/field is blank — BaseLayout then keeps the built-in SEO text.
import type { Lang } from '../config';
import { sanityEnabled, sanityClient } from './sanity';

export type SeoOverride = { title?: string; description?: string };

const QUERY = `*[_type == "seoMeta"][0]{ pages }`;
let _cache: any = undefined; // the whole seoMeta doc, fetched once

export async function getSeoOverride(slug: string, lang: Lang): Promise<SeoOverride> {
  if (!sanityEnabled || !sanityClient) return {};
  try {
    if (_cache === undefined) _cache = (await sanityClient.fetch(QUERY)) ?? null;
    const pages = _cache?.pages;
    if (!Array.isArray(pages)) return {};
    const key = slug === '' ? 'home' : slug; // home page slug is '' in the app
    const p = pages.find((x: any) => x?.page === key);
    if (!p) return {};
    const pick = (o: any): string | undefined => (o?.[lang] || o?.en || o?.ms || undefined);
    return { title: pick(p.title), description: pick(p.description) };
  } catch {
    return {};
  }
}
