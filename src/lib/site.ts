import type { Metadata } from 'next';
import { assetLibrary, generatedImages, imageSlotGroups, imageSlots, siteImages } from '@/data/siteImages';

export { assetLibrary, generatedImages, imageSlotGroups, imageSlots, siteImages };
export type { SiteImageSlot, SiteImageType } from '@/data/siteImages';

// The public canonical origin must remain stable on preview deployments.
export const siteUrl = 'https://layerbylaya.com';
export const socialPreview = {
  url: '/social/layerbylaya-social-preview-v1.jpg',
  width: 1200,
  height: 630,
  alt: 'LayeR by Laya premium makeup and hair styling',
};

export const brand = {
  name: 'LayeR by Laya',
  instagram: 'https://instagram.com/layerbylaya',
  email: 'rahultb1996@gmail.com',
  phone: '+971547467995',
  phoneDisplay: '+971 54 746 7995',
  locations: ['Dubai, UAE', 'Kerala, India'],
  keralaCities: ['Kochi', 'Kottayam', 'Thiruvananthapuram', 'Thrissur', 'Kozhikode', 'Alappuzha'],
  uaeCities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${siteUrl}${item.path}`,
      })),
    ],
  };
}

export const whatsappLinks = {
  general: 'https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20makeup%20or%20hair%20styling.%20Please%20share%20your%20availability%20and%20packages.',
  bridalDubai: 'https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20am%20looking%20for%20bridal%20makeup%20and%20hair%20in%20UAE.%20Please%20share%20your%20bridal%20packages%20and%20availability.',
  bridalKerala: 'https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20am%20looking%20for%20bridal%20makeup%20and%20hair%20in%20Kerala.%20Please%20share%20your%20bridal%20packages%20and%20availability.',
  online: 'https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20an%20online%20makeup%20consultation.%20Please%20share%20available%20slots%20and%20pricing.',
  production: 'https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20need%20makeup%20and%20hair%20styling%20for%20a%20shoot.%20Please%20share%20your%20availability%20for%20commercial%20or%20production%20work.',
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
  // Kept for existing callers; the branded social card is shared across pages.
  image?: string;
}): Metadata {
  const shareTitle = path === '/' ? 'LayeR by Laya | Premium Makeup & Hair Styling' : `${title} | LayeR by Laya`;
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title: shareTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName: brand.name,
      type: 'website',
      images: [socialPreview],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [socialPreview.url],
    },
  };
}

export function serviceSchema({
  path,
  name,
  description,
  image = generatedImages.homeHero,
}: {
  path: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    '@type': 'Service',
    url: `${siteUrl}${path}`,
    name,
    description,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    image: `${siteUrl}${image}`,
    ...(path.includes('online') || path.includes('consultation') || path.includes('kit-audit')
      ? { areaServed: 'Online' }
      : path.includes('kerala')
        ? { areaServed: 'Kerala, India' }
        : path.includes('dubai')
          ? { areaServed: 'Dubai, United Arab Emirates' }
          : {}),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export const commonFaqs: FaqItem[] = [
  {
    question: 'Can I book makeup and hair together?',
    answer: 'Yes. Laya can plan makeup and hair as one complete look, with skin, eyes, lips, waves, buns, veils, and accessories balanced together.',
  },
  {
    question: 'Do you travel for bridal bookings?',
    answer: 'Selected UAE, Kerala, and destination bookings can be discussed early with the date, venue, ceremony schedule, and travel requirements.',
  },
  {
    question: 'How do I book Laya on WhatsApp?',
    answer: 'Send your date, location, service, outfit direction, timing, and reference mood. Laya will guide you toward the right service and next steps.',
  },
];

export const internalLinks = [
  { label: 'Bridal Dubai', href: '/bridal-makeup-dubai' },
  { label: 'Bridal Kerala', href: '/bridal-makeup-kerala' },
  { label: 'Online Consultation', href: '/online-makeup-consultation' },
  { label: 'Real Portfolio', href: '/portfolio' },
];
