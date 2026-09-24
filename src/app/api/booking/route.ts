import { NextResponse } from 'next/server';

const services = new Set([
  'Bridal Makeup & Hair — Dubai / UAE', 'Bridal Makeup & Hair — Kerala',
  'Party Makeup & Hair', 'Fashion / Editorial Shoot', 'Commercial / Production',
  'Online Makeup Consultation', 'Learn Your Own Makeup (Online)',
  'Makeup Kit Audit (Online)', 'Other',
]);
const locations = new Set([
  'Dubai / UAE', 'Kerala, India', 'Destination (other city/country)',
  'Online — I can join from anywhere',
]);

type Booking = Record<'name' | 'phone' | 'email' | 'service' | 'location' | 'date' |
  'eventType' | 'people' | 'preferredTime' | 'instagram' | 'referral' | 'message' | 'website', string>;

function clean(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string' || value.length > maxLength * 2) return null;
  const result = value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
  return result.length <= maxLength ? result : null;
}

function validDate(value: string): boolean {
  if (!value) return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

function parseBooking(value: unknown): Booking | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  const limits = {
    name: 120, phone: 40, email: 254, service: 100, location: 100, date: 10,
    eventType: 120, people: 20, preferredTime: 80, instagram: 100,
    referral: 120, message: 2000, website: 200,
  };
  const booking = {} as Booking;
  for (const key of Object.keys(limits) as Array<keyof Booking>) {
    const field = clean(input[key], limits[key]);
    if (field === null) return null;
    booking[key] = field;
  }
  if (
    !booking.name || !/^[\p{L}\p{M} .'-]{2,120}$/u.test(booking.name) ||
    (!booking.phone && !booking.email) ||
    (booking.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email)) ||
    (booking.phone && !/^[+\d() .-]{6,40}$/.test(booking.phone)) ||
    !services.has(booking.service) || !locations.has(booking.location) ||
    !validDate(booking.date) ||
    input.privacyConsent !== true
  ) return null;
  return booking;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 8192) return NextResponse.json({ error: 'Submission is too large.' }, { status: 413 });
  let payload: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 8192) return NextResponse.json({ error: 'Submission is too large.' }, { status: 413 });
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 });
  }
  const booking = parseBooking(payload);
  if (!booking) return NextResponse.json({ error: 'Please check the form details and try again.' }, { status: 400 });
  if (booking.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.BOOKING_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ error: 'Direct email is not configured.', fallback: true }, { status: 503 });
  }
  const lines: Array<[string, string]> = [
    ['Name', booking.name], ['Phone / WhatsApp', booking.phone], ['Email', booking.email],
    ['Service', booking.service], ['Location', booking.location], ['Event date', booking.date],
    ['Event type', booking.eventType], ['Number of people', booking.people],
    ['Preferred time', booking.preferredTime], ['Instagram', booking.instagram],
    ['How they found LayeR', booking.referral], ['Message', booking.message],
  ];
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], subject: `New LayeR enquiry — ${booking.service}`,
        text: lines.map(([label, value]) => `${label}: ${value || '—'}`).join('\n'),
        ...(booking.email ? { reply_to: booking.email } : {}),
      }),
      cache: 'no-store',
    });
    if (!response.ok) return NextResponse.json({ error: 'Email delivery failed. Please try WhatsApp.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Email delivery failed. Please try WhatsApp.' }, { status: 502 });
  }
}
