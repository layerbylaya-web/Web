import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { CampaignImageNote, FAQSection, InternalLinkSection } from '@/components/PremiumSections';
import { StaggerContainer, StaggerItem } from '@/components/AnimationWrappers';
import { commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Makeup, Hair & Beauty Services',
  description: 'Premium makeup, hair and beauty services by LayeR by Laya for bridal makeup Dubai, bridal makeup Kerala, party glam, fashion shoots, commercial productions, and online makeup consultation.',
  path: '/services',
  image: generatedImages.homeSecondary,
});

const faqs = [
  {
    question: 'Which LayeR service should I choose?',
    answer: 'Choose bridal for wedding-day styling, party for event glam, editorial or commercial for camera-led work, and online consultation for routine, kit audit, or makeup lessons.',
  },
  {
    question: 'Can I combine makeup, hair styling, and online planning?',
    answer: 'Yes. Many clients combine bridal makeup and hair with online planning, kit audit, or a trial-style discussion before the date.',
  },
  ...commonFaqs,
];

export default function ServicesPage() {
  const services = [
    {
      title: 'Bridal Makeup Dubai',
      description: 'Luxury bridal makeup artist Dubai services for UAE weddings, South Indian bridal makeup Dubai, and reception styling.',
      image: generatedImages.bridalDubaiHero,
      href: '/bridal-makeup-dubai',
    },
    {
      title: 'Bridal Makeup Kerala',
      description: 'Jasmine, gold, saree, and veil-aware bridal makeup Kerala for Kottayam, Kochi, and selected destination dates.',
      image: generatedImages.bridalKeralaHero,
      href: '/bridal-makeup-kerala',
    },
    {
      title: 'Party Makeup & Hair',
      description: 'Soft glam, evening glam, textured waves, buns, and polished event hair in Dubai.',
      image: generatedImages.hairOne,
      href: '/party-makeup-and-hair',
    },
    {
      title: 'Fashion & Editorial',
      description: 'Campaign-ready makeup and hair for fashion, model tests, beauty close-ups, and creative direction.',
      image: generatedImages.editorialOne,
      href: '/fashion-editorial-makeup',
    },
    {
      title: 'Commercial Production',
      description: 'Commercial makeup artist Dubai support for shoots, corporate video, grooming, and continuity.',
      image: generatedImages.brandDetailOne,
      href: '/commercial-makeup-artist-dubai',
    },
    {
      title: 'Online Consultation',
      description: 'Online makeup consultation for daily routine, bridal planning, kit audit, and one-to-one lessons.',
      image: generatedImages.onlineHero,
      href: '/online-makeup-consultation',
    },
    {
      title: 'Daily Makeup',
      description: 'A practical daily makeup consultation for your skin, schedule, and existing products.',
      image: generatedImages.editorialTwo,
      href: '/daily-makeup-consultation',
    },
    {
      title: 'Kit Audit',
      description: 'A makeup kit audit online to keep, remove, and replace products with less waste.',
      image: generatedImages.kitAuditApproved,
      href: '/personal-makeup-kit-audit',
    },
    {
      title: 'Learn Makeup Online',
      description: 'Learn makeup online one to one with live correction on your own face.',
      image: generatedImages.onlineSecondary,
      href: '/learn-your-own-makeup-online',
    },
  ];

  return (
    <>
      <JsonLd pageSchema={[
        serviceSchema({
          path: '/services',
          name: 'LayeR makeup and hair services',
          description: metadata.description || '',
          image: generatedImages.homeSecondary,
        }),
        faqSchema(faqs),
      ]} />
      <div className="luxury-gradient ambient-gradient min-h-screen px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance font-serif text-5xl leading-tight text-deep-espresso md:text-7xl">
              {siteContent.services.h1}
            </h1>
            <p className="mt-6 text-base font-light leading-8 text-soft-espresso/78 md:text-lg">
              {siteContent.services.intro}
            </p>
          </div>
          <CampaignImageNote />

          <StaggerContainer className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <StaggerItem key={svc.title}>
                <Link href={svc.href} className="group block">
                  <div className={`editorial-frame relative overflow-hidden bg-warm-ivory ${i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
                    <Image
                      src={svc.image}
                      alt={`${svc.title} campaign visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ objectPosition: svc.title === 'Kit Audit' ? 'center 34%' : 'center' }}
                    />
                    <div className="pointer-events-none absolute inset-0 border border-white/60" />
                    <div className="absolute bottom-0 left-0 right-0 bg-blush-paper/76 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-deep-espresso backdrop-blur-md">
                      {String(i + 1).padStart(2, '0')} / {svc.title}
                    </div>
                  </div>
                  <div className="pt-7">
                    <h2 className="font-serif text-3xl leading-tight text-deep-espresso">{svc.title}</h2>
                    <p className="mt-3 text-sm font-light leading-6 text-soft-espresso/72">{svc.description}</p>
                    <span className="mt-5 inline-flex border-b border-metallic-gold pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-deep-espresso transition-colors group-hover:text-deep-gold">
                      Explore service
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
