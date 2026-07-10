import type { Metadata } from 'next';
import { brand, pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How LayeR by Laya handles the personal details you share when enquiring about makeup and hair styling services.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="luxury-gradient min-h-[70vh] px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="font-serif text-4xl text-deep-espresso md:text-6xl">Privacy Policy</h1>
        <div className="space-y-6 text-base font-light leading-8 text-soft-espresso/80">
          <p>
            LayeR by Laya collects only the details you choose to share when you enquire — such as your name, contact number, email, event date, and location. This information is used solely to respond to your enquiry, plan your booking, and provide the service you requested.
          </p>
          <p>
            Your details are never sold, rented, or shared with third parties for marketing. Enquiries sent through the website form are delivered by email; messages sent on WhatsApp are handled under WhatsApp&apos;s own terms.
          </p>
          <p>
            Basic, anonymous analytics may be used to understand how visitors use the site and improve it. No personal profiles are built from this data.
          </p>
          <p>
            To have your enquiry details removed, message {brand.phoneDisplay} on WhatsApp or email {brand.email}, and they will be deleted.
          </p>
        </div>
      </div>
    </div>
  );
}
