// Catalog loader. Products are CMS documents the client manages in Sanity Studio.
//   • If Sanity has products → cards come from the CMS (grouped by category).
//   • Otherwise → the local seed cards (src/data/products.ts + strings.ts).
// Category meta (eyebrow / title / lead) is resolved from the content layer so it
// stays editable too. Output is fully-resolved strings for one language.
import type { Lang } from '../config';
import { sanityEnabled, sanityClient, imageUrl } from './sanity';
import { categories as seedCategories } from '../data/products';
import { STR } from '../i18n/strings';

export type CatalogCard = { img: string; alt: string; title: string; desc: string; badge?: string };
export type CatalogCategory = { id: string; tint: boolean; tag: string; title: string; lead: string; cards: CatalogCard[] };

function pick(obj: any, lang: Lang, fallback = ''): string {
  if (!obj) return fallback;
  return obj[lang] || obj.en || obj.ms || fallback;
}

/** The 4 category sections with their meta + seed cards, resolved for `lang`. */
function seedCatalog(lang: Lang): CatalogCategory[] {
  const d = STR[lang];
  return seedCategories.map((cat) => ({
    id: cat.id,
    tint: cat.tint,
    tag: d[cat.tagKey],
    title: d[cat.titleKey],
    lead: d[cat.leadKey],
    cards: cat.cards.map((c) => ({
      img: `/assets/img/${c.img}`,
      alt: c.alt,
      title: d[c.titleKey],
      desc: d[c.descKey],
      badge: c.badge,
    })),
  }));
}

const PRODUCTS_QUERY = `*[_type == "product"] | order(order asc){
  category, title, description, image, imageFallback, badge, order
}`;

let _cache: Record<Lang, CatalogCategory[]> = {} as any;

export async function getCatalog(lang: Lang): Promise<CatalogCategory[]> {
  if (_cache[lang]) return _cache[lang];
  const base = seedCatalog(lang);

  if (sanityEnabled && sanityClient) {
    try {
      const prods = await sanityClient.fetch(PRODUCTS_QUERY);
      if (Array.isArray(prods) && prods.length) {
        const byCat = new Map<string, CatalogCard[]>();
        for (const p of prods) {
          const key = p.category || 'kitchen';
          const title = pick(p.title, lang);
          const card: CatalogCard = {
            img: p.image
              ? imageUrl(p.image, 800)
              : p.imageFallback
                ? `/assets/img/${p.imageFallback}`
                : '',
            alt: p.image?.alt || title,
            title,
            desc: pick(p.description, lang),
            badge: p.badge || undefined,
          };
          if (!byCat.has(key)) byCat.set(key, []);
          byCat.get(key)!.push(card);
        }
        // Replace cards per-category where the CMS has items; keep seed otherwise.
        _cache[lang] = base.map((cat) => ({ ...cat, cards: byCat.get(cat.id) ?? cat.cards }));
        return _cache[lang];
      }
    } catch (err) {
      console.warn('[catalog] Sanity fetch failed, using seed:', (err as Error).message);
    }
  }

  _cache[lang] = base;
  return base;
}
