import type { Metadata } from 'next';
import { assetLibrary, generatedImages, imageSlotGroups, imageSlots, siteImages } from '@/data/siteImages';

export { assetLibrary, generatedImages, imageSlotGroups, imageSlots, siteImages };
export type { SiteImageSlot, SiteImageType } from '@/data/siteImages';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://layerbylaya.com';

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
  image = generatedImages.homeHero,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      images: [{ url: image }],
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
    areaServed: ['Dubai, UAE', 'Kerala, India', 'Online'],
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
