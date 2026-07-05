export type SiteImageType = 'generated-campaign' | 'real-portfolio' | 'brand-detail';

export type SiteImageSlot = {
  id: string;
  page: string;
  slot: string;
  src: string;
  alt: string;
  type: SiteImageType;
  objectPosition: string;
  ratio: string;
  notes?: string;
};

export const siteImages = {
  home: {
    hero: {
      id: 'home.hero',
      page: 'Home',
      slot: 'Hero image',
      src: '/assets/images/generated/home/home-hero-luxury-01.webp',
      alt: 'Premium bridal makeup and jasmine hair styling by LayeR by Laya',
      type: 'generated-campaign',
      objectPosition: 'right center',
      ratio: '4:5',
    },
    secondary: {
      id: 'home.secondary',
      page: 'Home',
      slot: 'Secondary campaign image',
      src: '/assets/images/generated/home/home-hero-luxury-02.webp',
      alt: 'Soft luxury beauty campaign image for LayeR by Laya',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '3:4',
    },
  },
  bridalDubai: {
    hero: {
      id: 'bridalDubai.hero',
      page: 'Bridal Dubai',
      slot: 'Hero image',
      src: '/assets/images/generated/bridal-dubai/bridal-dubai-luxury-01.webp',
      alt: 'Premium bridal makeup artist Dubai look with refined hair styling',
      type: 'generated-campaign',
      objectPosition: 'center 25%',
      ratio: '4:5',
    },
    secondary: {
      id: 'bridalDubai.secondary',
      page: 'Bridal Dubai',
      slot: 'Secondary image',
      src: '/assets/images/generated/bridal-dubai/bridal-dubai-luxury-02.webp',
      alt: 'Dubai bridal makeup and hair styling mood for a luxury wedding suite',
      type: 'generated-campaign',
      objectPosition: 'center 35%',
      ratio: '3:4',
      notes: 'Keep hands secondary in crop.',
    },
  },
  bridalKerala: {
    hero: {
      id: 'bridalKerala.hero',
      page: 'Bridal Kerala',
      slot: 'Hero image',
      src: '/assets/images/generated/bridal-kerala/bridal-kerala-luxury-01.webp',
      alt: 'Kerala bridal makeup with jasmine, gold jewellery, and warm ivory styling',
      type: 'generated-campaign',
      objectPosition: 'center 25%',
      ratio: '4:5',
    },
    secondary: {
      id: 'bridalKerala.secondary',
      page: 'Bridal Kerala',
      slot: 'Secondary image',
      src: '/assets/images/generated/bridal-kerala/bridal-kerala-luxury-02.webp',
      alt: 'South Indian bridal makeup Kerala mood with saree and jewellery styling',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
      notes: 'Do not over-crop hands or jewellery.',
    },
  },
  onlineConsultation: {
    hero: {
      id: 'onlineConsultation.hero',
      page: 'Online Consultation',
      slot: 'Hero image',
      src: '/assets/images/generated/online-consultation/online-consultation-luxury-01.webp',
      alt: 'Online makeup consultation setup with refined beauty products and video guidance',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
      notes: 'Keep tiny screen and product text as background detail.',
    },
    secondary: {
      id: 'onlineConsultation.secondary',
      page: 'Online Consultation',
      slot: 'Secondary image',
      src: '/assets/images/generated/online-consultation/online-consultation-luxury-02.webp',
      alt: 'Virtual makeup consultation and beauty lesson mood',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
    },
  },
  daily: {
    hero: {
      id: 'daily.hero',
      page: 'Daily Makeup',
      slot: 'Hero image',
      src: '/assets/images/generated/editorial/editorial-beauty-closeup-02.webp',
      alt: 'Polished everyday makeup consultation with luminous skin and soft colour',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
    },
  },
  kitAudit: {
    approved: {
      id: 'kitAudit.approved',
      page: 'Kit Audit',
      slot: 'Approved kit audit image',
      src: '/assets/images/generated/kit-audit/kit-audit-luxury-02.webp',
      alt: 'Premium makeup kit audit with beauty tools and product review setup',
      type: 'generated-campaign',
      objectPosition: 'center 34%',
      ratio: '4:5',
      notes: 'Only approved kit audit image. Do not crop tightly on hand, brush, or labels.',
    },
  },
  editorial: {
    closeupOne: {
      id: 'editorial.closeupOne',
      page: 'Fashion Editorial',
      slot: 'Editorial close-up 01',
      src: '/assets/images/generated/editorial/editorial-beauty-closeup-01.webp',
      alt: 'Fashion makeup artist Dubai beauty close-up with polished skin and refined eyes',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
    },
    closeupTwo: {
      id: 'editorial.closeupTwo',
      page: 'Fashion Editorial',
      slot: 'Editorial close-up 02',
      src: '/assets/images/generated/editorial/editorial-beauty-closeup-02.webp',
      alt: 'Editorial makeup detail with luminous skin, soft lips, and camera-ready finish',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
    },
  },
  hair: {
    stylingOne: {
      id: 'hair.stylingOne',
      page: 'Hair Styling',
      slot: 'Hair styling image 01',
      src: '/assets/images/generated/hair/hair-styling-luxury-01.webp',
      alt: 'Luxury makeup and hair Dubai styling with polished waves and accessory detail',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
    },
    stylingTwo: {
      id: 'hair.stylingTwo',
      page: 'Hair Styling',
      slot: 'Hair styling image 02',
      src: '/assets/images/generated/hair/hair-styling-luxury-02.webp',
      alt: 'Elegant hair styling detail for bridal, party, and editorial beauty',
      type: 'generated-campaign',
      objectPosition: 'center',
      ratio: '4:5',
    },
  },
  brandDetail: {
    detailOne: {
      id: 'brandDetail.detailOne',
      page: 'Brand Detail',
      slot: 'Brand detail 01',
      src: '/assets/images/generated/brand-detail/brand-detail-luxury-01.webp',
      alt: 'LayeR by Laya brand detail with soft champagne beauty styling',
      type: 'brand-detail',
      objectPosition: 'center',
      ratio: '4:5',
    },
    detailTwo: {
      id: 'brandDetail.detailTwo',
      page: 'Brand Detail',
      slot: 'Brand detail 02',
      src: '/assets/images/generated/brand-detail/brand-detail-luxury-02.webp',
      alt: 'Blush and champagne LayeR brand mood for premium makeup and hair styling',
      type: 'brand-detail',
      objectPosition: 'center',
      ratio: '4:5',
      notes: 'Use as brand mood only.',
    },
  },
  portfolio: Object.fromEntries(
    Array.from({ length: 12 }, (_, index) => {
      const number = String(index + 1).padStart(2, '0');
      return [
        `portfolio${number}`,
        {
          id: `portfolio.${number}`,
          page: 'Portfolio',
          slot: `Real portfolio ${number}`,
          src: `/assets/images/portfolio/portfolio-${number}.jpg`,
          alt: `Real LayeR portfolio makeup and hair image ${number}`,
          type: 'real-portfolio',
          objectPosition: 'center',
          ratio: '3:4',
        },
      ];
    }),
  ) as Record<string, SiteImageSlot>,
} satisfies Record<string, Record<string, SiteImageSlot>>;

