// Site settings loader. Lets the client edit "important info" (contact numbers,
// email, Facebook, announcement banner) from the Sanity Studio admin — without code.
// Fetched at BUILD TIME; falls back to config.ts defaults so the build always works
// before the CMS is connected or if a field is left blank.
import { sanityClient, sanityEnabled } from './sanity';
import { CONTACTS, NAP } from '../config';

export type Contact = { display: string; intl: string };
export type SiteSettings = {
  contacts: Contact[];
  email: string | null;
  facebook: string;
  announcement: { en: string; ms: string } | null;
};

const FALLBACK: SiteSettings = {
  contacts: CONTACTS.map((c) => ({ display: c.display, intl: c.intl })),
  email: NAP.email,
  facebook: NAP.facebook,
  announcement: null,
};

const QUERY = `*[_type == "siteSettings"][0]{ contacts, email, facebook, announcement, announcementActive }`;

let _cache: SiteSettings | null = null;

export async function getSettings(): Promise<SiteSettings> {
  if (_cache) return _cache;
  if (sanityEnabled && sanityClient) {
    try {
      const doc = await sanityClient.fetch(QUERY);
      if (doc) {
        const contacts: Contact[] =
          Array.isArray(doc.contacts) && doc.contacts.length
            ? doc.contacts
                .filter((c: any) => c && c.display && c.intl)
                .map((c: any) => ({ display: String(c.display), intl: String(c.intl).replace(/[^0-9]/g, '') }))
            : FALLBACK.contacts;
        _cache = {
          contacts: contacts.length ? contacts : FALLBACK.contacts,
          email: doc.email || FALLBACK.email,
          facebook: doc.facebook || FALLBACK.facebook,
          announcement:
            doc.announcementActive && doc.announcement && (doc.announcement.en || doc.announcement.ms)
              ? { en: doc.announcement.en || doc.announcement.ms || '', ms: doc.announcement.ms || doc.announcement.en || '' }
              : null,
        };
        return _cache;
      }
    } catch (err) {
      console.warn('[settings] Sanity fetch failed, using defaults:', (err as Error).message);
    }
  }
  _cache = FALLBACK;
  return _cache;
}
