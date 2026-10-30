// Unified blog data layer.
//   • If a Sanity project is configured (PUBLIC_SANITY_PROJECT_ID) → fetch published
//     posts from the CMS at build time.
//   • Otherwise → serve the 4 local seed guides from src/data/blog.ts.
// Either way the output is the SAME shape, statically generated → SEO-safe.
import { toHTML } from '@portabletext/to-html';
import type { Lang } from '../config';
import { sanityClient, sanityEnabled, imageUrl } from './sanity';
import { posts as seedPosts, type FaqItem } from '../data/blog';

export type { FaqItem };

export type LoadedPost = {
  slug: string;
  coverImageUrl: string;
  coverAlt: Record<Lang, string>;
  date: string;
  dateLabel: Record<Lang, string>;
  metaTitle: Record<Lang, string>;
  h1: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  metaDescription: Record<Lang, string>;
  bodyHtml: Record<Lang, string>;
  faq: Record<Lang, FaqItem[]>;
};

function fmtDate(iso: string, lang: Lang): string {
  try {
    return new Intl.DateTimeFormat(lang === 'ms' ? 'ms-MY' : 'en-MY', {
      day: 'numeric', month: 'long', year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

// --- local seed → LoadedPost -------------------------------------------------
function fromSeed(): LoadedPost[] {
  return seedPosts.map((p) => ({
    slug: p.slug,
    coverImageUrl: `/assets/img/${p.img}`,
    coverAlt: p.imgAlt,
    date: p.date,
    dateLabel: p.dateLabel,
    metaTitle: p.title,
    h1: p.h1,
    excerpt: p.excerpt,
    metaDescription: p.metaDescription,
    bodyHtml: p.body,
    faq: p.faq,
  }));
}

// --- Sanity → LoadedPost -----------------------------------------------------
const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  "slug": slug.current,
  title, excerpt, metaTitle, metaDescription, publishedAt, coverImage, imageFallback, body, faq
}`;

function loc(obj: any, fallback = ''): Record<Lang, string> {
  const en = obj?.en ?? fallback;
  const ms = obj?.ms ?? en;
  return { en, ms };
}

function fromSanity(docs: any[]): LoadedPost[] {
  return docs.map((doc) => {
    // Schema field "title" is the main/display heading (H1). metaTitle overrides
    // the SEO <title> only; it falls back to the main title when blank.
    const h1 = loc(doc.title);
    const metaTitle = loc(doc.metaTitle);
    if (!metaTitle.en) metaTitle.en = h1.en;
    if (!metaTitle.ms) metaTitle.ms = h1.ms;
    const faqEn: FaqItem[] = (doc.faq ?? []).map((f: any) => ({ q: f?.question?.en ?? '', a: f?.answer?.en ?? '' }));
    const faqMs: FaqItem[] = (doc.faq ?? []).map((f: any) => ({ q: f?.question?.ms ?? f?.question?.en ?? '', a: f?.answer?.ms ?? f?.answer?.en ?? '' }));
    const coverImageUrl = doc.coverImage
      ? imageUrl(doc.coverImage, 1200)
      : doc.imageFallback
        ? `/assets/img/${doc.imageFallback}`
        : '';
    return {
      slug: doc.slug,
      coverImageUrl,
      coverAlt: loc(doc.coverImage?.alt, h1.en),
      date: doc.publishedAt ?? '',
      dateLabel: { en: fmtDate(doc.publishedAt, 'en'), ms: fmtDate(doc.publishedAt, 'ms') },
      metaTitle,
      h1,
      excerpt: loc(doc.excerpt),
      metaDescription: loc(doc.metaDescription),
      bodyHtml: {
        en: doc.body?.en ? toHTML(doc.body.en) : '',
        ms: doc.body?.ms ? toHTML(doc.body.ms) : (doc.body?.en ? toHTML(doc.body.en) : ''),
      },
      faq: { en: faqEn, ms: faqMs },
    };
  });
}

let _cache: LoadedPost[] | null = null;

export async function getAllPosts(): Promise<LoadedPost[]> {
  if (_cache) return _cache;
  if (sanityEnabled && sanityClient) {
    try {
      const docs = await sanityClient.fetch(POSTS_QUERY);
      if (Array.isArray(docs) && docs.length) {
        _cache = fromSanity(docs);
        return _cache;
      }
    } catch (err) {
      console.warn('[posts] Sanity fetch failed, using local seed:', (err as Error).message);
    }
  }
  _cache = fromSeed();
  return _cache;
}

export async function getPostBySlug(slug: string): Promise<LoadedPost | undefined> {
  return (await getAllPosts()).find((p) => p.slug === slug);
}
