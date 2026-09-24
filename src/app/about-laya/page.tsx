import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, SectionIntro } from '@/components/PremiumSections';
import { SlideUp } from '@/components/AnimationWrappers';
import { breadcrumbSchema, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';
import { siteImages } from '@/data/siteImages';

export const metadata: Metadata = pageMetadata({
  title: 'About Laya and the LayeR Method',
  description: 'About LayeR by Laya, a premium Dubai and Kerala makeup and hair styling brand built around refined skin, bridal detail, editorial beauty, and online consultation.',
  path: '/about-laya',
  image: generatedImages.aboutWorkspace,
});

const faqs = [
  {
    question: 'What makes Laya’s approach different?',
    answer: 'Every look is planned as one complete visual direction: skin, structure, colour, hair, and finish are balanced around the person, outfit, event, and camera.',
  },
  {
    question: 'What is the LayeR Method?',
    answer: 'It is Laya’s five-part approach to building refined beauty through skin, structure, colour, hair, and finish.',
  },
  ...commonFaqs,
];

const method = [
  ['Skin', 'Prepare and balance the canvas without masking its natural character.'],
  ['Structure', 'Refine features through proportion, light, and considered definition.'],
  ['Colour', 'Connect skin tone, outfit, jewellery, mood, and lighting.'],
  ['Hair', 'Shape the silhouette with styling that belongs to the complete look.'],
  ['Finish', 'Edit every detail for movement, endurance, and the camera.'],
];

export default function AboutPage() {
  const founderSlot = siteImages.aboutLaya.founderPortraitReserved;

  return (
    <>
      <JsonLd
        pageSchema={[
          breadcrumbSchema([{ name: 'About Laya', path: '/about-laya' }]),
          serviceSchema({
            path: '/about-laya',
            name: 'About LayeR by Laya',
            description: metadata.description || '',
            image: generatedImages.aboutWorkspace,
          }),
          faqSchema(faqs),
        ]}
      />

      <section className="luxury-gradient px-5 pb-20 pt-28 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          <div className="lg:order-2">
            <p className="editorial-kicker">About the artist and the method</p>
            <h1 className="mt-5 max-w-[10ch] text-balance font-serif text-5xl leading-[0.98] text-deep-espresso sm:text-6xl lg:text-8xl">
              {siteContent.about.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-8 text-soft-espresso/78 lg:text-lg">
              {siteContent.about.intro}
            </p>
            <p className="mt-5 max-w-2xl text-base font-light leading-8 text-soft-espresso/78">
              Across Dubai, Kerala, and one-to-one online consultations, the aim is the same: a complete look that understands the person before it follows a trend.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className="whatsapp-pulse inline-flex bg-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:bg-metallic-gold hover:text-deep-espresso">Talk to Laya</a>
              <Link href="/portfolio" className="inline-flex border border-deep-espresso/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">See real work</Link>
            </div>
          </div>
          <div className="relative lg:order-1">
            <EditorialImage
              src={founderSlot.src}
              alt="LayeR beauty tools and workspace detail"
              aspect="aspect-[4/5]"
              objectPosition={founderSlot.objectPosition}
              priority
            />
            <div className="caption-ribbon absolute -bottom-5 left-5 right-5 z-10 px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-deep-espresso sm:left-auto sm:right-[-1rem] sm:w-60">
              The artist’s eye · the client’s features
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep-espresso px-5 py-24 text-blush-paper lg:px-12 lg:py-36">
        <SlideUp className="mx-auto max-w-5xl text-center">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-metallic-gold">01 / Beauty philosophy</p>
          <h2 className="mt-6 text-balance font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            The most luxurious finish is the one that still lets the person come through.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-blush-paper/72">
            LayeR is built on proportion, restraint, texture, and detail—not a fixed face chart applied to everyone.
          </p>
        </SlideUp>
      </section>

      <section className="blush-mesh px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SlideUp>
            <p className="editorial-kicker">02 / Skin and features</p>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">Begin with what is already individual.</h2>
            <p className="mt-7 text-base font-light leading-8 text-soft-espresso/78">
              Skin texture, undertone, face shape, eye structure, comfort, and personal style guide the work. Coverage, sculpting, lashes, and lip are edited until the face feels balanced—not replaced.
            </p>
          </SlideUp>
          <EditorialImage src={generatedImages.editorialOne} alt="Editorial makeup close-up showing luminous skin and individual features" aspect="aspect-[6/5]" objectPosition="center 28%" />
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24">
          <div className="grid grid-cols-[1fr_0.72fr] items-end gap-4 sm:gap-6">
            <EditorialImage src={generatedImages.hairOne} alt="Polished waves and hair accessory detail by LayeR" aspect="aspect-[4/5]" objectPosition="center" />
            <EditorialImage src={generatedImages.editorialTwo} alt="Editorial makeup finish designed as part of a complete look" aspect="aspect-[3/4]" objectPosition="center" className="mb-10" />
          </div>
          <SlideUp>
            <p className="editorial-kicker">03 / One complete look</p>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">Makeup and hair should speak the same visual language.</h2>
            <p className="mt-7 text-base font-light leading-8 text-soft-espresso/78">
              A soft eye can be changed by a severe bun. A veil changes the silhouette. Jasmine, waves, jewellery, necklines, and camera angles all affect the balance. LayeR considers them together from the start.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="champagne-band px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro title="A practice that keeps developing" label="04 / Professional development" body="Professional beauty changes with products, techniques, cameras, climates, and the needs of real clients. LayeR’s approach is to keep learning, test decisions thoughtfully, and refine the method without chasing every passing trend." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ['Observe', 'Read the skin, features, lighting, outfit, and practical conditions.'],
              ['Develop', 'Strengthen technique through careful practice, product understanding, and feedback.'],
              ['Refine', 'Keep what improves the result; remove what adds weight without purpose.'],
            ].map(([title, body], index) => (
              <div key={title} className="border-l border-metallic-gold/45 bg-white/35 px-7 py-8">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-deep-gold">0{index + 1}</span>
                <h3 className="mt-7 font-serif text-3xl text-deep-espresso">{title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-soft-espresso/74">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <EditorialImage src={generatedImages.bridalKeralaHero} alt="Kerala bridal makeup and jasmine styling by LayeR" aspect="aspect-[5/4]" objectPosition="center 24%" />
          <SlideUp>
            <p className="editorial-kicker">05 / UAE and Kerala</p>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">Two places, different beauty contexts, one considered standard.</h2>
            <p className="mt-7 text-base font-light leading-8 text-soft-espresso/78">
              Dubai work can move through hotel suites, civil ceremonies, events, and productions. Kerala bridal work is shaped by ceremony, jasmine, saree, gown, veil, jewellery, heat, and long emotional days. Each context deserves its own decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/bridal-makeup-dubai" className="border border-deep-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-deep-espresso">Dubai bridal</Link>
              <Link href="/bridal-makeup-kerala" className="border border-deep-espresso/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-deep-espresso">Kerala bridal</Link>
            </div>
          </SlideUp>
        </div>
      </section>

      <section className="bg-warm-ivory px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="The LayeR Method" label="06 / Signature process" body="Five connected decisions make the final look feel intentional rather than assembled." />
          <ol className="mt-14 grid gap-px bg-metallic-gold/25 sm:grid-cols-2 lg:grid-cols-5">
            {method.map(([title, body], index) => (
              <li key={title} className="bg-warm-ivory px-6 py-8">
                <span className="font-serif text-3xl text-metallic-gold">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 font-serif text-3xl text-deep-espresso">{title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-soft-espresso/74">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <SlideUp>
            <p className="editorial-kicker">07 / Who LayeR serves</p>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">Personal moments and camera-led work.</h2>
            <p className="mt-7 text-base font-light leading-8 text-soft-espresso/78">
              LayeR works across bridal, event, fashion, commercial, grooming, and online beauty education. The common thread is personal direction, clear communication, and a finish designed for the actual setting.
            </p>
            <Link href="/services" className="editorial-link mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso">Explore every service</Link>
          </SlideUp>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <EditorialImage src={generatedImages.bridalDubaiHero} alt="Dubai bridal beauty campaign direction" aspect="aspect-[3/4]" objectPosition="center 25%" />
            <EditorialImage src={generatedImages.onlineHero} alt="Online makeup consultation and one-to-one education" aspect="aspect-[3/4]" objectPosition="center" className="mt-10" />
          </div>
        </div>
      </section>

      <section className="blush-mesh px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
          <EditorialImage src={generatedImages.onlineSecondary} alt="Personal online beauty guidance with products and tools" aspect="aspect-[6/5]" objectPosition="center" />
          <SlideUp>
            <p className="editorial-kicker">08 / Personal consultation</p>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">Guidance should leave you clearer, not overwhelmed.</h2>
            <p className="mt-7 text-base font-light leading-8 text-soft-espresso/78">
              Whether the conversation is about a bridal look, a daily routine, a product kit, or learning your own makeup, Laya’s role is to make the next decision more practical and more personal.
            </p>
            <Link href="/online-makeup-consultation" className="editorial-link mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso">Explore online consultation</Link>
          </SlideUp>
        </div>
      </section>

      <section className="bg-deep-espresso px-5 py-24 text-center text-blush-paper lg:px-12 lg:py-32">
        <SlideUp className="mx-auto max-w-4xl">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-metallic-gold">09 / Begin your LayeR story</p>
          <h2 className="mt-6 text-balance font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Your features. Your moment. A finish built with intention.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-8 text-blush-paper/72">Share the date, place, service, and visual direction. Laya will help you choose the right next step.</p>
          <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className="whatsapp-pulse mt-10 inline-flex bg-metallic-gold px-9 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:bg-blush-paper">Book on WhatsApp</a>
        </SlideUp>
      </section>

      <FAQSection faqs={faqs} />
    </>
  );
}
