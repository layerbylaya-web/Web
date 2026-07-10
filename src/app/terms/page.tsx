import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Booking terms for LayeR by Laya makeup and hair styling services in Dubai, the UAE, Kerala, and online.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="luxury-gradient min-h-[70vh] px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="font-serif text-4xl text-deep-espresso md:text-6xl">Terms of Service</h1>
        <div className="space-y-6 text-base font-light leading-8 text-soft-espresso/80">
          <p>
            Bookings are confirmed only after the date, location, service scope, and payment terms are agreed directly with Laya. Enquiries through the website or WhatsApp do not by themselves reserve a date.
          </p>
          <p>
            Bridal and event dates are held on a first-confirmed basis. Travel within the UAE, Kerala, or to destination venues is arranged and priced per booking. Timings, number of looks, and trial sessions are agreed in advance.
          </p>
          <p>
            Online consultations are personal guidance sessions; results depend on your own products and practice. Session recordings and materials are for your personal use only.
          </p>
          <p>
            Portfolio images remain the property of LayeR by Laya and the respective photographers, and may not be reused without permission. Where client photos are featured, it is with consent.
          </p>
        </div>
      </div>
    </div>
  );
}
