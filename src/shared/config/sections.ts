// Page anchors shared by the sections and the navigation.
export const SECTION_ID = {
  hero: "hero",
  cases: "cases",
  about: "about",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

export const NAV_ITEMS: ReadonlyArray<{ id: SectionId; label: string }> = [
  { id: SECTION_ID.hero, label: "Главная" },
  { id: SECTION_ID.cases, label: "Кейсы" },
  { id: SECTION_ID.about, label: "О себе" },
  { id: SECTION_ID.contact, label: "Контакты" },
];
