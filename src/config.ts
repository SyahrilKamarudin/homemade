// Central business facts (confirmed by client) — used across pages, footer, schema.
export const SITE_NAME = 'HOMADE SELANGOR SDN BHD';

export const NAP = {
  name: 'HOMADE SELANGOR SDN BHD',
  regNo: '982127-M (201201008607)',
  incorporated: '13 March 2012',
  contactPerson: 'Cheong',
  phoneDisplay: '010-860 7845',
  phoneIntl: '+60108607845', // tel: link (primary = first enquiry number)
  whatsapp: '60108607845', // wa.me number (primary)
  street: 'Lot 15B, Jalan Simpang Balak, Kg Simpang Balak',
  locality: 'Kajang',
  region: 'Selangor',
  postalCode: '43200',
  country: 'MY',
  facebook: 'https://www.facebook.com/share/1HShRRGuQT/',
  // 🚩 TODO(client): confirm real email; none provided yet.
  email: null as string | null,
  // Exact location — confirmed from the client's Google Maps / Waze pin.
  geo: { lat: 3.015554, lng: 101.758654 },
  googleMaps: 'https://maps.app.goo.gl/WhYoDH3rC4W26rLy9',
  waze: 'https://waze.com/ul/hw2835sfqu',
  // Opening hours — confirmed by client (Mon–Sat, 9am–6pm)
  openingHours: 'Mo-Sa 09:00-18:00',
  openingHoursDisplay: { en: 'Mon – Sat, 9.00 am – 6.00 pm', ms: 'Isnin – Sabtu, 9.00 pg – 6.00 ptg' },
};

// Google Maps embed centred on the exact workshop coordinates.
export const MAP_EMBED = `https://www.google.com/maps?q=${NAP.geo.lat},${NAP.geo.lng}&z=16&output=embed`;

// Prefilled WhatsApp click-to-chat messages (EN + BM).
export const WA_TEXT = {
  en: 'Hi HOMADE, I am interested in your cabinets/kitchen. Could you help me with a quote?',
  ms: 'Hi HOMADE, saya berminat dengan kabinet/dapur. Boleh bantu saya dengan sebut harga?',
};

export function waLink(lang: 'en' | 'ms', extra?: string) {
  const base = extra ? `${WA_TEXT[lang]} (${extra})` : WA_TEXT[lang];
  return `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(base)}`;
}

// All enquiry numbers. Every contact / enquiry action lets the visitor pick one
// of these first (see ContactChooser.astro). First entry = primary (used for
// schema telephone + no-JS fallbacks).
export const CONTACTS = [
  { display: '010-860 7845', intl: '60108607845' },
  { display: '016-260 8854', intl: '60162608854' },
  { display: '010-236 8854', intl: '60102368854' },
] as const;

export function telLink(intl: string) {
  return `tel:+${intl.replace(/^\+/, '')}`;
}

export function waLinkFor(intl: string, lang: 'en' | 'ms', extra?: string) {
  const base = extra ? `${WA_TEXT[lang]} (${extra})` : WA_TEXT[lang];
  return `https://wa.me/${intl}?text=${encodeURIComponent(base)}`;
}

export type Lang = 'en' | 'ms';
