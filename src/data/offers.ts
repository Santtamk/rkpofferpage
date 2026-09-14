export type OfferCategory = {
  id: string;
  label: string;
  artwork: string;
  /** Set the real category URL when connecting the publisher's catalogue. */
  href?: string;
};

export const campaign = {
  title: "साथ जुड़ें, साथ पढ़ें",
  // Supplied campaign artwork; the original reference remains in public/assets.
  banner: "/assets/banner_for_offer.jpg",
  bannerAlt: "राजकमल प्रकाशन समूह — साथ जुड़ें, साथ पढ़ें। हिंदी पखवाड़ा, 15 से 30 सितंबर। 10% छूट और मुफ़्त डिलीवरी। ₹2000 पर 5%, ₹5000 और ₹10000 पर 7% अतिरिक्त छूट।",
};

export const offerCategories: OfferCategory[] = [
  { id: "relationships", label: "नातों से जुड़ें", artwork: "/assets/segment-1.svg" },
  { id: "roots", label: "मिट्टी से जुड़ें", artwork: "/assets/segment-2.svg" },
  { id: "self", label: "ख़ुद से जुड़ें", artwork: "/assets/segment-3.svg" },
  { id: "language", label: "बोली से जुड़ें", artwork: "/assets/segment-4.svg" },
  { id: "questions", label: "सवालों से जुड़ें", artwork: "/assets/segment-5.svg" },
  { id: "ideas", label: "ख़यालों से जुड़ें", artwork: "/assets/segment-6.svg" },
  { id: "heritage", label: "विरासत से जुड़ें", artwork: "/assets/segment-7.svg" },
  { id: "new-writing", label: "नई कलम से जुड़ें", artwork: "/assets/segment-8.svg" },
  { id: "poetry", label: "कविता से जुड़ें", artwork: "/assets/segment-9.svg" },
];
