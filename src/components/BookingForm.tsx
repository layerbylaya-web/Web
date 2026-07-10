'use client';

import { useState } from 'react';
import { FadeIn } from './AnimationWrappers';

const FORM_EMAIL = 'rahultb1996@gmail.com'; // Lead notifications are delivered here via FormSubmit

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

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0],
    location: locations[0],
    date: '',
    message: '',
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      `Hi Laya, I would like to book: ${form.service}`,
      form.location && `Location: ${form.location}`,
      form.date && `Date: ${form.date}`,
      form.name && `Name: ${form.name}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean);
    return `https://wa.me/971547467995?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || (!form.email && !form.phone)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
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
          Message: form.message,
        }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border border-dusty-rose-border/60 bg-white/70 px-4 py-3.5 text-sm text-deep-espresso placeholder:text-muted-taupe/70 outline-none transition-colors focus:border-metallic-gold backdrop-blur-sm';
  const labelClass = 'mb-2 block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-deep-gold';

  if (status === 'sent') {
    return (
      <FadeIn className="glass-panel px-8 py-14 text-center">
        <h3 className="font-serif text-3xl text-deep-espresso">Enquiry received ✨</h3>
        <p className="mx-auto mt-4 max-w-md text-sm font-light leading-7 text-soft-espresso/78">
          Thank you, {form.name.split(' ')[0]}. Laya will personally review your date and reply shortly. For the fastest response, you can also continue on WhatsApp.
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
    <form onSubmit={submitEmail} className={compact ? '' : 'glass-panel px-6 py-8 lg:px-10 lg:py-12'} noValidate>
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
      </div>

      {status === 'error' && (
        <p className="mt-4 text-xs font-medium text-rose-wine">
          Please add your name and at least one way to reach you (WhatsApp or email), then try again — or use the WhatsApp button below.
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
        Your details go directly to Laya and are never shared. Replies usually within a few hours.
      </p>
    </form>
  );
}
