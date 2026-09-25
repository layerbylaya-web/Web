import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import BookingForm from '@/components/BookingForm';
import { EditorialImage, FAQSection, SectionIntro } from '@/components/PremiumSections';
import { SlideUp } from '@/components/AnimationWrappers';
import { brand, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';
import { portfolioImages } from '@/data/portfolio';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Premium Makeup & Hair Styling by Laya',
    description: 'Premium makeup and hair styling by Laya for bridal, event, editorial, and camera-ready beauty across UAE, Kerala, and online clients worldwide.',
    path: '/',
    image: generatedImages.homeHero,
  }),
  title: { absolute: 'LayeR by Laya | Premium Makeup & Hair Styling' },
};

const homeFaqs = [
  {
    question: 'Do you provide makeup and hair in Dubai?',
    answer: 'Yes. LayeR offers premium makeup and hair in Dubai for bridal events, parties, editorial shoots, and commercial bookings across the UAE.',
  },
  {
    question: 'Do you provide bridal makeup in Kerala?',
    answer: 'Yes. Bridal makeup Kerala bookings can be discussed for Kottayam, Kochi, and selected destination ceremonies with early availability checks.',
  },
  {
    question: 'Can I book an online makeup consultation from another country?',
    answer: 'Yes. Online makeup consultation, daily makeup consultation, kit audit, and one-to-one makeup sessions are available globally.',
  },
  ...commonFaqs.slice(0, 2),
];

const method = [
  ['Skin', 'Prep, hydration, tone, and texture are considered before coverage begins.'],
  ['Structure', 'Brows, eyes, sculpting, and light are balanced around your individual features.'],
  ['Colour', 'Lip, cheek, eye, outfit, jewellery, and lighting are edited as one palette.'],
  ['Hair', 'Waves, buns, jasmine, veils, and accessories are planned with the makeup.'],
  ['Finish', 'Every detail is checked in person, in movement, and through the camera.'],
];

const proofPoints = [
  'On-location across Dubai and the UAE',
  'Kerala bridal styling',
  'One-to-one online consultation',
  'Makeup and hair by one artist',
  'Personalised skin, outfit, and camera planning',
];

