import type { Lang } from '../config';

/** Build a localized, trailing-slash path from a locale-agnostic slug ('' = home). */
export function localizedPath(lang: Lang, slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  if (lang === 'en') return clean ? `/${clean}/` : '/';
  return clean ? `/ms/${clean}/` : '/ms/';
}

/** The mirrored path in the other language for the language switch. */
export function altPath(lang: Lang, slug: string): Lang extends never ? never : string {
  const other: Lang = lang === 'en' ? 'ms' : 'en';
  return localizedPath(other, slug);
}

/** Primary nav — slugs are locale-agnostic; labels resolved per page from strings. */
export const NAV_SLUGS = [
  { slug: '', key: 'navHome' },
  { slug: 'about', key: 'navAbout' },
  { slug: 'products', key: 'navProducts' },
  { slug: 'kabinet-dapur-kajang', key: 'navKajang' },
  { slug: 'trade', key: 'navTrade' },
  { slug: 'blog', key: 'navBlog' },
  { slug: 'contact', key: 'navContact' },
] as const;

/** Per-page SEO: unique title + meta description, EN & BM. ~150 char descriptions. */
type Seo = { title: string; description: string };
export const SEO: Record<string, Record<Lang, Seo>> = {
  '': {
    en: {
      title: 'Kitchen Cabinets & Cabinet Doors in Kajang, Selangor | HOMADE SELANGOR',
      description: 'HOMADE SELANGOR manufactures & supplies cabinet door panels, kitchen cabinets (incl. stainless steel) & home fittings in Kajang, Selangor. Serving the Klang Valley since 2012.',
    },
    ms: {
      title: 'Kabinet Dapur & Pintu Kabinet di Kajang, Selangor | HOMADE SELANGOR',
      description: 'HOMADE SELANGOR mengeluar & membekal panel pintu kabinet, kabinet dapur (termasuk keluli tahan karat) & kelengkapan rumah di Kajang, Selangor. Khidmat Lembah Klang sejak 2012.',
    },
  },
  about: {
    en: {
      title: 'About HOMADE SELANGOR — Cabinet Maker in Kajang since 2012',
      description: 'Registered in 2012, HOMADE SELANGOR is a Kajang-based manufacturer of cabinet door panels, kitchen cabinets & home fittings serving homeowners, contractors & trade across the Klang Valley.',
    },
    ms: {
      title: 'Tentang HOMADE SELANGOR — Pembuat Kabinet di Kajang sejak 2012',
      description: 'Didaftar pada 2012, HOMADE SELANGOR ialah pengeluar panel pintu kabinet, kabinet dapur & kelengkapan rumah berpangkalan di Kajang untuk pemilik rumah, kontraktor & peniaga di Lembah Klang.',
    },
  },
  products: {
    en: {
      title: 'Cabinet Doors, Kitchen Cabinets & Home Fittings | HOMADE SELANGOR Kajang',
      description: 'Browse cabinet door panels, kitchen cabinets (incl. stainless steel), home furniture, fittings & appliances by HOMADE SELANGOR, Kajang. Showcase catalog — enquire via WhatsApp.',
    },
    ms: {
      title: 'Pintu Kabinet, Kabinet Dapur & Kelengkapan Rumah | HOMADE SELANGOR Kajang',
      description: 'Layari panel pintu kabinet, kabinet dapur (termasuk keluli tahan karat), perabot rumah, kelengkapan & perkakas oleh HOMADE SELANGOR, Kajang. Katalog pameran — pertanyaan via WhatsApp.',
    },
  },
  contact: {
    en: {
      title: 'Contact HOMADE SELANGOR — Cabinet Supplier in Kajang, Klang Valley',
      description: 'Contact HOMADE SELANGOR in Kajang, Selangor for kitchen cabinets, cabinet doors & fittings. WhatsApp Cheong at 012-231 0118 or send us a message for a quote.',
    },
    ms: {
      title: 'Hubungi HOMADE SELANGOR — Pembekal Kabinet di Kajang, Lembah Klang',
      description: 'Hubungi HOMADE SELANGOR di Kajang, Selangor untuk kabinet dapur, pintu kabinet & kelengkapan. WhatsApp Cheong di 012-231 0118 atau hantar mesej untuk sebut harga.',
    },
  },
  'kabinet-dapur-kajang': {
    en: {
      title: 'Kabinet Dapur Kajang — Kitchen Cabinet Maker & Supplier | HOMADE',
      description: 'Looking for kabinet dapur in Kajang? HOMADE SELANGOR manufactures & installs kitchen cabinets, cabinet doors & stainless steel cabinetry across Kajang, Bangi, Semenyih & Cheras.',
    },
    ms: {
      title: 'Kabinet Dapur Kajang — Pembuat & Pembekal Kabinet Dapur | HOMADE',
      description: 'Cari kabinet dapur di Kajang? HOMADE SELANGOR mengeluar & memasang kabinet dapur, pintu kabinet & kabinet keluli tahan karat di sekitar Kajang, Bangi, Semenyih & Cheras.',
    },
  },
  trade: {
    en: {
      title: 'Cabinet Door Panel Supplier Malaysia | HOMADE (FORMOSA) Selangor',
      description: 'Trade supply of cabinet door panels & stainless steel kitchen cabinets from our Kajang factory. HOMADE (FORMOSA) supplies contractors & cabinet makers across Selangor & Malaysia.',
    },
    ms: {
      title: 'Pembekal Panel Pintu Kabinet Malaysia | HOMADE (FORMOSA) Selangor',
      description: 'Bekalan pukal panel pintu kabinet & kabinet dapur keluli tahan karat dari kilang kami di Kajang. HOMADE (FORMOSA) membekal kontraktor & pembuat kabinet di Selangor & Malaysia.',
    },
  },
  blog: {
    en: {
      title: 'Kitchen Cabinet Guides & Tips | HOMADE SELANGOR Kajang',
      description: 'Guides on kitchen cabinet materials, melamine vs plywood, how cabinet pricing works & the latest cabinet designs — from HOMADE SELANGOR, cabinet maker in Kajang.',
    },
    ms: {
      title: 'Panduan & Tip Kabinet Dapur | HOMADE SELANGOR Kajang',
      description: 'Panduan material kabinet dapur, melamine vs plywood, cara kira harga kabinet & rekaan kabinet terkini — dari HOMADE SELANGOR, pembuat kabinet di Kajang.',
    },
  },
};
