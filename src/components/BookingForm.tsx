'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from './AnimationWrappers';

const FORM_EMAIL = 'rahultb1996@gmail.com';

const services = [
  'Bridal Makeup & Hair — Dubai / UAE',
  'Bridal Makeup & Hair — Kerala',
  'Party Makeup & Hair',
  'Fashion / Editorial Shoot',
  'Commercial / Production',
  'Online Makeup Consultation',
  'Learn Your Own Makeup (Online)',
  'Makeup Kit Audit (Online)',
  'Other',
];

const locations = [
  'Dubai / UAE',
  'Kerala, India',
  'Destination (other city/country)',
  'Online — I can join from anywhere',
];

type Status = 'idle' | 'sending' | 'sent' | 'fallback-sent' | 'error';

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0],
    location: locations[0],
    date: '',
    eventType: '',
    people: '',
    preferredTime: '',
    instagram: '',
    referral: '',
    message: '',
    website: '',
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      `Hi Laya, I would like to book: ${form.service}`,
      form.location && `Location: ${form.location}`,
      form.date && `Date: ${form.date}`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.eventType && `Event type: ${form.eventType}`,
      form.people && `People: ${form.people}`,
      form.preferredTime && `Preferred time: ${form.preferredTime}`,
      form.instagram && `Instagram: ${form.instagram}`,
      form.referral && `How I found LayeR: ${form.referral}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean);
    return `https://wa.me/971547467995?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim()) || !privacyConsent) {
      setError('Add your name, a contact method, and privacy consent.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, privacyConsent }),
      });
      if (response.ok) {
        setStatus('sent');
        return;
      }
      const result = await response.json() as { error?: string; fallback?: boolean };
      if (response.status !== 503 || !result.fallback) {
        setError(result.error || 'Could not send your enquiry. Please try WhatsApp.');
        setStatus('error');
        return;
      }
      const fallback = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New LayeR enquiry — ${form.service}`,
          _template: 'table',
          Name: form.name,
          'Phone / WhatsApp': form.phone,
          Email: form.email,
          Service: form.service,
          Location: form.location,
          'Event date': form.date,
          'Event type': form.eventType,
          'Number of people': form.people,
          'Preferred time': form.preferredTime,
          Instagram: form.instagram,
          'How they found LayeR': form.referral,
          Message: form.message,
        }),
      });
      const fallbackResult = await fallback.json().catch(() => null) as { success?: string | boolean } | null;
      if (fallback.ok && (fallbackResult?.success === 'true' || fallbackResult?.success === true)) {
        setStatus('fallback-sent');
      } else {
        setError('The email service did not confirm delivery. Please use WhatsApp.');
        setStatus('error');
      }
    } catch {
      setError('Could not send your enquiry. Please use WhatsApp.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border border-dusty-rose-border/60 bg-white/70 px-4 py-3.5 text-sm text-deep-espresso placeholder:text-muted-taupe/70 outline-none transition-colors focus:border-metallic-gold backdrop-blur-sm';
  const labelClass = 'mb-2 block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-deep-gold';

  if (status === 'sent' || status === 'fallback-sent') {
    return (
      <FadeIn className="glass-panel px-8 py-14 text-center">
        <h3 className="font-serif text-3xl text-deep-espresso">{status === 'sent' ? 'Enquiry submitted ✨' : 'Enquiry passed to email service ✨'}</h3>
        <p className="mx-auto mt-4 max-w-md text-sm font-light leading-7 text-soft-espresso/78">
          Thank you, {form.name.split(' ')[0]}. {status === 'fallback-sent' ? 'The temporary email service accepted your enquiry; delivery has not been independently confirmed.' : 'Your enquiry was accepted by the email service.'} For the fastest follow-up, continue on WhatsApp.
        </p>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex bg-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:bg-metallic-gold hover:text-deep-espresso"
        >
          Continue on WhatsApp
        </a>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={submitEmail} className={compact ? '' : 'glass-panel px-6 py-8 lg:px-10 lg:py-12'}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-name" className={labelClass}>Your name *</label>
          <input id="bf-name" type="text" required autoComplete="name" placeholder="Full name" className={inputClass} value={form.name} onChange={update('name')} />
        </div>
        <div>
          <label htmlFor="bf-phone" className={labelClass}>WhatsApp / phone</label>
          <input id="bf-phone" type="tel" autoComplete="tel" placeholder="+971 · +91 · any country" className={inputClass} value={form.phone} onChange={update('phone')} />
        </div>
        <div>
          <label htmlFor="bf-email" className={labelClass}>Email</label>
          <input id="bf-email" type="email" autoComplete="email" placeholder="you@example.com" className={inputClass} value={form.email} onChange={update('email')} />
        </div>
        <div>
          <label htmlFor="bf-date" className={labelClass}>Event / preferred date</label>
          <input id="bf-date" type="date" className={inputClass} value={form.date} onChange={update('date')} />
        </div>
        <div>
          <label htmlFor="bf-service" className={labelClass}>Service *</label>
          <select id="bf-service" className={inputClass} value={form.service} onChange={update('service')}>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="bf-location" className={labelClass}>Location</label>
          <select id="bf-location" className={inputClass} value={form.location} onChange={update('location')}>
            {locations.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="bf-message" className={labelClass}>Tell Laya about your moment</label>
          <textarea
            id="bf-message"
            rows={4}
            placeholder="Venue, outfit direction, number of looks, reference mood, timing…"
            className={inputClass}
            value={form.message}
            onChange={update('message')}
          />
        </div>
        <div className="sm:col-span-2 grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="bf-event-type" className={labelClass}>Event type</label><input id="bf-event-type" maxLength={120} className={inputClass} value={form.eventType} onChange={update('eventType')} placeholder="Wedding, shoot, consultation…" /></div>
          <div><label htmlFor="bf-people" className={labelClass}>Number of people</label><input id="bf-people" maxLength={20} className={inputClass} value={form.people} onChange={update('people')} placeholder="For example, 2" /></div>
          <div><label htmlFor="bf-time" className={labelClass}>Preferred time</label><input id="bf-time" maxLength={80} className={inputClass} value={form.preferredTime} onChange={update('preferredTime')} placeholder="Morning, afternoon…" /></div>
          <div><label htmlFor="bf-instagram" className={labelClass}>Instagram handle (optional)</label><input id="bf-instagram" maxLength={100} className={inputClass} value={form.instagram} onChange={update('instagram')} placeholder="@handle" /></div>
          <div className="sm:col-span-2"><label htmlFor="bf-referral" className={labelClass}>How did you find LayeR?</label><input id="bf-referral" maxLength={120} className={inputClass} value={form.referral} onChange={update('referral')} /></div>
        </div>
      </div>

      <div className="absolute -left-[10000px]" aria-hidden="true"><label htmlFor="bf-website">Website</label><input id="bf-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} /></div>
      <label className="mt-6 flex items-start gap-3 text-sm text-soft-espresso/78">
        <input type="checkbox" required checked={privacyConsent} onChange={(event) => setPrivacyConsent(event.target.checked)} className="mt-1" />
        <span>I agree to share these details for a response to my enquiry. Read the <Link href="/privacy" className="underline">privacy policy</Link>.</span>
      </label>

      {status === 'error' && (
        <p role="alert" className="mt-4 text-xs font-medium text-rose-wine">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-12 flex-1 items-center justify-center bg-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:bg-metallic-gold hover:text-deep-espresso disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse inline-flex min-h-12 flex-1 items-center justify-center border border-botanical-sage bg-botanical-sage/10 px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-botanical-sage transition-colors hover:bg-botanical-sage hover:text-white"
        >
          Send on WhatsApp instead
        </a>
      </div>
      <p className="mt-4 text-center text-[0.68rem] font-light text-muted-taupe">
        Prefer WhatsApp if you want to continue the conversation right away.
      </p>
    </form>
  );
}
