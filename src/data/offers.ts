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
  { id: "self", label: "ख़ुद से जुड़ें", artwork: "/assets/segment-kha.png" },
  { id: "roots", label: "मिट्टी से जुड़ें", artwork: "/assets/segment-ma.png" },
  { id: "ideas", label: "विचारों से जुड़ें", artwork: "/assets/segment-va.png" },
  { id: "language", label: "भाषा से जुड़ें", artwork: "/assets/segment-bha.png" },
  { id: "questions", label: "सवालों से जुड़ें", artwork: "/assets/segment-sa.png" },
  { id: "journeys", label: "यात्राओं से जुड़ें", artwork: "/assets/segment-ya.png" },
  { id: "heritage", label: "विरासत से जुड़ें", artwork: "/assets/segment-va2.png" },
  { id: "new-writing", label: "नई कलम से जुड़ें", artwork: "/assets/segment-na.png" },
  { id: "songs", label: "गीतों से जुड़ें", artwork: "/assets/segment-ga.png" },
];