export const generatedImages = {
  homeHero: siteImages.home.hero.src,
  homeSecondary: siteImages.home.secondary.src,
  bridalDubaiHero: siteImages.bridalDubai.hero.src,
  bridalDubaiSecondary: siteImages.bridalDubai.secondary.src,
  bridalKeralaHero: siteImages.bridalKerala.hero.src,
  bridalKeralaSecondary: siteImages.bridalKerala.secondary.src,
  onlineHero: siteImages.onlineConsultation.hero.src,
  onlineSecondary: siteImages.onlineConsultation.secondary.src,
  editorialOne: siteImages.editorial.closeupOne.src,
  editorialTwo: siteImages.editorial.closeupTwo.src,
  hairOne: siteImages.hair.stylingOne.src,
  hairTwo: siteImages.hair.stylingTwo.src,
  kitAuditApproved: siteImages.kitAudit.approved.src,
  brandDetailOne: siteImages.brandDetail.detailOne.src,
  brandDetailTwo: siteImages.brandDetail.detailTwo.src,
};

export const imageSlotGroups = Object.entries(siteImages).map(([group, slots]) => ({
  group,
  slots: Object.values(slots),
}));

export const imageSlots = imageSlotGroups.flatMap((group) => group.slots);

export const assetLibrary = imageSlots.map((slot) => slot.src);
