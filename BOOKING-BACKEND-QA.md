# Booking backend QA — 2026-09-24

`POST /api/booking` validates length, contact method, service/location selections, date format and privacy consent; it includes a honeypot and request size cap. With `RESEND_API_KEY`, `RESEND_FROM_EMAIL` and `BOOKING_TO_EMAIL`, the server sends a plain-text enquiry through Resend. Keys remain server-side. Without all three, the API returns 503 and the browser uses the existing FormSubmit endpoint as a temporary fallback. The fallback response indicates acceptance by FormSubmit, not inbox delivery.

The email sender must be verified with Resend before configuring the production environment. No Resend credentials or delivery confirmation were available during this run. The production form therefore still needs one consented end-to-end test enquiry and inbox receipt check. WhatsApp remains a direct booking path.

The form now collects optional event type, party size, preferred time, Instagram handle, referral source, and a privacy acknowledgement. The privacy page names the email processors.

Remaining production risk: there is no durable lead database or distributed rate limiter. If email delivery is business critical, configure Resend and monitor failures before relying on the form as the sole lead channel.
