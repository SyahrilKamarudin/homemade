// Central business facts (confirmed by client) — used across pages, footer, schema.
export const SITE_NAME = 'HOMADE SELANGOR SDN BHD';

export const NAP = {
  name: 'HOMADE SELANGOR SDN BHD',
  regNo: '982127-M (201201008607)',
  incorporated: '13 March 2012',
  contactPerson: 'Cheong',
  phoneDisplay: '012-231 0118',
  phoneIntl: '+60122310118', // tel: link
  whatsapp: '60122310118', // wa.me number
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
  // Opening hours — confirmed by client
  openingHours: 'Mo-Fr 08:30-17:30',
  openingHoursDisplay: { en: 'Mon – Fri, 8.30 am – 5.30 pm', ms: 'Isnin – Jumaat, 8.30 pg – 5.30 ptg' },
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

export type Lang = 'en' | 'ms';