export default function Home() {
  return (
    <>
      <JsonLd
        pageSchema={[
          serviceSchema({
            path: '/',
            name: 'Premium makeup artist Dubai, Kerala and online consultation',
            description: metadata.description || '',
            image: generatedImages.homeHero,
          }),
          faqSchema(homeFaqs),
        ]}
      />

      <Hero
        title={siteContent.home.h1}
        subtitle="LayeR by Laya"
        description={`${siteContent.home.subheadline} ${siteContent.home.support}`}
        imageSrc={generatedImages.homeHero}
        imageAlt="Premium makeup and hair styling by Laya with jasmine bridal beauty detail"
        ctaText="Book on WhatsApp"
        ctaLink={whatsappLinks.general}
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/services"
        supportingImageSrc={generatedImages.homeSecondary}
        supportingImageAlt="Secondary LayeR beauty campaign detail"
        objectPosition="right center"
      />

      <section aria-label="Where LayeR works" className="border-y border-metallic-gold/25 bg-warm-ivory/78 px-5 py-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
          {['Dubai & UAE', 'Kerala', 'Online worldwide', 'Makeup + hair'].map((item) => (
            <span key={item} className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-deep-gold">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="blush-mesh px-5 py-20 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <SlideUp>
            <p className="editorial-kicker">01 / The belief</p>
            <h2 className="mt-5 max-w-[15ch] text-balance font-serif text-4xl leading-[1.05] text-deep-espresso sm:text-5xl lg:text-6xl">
              Beauty is not applied in one step. It is built in layers.
            </h2>
            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-soft-espresso/78 lg:text-lg">
              Skin, structure, colour, hair, and finish are planned as one complete look—personal to your features, considered with your outfit, and refined for real life and the camera.
            </p>
            <div className="mt-9 h-px w-28 bg-metallic-gold/65" aria-hidden="true" />
          </SlideUp>
          <div className="relative mx-auto w-full max-w-lg lg:mr-0">
            <EditorialImage
              src={generatedImages.aboutWorkspace}
              alt="Champagne beauty tools and texture expressing the LayeR philosophy"
              aspect="aspect-[4/5]"
              objectPosition="center"
            />
            <div className="caption-ribbon absolute -bottom-5 left-5 right-5 z-10 px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-deep-espresso sm:left-auto sm:right-[-1rem] sm:w-64">
              Skin · Structure · Colour · Hair · Finish
            </div>
          </div>
        </div>
      </section>

      <section className="champagne-band px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="The LayeR Method"
            label="02 / Signature process"
            body="A five-part beauty process that keeps every decision connected—from the first skin-prep choice to the final camera check."
          />
          <div className="relative mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <EditorialImage
              src={generatedImages.editorialOne}
              alt="Editorial beauty close-up illustrating polished skin and refined structure"
              aspect="aspect-[4/5]"
              objectPosition="center"
              caption="The method begins with the person, not a template"
            />
            <ol className="relative space-y-2 lg:py-4">
              <div className="story-rule absolute bottom-4 left-[1.35rem] top-4 w-px" aria-hidden="true" />
              {method.map(([title, body], index) => (
                <li key={title} className="relative grid grid-cols-[2.75rem_1fr] gap-5 border-b border-metallic-gold/20 py-6 first:pt-0 last:border-0">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-metallic-gold/50 bg-champagne-light font-serif text-lg text-deep-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl text-deep-espresso">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm font-light leading-7 text-soft-espresso/74">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div className="relative grid grid-cols-[1fr_0.72fr] items-end gap-4 sm:gap-6">
            <EditorialImage src={generatedImages.bridalDubaiHero} alt="Dubai bridal makeup with polished skin and refined hair styling" aspect="aspect-[4/5]" objectPosition="center 25%" />
            <EditorialImage src={generatedImages.bridalDubaiSecondary} alt="Dubai bridal suite beauty detail" aspect="aspect-[3/4]" objectPosition="center 35%" className="mb-10" />
          </div>
          <SlideUp>
            <p className="editorial-kicker">03 / Bridal Dubai</p>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">Composed for the suite, ceremony, camera, and Dubai light.</h2>
            <p className="mt-7 text-base font-light leading-8 text-soft-espresso/78">
              Bridal makeup and hair are planned around your skin, outfit, jewellery, venue light, weather, photography, and the pace of the day—so the finish feels calm and polished rather than heavy.
            </p>
            <Link href="/bridal-makeup-dubai" className="editorial-link mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso">Explore Dubai bridal</Link>
          </SlideUp>
        </div>
      </section>

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <SlideUp className="lg:order-1">
            <p className="editorial-kicker">04 / Bridal Kerala</p>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">Ceremony-sensitive beauty with Kerala warmth.</h2>
            <p className="mt-7 text-base font-light leading-8 text-soft-espresso/78">
              Saree or gown, jasmine or veil, temple jewellery or contemporary styling—each look is balanced around tradition, skin tone, emotion, and the visual language of the ceremony.
            </p>
            <Link href="/bridal-makeup-kerala" className="editorial-link mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso">Explore Kerala bridal</Link>
          </SlideUp>
          <div className="relative grid grid-cols-[0.72fr_1fr] items-start gap-4 sm:gap-6 lg:order-2">
            <EditorialImage src={generatedImages.bridalKeralaSecondary} alt="South Indian bridal jewellery, saree, and jasmine styling detail" aspect="aspect-[3/4]" objectPosition="center" className="mt-12" />
            <EditorialImage src={generatedImages.bridalKeralaHero} alt="Kerala bridal makeup with jasmine and warm gold detail" aspect="aspect-[4/5]" objectPosition="center 25%" />
          </div>
        </div>
      </section>

      <section className="bg-warm-ivory px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="One beauty language, shaped for different moments" label="05 / Beyond bridal" body="Event, hair, fashion, commercial, and online work each need a different kind of control—not a recycled bridal template." />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              ['Event makeup & hair', 'Soft or full glam, polished waves, buns, and occasion-led finishing.', generatedImages.hairOne, '/party-makeup-and-hair'],
              ['Fashion & commercial', 'Camera-ready skin, continuity, grooming, and beauty direction for production.', generatedImages.editorialTwo, '/fashion-editorial-makeup'],
              ['Online consultation', 'Routine design, kit audit, bridal planning, and one-to-one makeup education.', generatedImages.onlineHero, '/online-makeup-consultation'],
            ].map(([title, body, image, href], index) => (
              <Link key={title} href={href} className={`group block ${index === 1 ? 'md:mt-12' : ''}`}>
                <div className="editorial-frame relative aspect-[4/5] overflow-hidden bg-blush-paper">
                  <Image src={image} alt={`${title} by LayeR by Laya`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="caption-ribbon absolute bottom-4 left-4 px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-deep-espresso">0{index + 1} / {title}</div>
                </div>
                <h3 className="mt-7 font-serif text-3xl text-deep-espresso">{title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-soft-espresso/74">{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Selected real work" label="06 / Portfolio" body="Real clients, real makeup, and real hair work—kept separate from the campaign imagery used to communicate service direction." />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {portfolioImages.slice(0, 4).map((item, index) => (
              <Link key={item.id} href="/portfolio" aria-label={`Explore the real portfolio: ${item.title}`} className={`group relative block aspect-[3/4] overflow-hidden bg-warm-ivory ${index % 2 ? 'md:mt-10' : ''}`}>
                <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/portfolio" className="inline-flex border border-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">View the real portfolio</Link>
          </div>
        </div>
      </section>

      <section className="bg-deep-espresso px-5 py-20 text-blush-paper lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-metallic-gold">07 / What you can expect</p>
          <div className="mt-10 grid gap-px bg-metallic-gold/25 sm:grid-cols-2 lg:grid-cols-5">
            {proofPoints.map((point) => (
              <div key={point} className="bg-deep-espresso px-6 py-8 text-center text-sm font-light leading-6 text-blush-paper/82">{point}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="champagne-mesh scroll-mt-24 px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionIntro align="left" title="A clear path to your booking" label="08 / Begin" body="Share the moment, receive personal guidance, and confirm only when the service, location, and plan are clear." />
            <ol className="mt-10 space-y-7">
              {[
                ['Share your date and details', 'Send your city, date, service, timing, outfit, and reference direction.'],
                ['Receive personalised guidance', 'Laya considers the right service, look direction, and practical next step with you.'],
                ['Confirm your booking', 'Once availability and details are agreed, complete the confirmation process shared with you.'],
              ].map(([step, body], index) => (
                <li key={step} className="grid grid-cols-[2.75rem_1fr] gap-5">
                  <span className="font-serif text-3xl text-metallic-gold">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-xl text-deep-espresso">{step}</h3>
                    <p className="mt-2 text-sm font-light leading-6 text-soft-espresso/74">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-9 border-t border-metallic-gold/25 pt-6 text-sm font-light leading-7 text-soft-espresso/76">
              <p>WhatsApp: {brand.phoneDisplay}</p>
              <p>Dubai, UAE · Kerala, India · Online worldwide</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <FAQSection faqs={homeFaqs} />

      <section className="rose-gold-gradient px-5 py-20 text-center lg:px-12 lg:py-28">
        <SlideUp className="mx-auto max-w-4xl">
          <p className="editorial-kicker">The LayeR promise</p>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-6xl">A look should still feel like you—only more considered.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-8 text-soft-espresso/78">Begin with your date, place, and vision. The rest is built with care, one layer at a time.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className="whatsapp-pulse inline-flex bg-deep-espresso px-9 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:bg-metallic-gold hover:text-deep-espresso">Book on WhatsApp</a>
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex border border-deep-espresso/25 px-9 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">Follow @layerbylaya</a>
          </div>
        </SlideUp>
      </section>
    </>
  );
}
