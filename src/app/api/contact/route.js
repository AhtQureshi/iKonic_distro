// POST /api/contact — receives the contact form and emails it to the team via Resend (https://resend.com).
//
// Environment variables (set them in Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      API key from resend.com
//   CONTACT_TO_EMAIL    inbox that receives the messages
//   CONTACT_FROM_EMAIL  verified sender, e.g. "IKONIC Website <website@your-domain.com>"
//                       (defaults to Resend's test sender, which only delivers to your Resend account email)
//
// Without RESEND_API_KEY / CONTACT_TO_EMAIL the message is only logged in development,
// and production answers 503 so the form shows its error (never a fake "sent").

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOPICS = ['general', 'distribution', 'publishing', 'advance', 'labels'];
const clean = (value, max) => String(value ?? '').trim().slice(0, max);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Spam trap: real visitors never see the "website" field.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const msg = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 160),
    topic: TOPICS.includes(body.topic) ? body.topic : 'general',
    message: clean(body.message, 5000),
  };
  if (!msg.name || !EMAIL.test(msg.email) || msg.message.length < 10) {
    return Response.json({ error: 'Please check the form and try again.' }, { status: 422 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[contact] Email not configured; message received:', msg);
      return Response.json({ ok: true, delivered: false });
    }
    console.error('[contact] RESEND_API_KEY / CONTACT_TO_EMAIL are not set; message not sent.');
    return Response.json({ error: 'Contact form is not configured.' }, { status: 503 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL || 'IKONIC Website <onboarding@resend.dev>',
      to: CONTACT_TO_EMAIL.split(',').map((a) => a.trim()),
      reply_to: msg.email,
      subject: `[Contact · ${msg.topic}] ${msg.name}`,
      text: [
        `Name: ${msg.name}`,
        `Email: ${msg.email}`,
        `Artist / label: ${msg.company || '—'}`,
        `Topic: ${msg.topic}`,
        '',
        msg.message,
      ].join('\n'),
    }),
  });

  if (!res.ok) {
    console.error('[contact] Resend error', res.status, await res.text());
    return Response.json({ error: 'Could not send your message.' }, { status: 502 });
  }
  return Response.json({ ok: true, delivered: true });
}
