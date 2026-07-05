import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { FAQSection, InternalLinkSection, SectionIntro } from '@/components/PremiumSections';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimationWrappers';
import { commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Online Makeup Consultation',
  description: 'Online makeup consultation by LayeR by Laya for daily makeup consultation, makeup kit audit online, bridal look planning, and learn makeup online one to one sessions.',
  path: '/online-makeup-consultation',
  image: generatedImages.onlineHero,
});

const faqs = [
  {
    question: 'How does an online makeup consultation work?',
    answer: 'The session happens over video call. Laya reviews your face, routine, products, lighting, and goals, then guides practical steps you can repeat yourself.',
  },
  {
    question: 'Can I use online consultation for bridal look planning?',
    answer: 'Yes. Bridal look planning can cover references, outfit tone, jewelry, hair direction, skin prep, and what to request from your local artist if Laya is not physically present.',
  },
  {
    question: 'Do I need a professional kit for the session?',
    answer: 'No. The point is to work with your current products first, then identify what to keep, remove, or replace only when it genuinely improves your routine.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function OnlineConsultationPage() {
  const onlineServices = [
    {
      title: 'Video consultation',
      desc: 'A focused one-to-one call for face mapping, undertone, feature balance, and technique correction.',
      image: generatedImages.onlineSecondary,
      href: '/online-makeup-consultation',
    },
    {
      title: 'Daily routine',
      desc: 'A realistic daily makeup consultation built around your lifestyle, skin, and available time.',
      image: generatedImages.editorialTwo,
      href: '/daily-makeup-consultation',
    },
    {
      title: 'Kit audit',
      desc: 'A keep, remove, replace review of products and tools. Uses the approved kit image with crop care.',
      image: generatedImages.kitAuditApproved,
      href: '/personal-makeup-kit-audit',
    },
    {
      title: 'Bridal look planning',
      desc: 'Remote direction for outfit, jewelry, skin prep, hair, and artist communication before the wedding.',
      image: generatedImages.bridalKeralaSecondary,
      href: '/bridal-makeup-kerala',
    },
    {
      title: 'Learn your own makeup',
      desc: 'A live guided lesson where you apply while Laya corrects technique in real time.',
      image: generatedImages.onlineHero,
      href: '/learn-your-own-makeup-online',
    },
  ];

  return (
    <>
      <JsonLd pageSchema={[
        serviceSchema({
          path: '/online-makeup-consultation',
          name: 'Online makeup consultation',
          description: metadata.description || '',
          image: generatedImages.onlineHero,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.onlineConsultation.h1}
        subtitle="Global beauty guidance"
        description={siteContent.onlineConsultation.intro}
        imageSrc={generatedImages.onlineHero}
        imageAlt="Online makeup consultation campaign visual with laptop and ring light"
        objectPosition="center"
        ctaText="Book Online"
        ctaLink={whatsappLinks.online}
        secondaryCtaText="Compare Services"
        secondaryCtaLink="/services"
      />

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Practical beauty guidance, designed around your own face"
            body="Online sessions avoid generic tutorial advice. The goal is a clear personal routine, better buying decisions, and techniques you can repeat confidently."
          />
          <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {onlineServices.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-warm-ivory">
                    <Image
                      src={service.image}
                      alt={`${service.title} editorial concept`}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ objectPosition: service.title === 'Kit audit' ? 'center 34%' : 'center' }}
                    />
                    <div className="pointer-events-none absolute inset-0 border border-white/60" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-deep-espresso">{service.title}</h3>
                  <p className="mt-3 text-sm font-light leading-6 text-soft-espresso/72">{service.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeIn className="relative aspect-[4/5] overflow-hidden bg-warm-ivory">
            <Image
              src={generatedImages.onlineSecondary}
              alt="Online makeup lesson campaign visual with screen text kept secondary"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </FadeIn>
          <div className="space-y-8">
            <SectionIntro
              align="left"
              title="Designed for real mirrors, not just mood boards"
              body="You leave with a routine, product notes, correction points, and a realistic plan for your own lighting, skin, schedule, and confidence level."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {['Daily routine', 'Keep / remove / replace', 'Bridal plan'].map((item) => (
                <div key={item} className="border-l border-metallic-gold/35 bg-white/35 p-6 text-sm font-semibold uppercase tracking-[0.13em] text-deep-espresso">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
