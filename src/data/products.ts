import type { Dict } from '../i18n/strings';

export type Card = {
  img: string;
  alt: string; // localized SEO alt (Kajang + product where natural)
  titleKey: keyof Dict;
  descKey: keyof Dict;
  badge?: string;
};

export type Category = {
  id: string; // anchor
  tagKey: keyof Dict;
  titleKey: keyof Dict;
  leadKey: keyof Dict;
  tint: boolean;
  cards: Card[];
};

// Home page category teasers → link to matching products section anchor.
export const homeCategories = [
  { img: 'cabinet-door.jpg', anchor: 'cabinet-doors', tagKey: 'catCabinet', titleKey: 'catCabTitle', descKey: 'catCabDesc' },
  { img: 'kitchen-premium.jpg', anchor: 'kitchen', tagKey: 'catKitchen', titleKey: 'catKitTitle', descKey: 'catKitDesc' },
  { img: 'furniture-display.jpg', anchor: 'furniture', tagKey: 'catFurniture', titleKey: 'catFurTitle', descKey: 'catFurDesc' },
  { img: 'appliances.jpg', anchor: 'appliances', tagKey: 'catAppliances', titleKey: 'catAppTitle', descKey: 'catAppDesc' },
] as const;

export const categories: Category[] = [
  {
    id: 'cabinet-doors', tagKey: 'secCabinetTag', titleKey: 'catCabinet', leadKey: 'secCabinetLead', tint: false,
    cards: [
      { img: 'cabinet-door.jpg', alt: 'Cabinet door panel finishes — HOMADE Kajang', titleKey: 'cd1T', descKey: 'cd1D' },
      { img: 'cabinet-white.jpg', alt: 'Louvred / profile cabinet doors — HOMADE Kajang', titleKey: 'cd2T', descKey: 'cd2D' },
      { img: 'formosa-booth.jpg', alt: 'FORMOSA cabinet door & stainless steel kitchen range — HOMADE Selangor', titleKey: 'cd3T', descKey: 'cd3D', badge: 'FORMOSA' },
    ],
  },
  {
    id: 'kitchen', tagKey: 'secKitchenTag', titleKey: 'catKitchen', leadKey: 'secKitchenLead', tint: true,
    cards: [
      { img: 'kitchen-premium.jpg', alt: 'Premium island kitchen cabinet — HOMADE Kajang', titleKey: 'k1T', descKey: 'k1D' },
      { img: 'kitchen-2.jpg', alt: 'Modern woodgrain kitchen cabinet — HOMADE Kajang', titleKey: 'k2T', descKey: 'k2D' },
      { img: 'kitchen-classic.jpg', alt: 'Classic white kitchen cabinet — HOMADE Kajang', titleKey: 'k3T', descKey: 'k3D' },
      { img: 'kitchen-apt.jpg', alt: 'Compact apartment kitchen cabinet — HOMADE Kajang', titleKey: 'k4T', descKey: 'k4D' },
      { img: 'kitchen-1.jpg', alt: 'White modern handleless kitchen cabinet set — HOMADE Kajang', titleKey: 'k5T', descKey: 'k5D' },
    ],
  },
  {
    id: 'furniture', tagKey: 'secFurnitureTag', titleKey: 'catFurniture', leadKey: 'secFurnitureLead', tint: false,
    cards: [
      { img: 'furniture-display.jpg', alt: 'Display & storage cabinet — HOMADE Kajang', titleKey: 'f1T', descKey: 'f1D' },
      { img: 'furniture-shelf.jpg', alt: 'Shelving & home office fittings — HOMADE Kajang', titleKey: 'f2T', descKey: 'f2D' },
      { img: 'furniture-island.jpg', alt: 'Bespoke island & custom units — HOMADE Kajang', titleKey: 'f3T', descKey: 'f3D' },
      { img: 'kitchen-wood.jpg', alt: 'Wood cabinetry with wine storage — HOMADE Kajang', titleKey: 'f4T', descKey: 'f4D' },
    ],
  },
  {
    id: 'appliances', tagKey: 'secApplianceTag', titleKey: 'catAppliances', leadKey: 'secApplianceLead', tint: true,
    cards: [
      { img: 'appliances.jpg', alt: 'Built-in kitchen appliances — HOMADE Kajang', titleKey: 'a1T', descKey: 'a1D' },
      { img: 'appliances-2.jpg', alt: 'Traditional kitchen with appliances — HOMADE Kajang', titleKey: 'a2T', descKey: 'a2D' },
      { img: 'cabinet-white.jpg', alt: 'Cabinet fittings & accessories — HOMADE Kajang', titleKey: 'a3T', descKey: 'a3D' },
    ],
  },
];
