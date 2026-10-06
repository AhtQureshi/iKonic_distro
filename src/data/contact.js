// Contact page content. Edit copy here; layouts live in the Contact* containers.
// PLACEHOLDER: replace these addresses with the real IKONIC inboxes before launch.

export const contactEmail = 'hello@ikonic.com';

const mail = (address, subject) => `mailto:${address}?subject=${encodeURIComponent(subject)}`;

export const hero = {
  eyebrow: 'Contact Us',
  title: 'Let’s Talk. <span class="text-red">We’re Here To Help.</span>',
  text: 'Questions about distribution, publishing, funding or label accounts? Send us a message and the right team will get back to you.',
  points: [
    { icon: 'clock', text: 'We reply within 24 hours, Monday to Friday' },
    { icon: 'headset', text: 'Real people who know the music business' },
    { icon: 'globe', text: 'Supporting artists in 170+ countries' },
  ],
  form: {
    title: 'Send us a message',
    text: 'Fill in the form and we’ll be in touch.',
    topicLabel: 'What can we help with?',
    topics: [
      { label: 'General', value: 'general' },
      { label: 'Distribution', value: 'distribution' },
      { label: 'Publishing', value: 'publishing' },
      { label: 'Advance', value: 'advance' },
      { label: 'Labels', value: 'labels' },
    ],
    fields: {
      name: { label: 'Full name', placeholder: 'Your name' },
      email: { label: 'Email', placeholder: 'you@example.com' },
      company: { label: 'Artist or label name', placeholder: 'Optional' },
      message: { label: 'Message', placeholder: 'Tell us a little about what you need…' },
    },
    submit: 'Send Message',
    sending: 'Sending…',
    success: { title: 'Message sent.', text: 'Thanks for reaching out — we’ll reply to your email within 24 hours.', again: 'Send another message' },
    error: `Something went wrong sending your message. Please try again or email us at ${contactEmail}.`,
    privacy: 'By sending this form you agree to be contacted about your enquiry. We never share your details.',
  },
};

export const channels = {
  eyebrow: 'Other ways to reach us',
  title: 'Talk to the <span class="text-red">Right Team.</span>',
  text: 'Prefer email? Reach the team that handles your question directly.',
  items: [
    { icon: 'headset', title: 'Artist Support', text: 'Help with releases, your account, payouts and royalty reports.', href: mail(contactEmail, 'Artist support'), linkLabel: 'Email Artist Support' },
    { icon: 'users', title: 'Labels &amp; Partnerships', text: 'Label accounts, distributor access and partnership opportunities.', href: mail(contactEmail, 'Labels and partnerships'), linkLabel: 'Email Labels and Partnerships' },
    { icon: 'coins', title: 'Advance &amp; Funding', text: 'Questions about eligibility, offers and repayments.', href: mail(contactEmail, 'Advance and funding'), linkLabel: 'Email Advance and Funding' },
    { icon: 'megaphone', title: 'Press &amp; Media', text: 'Interviews, brand assets and media enquiries.', href: mail(contactEmail, 'Press and media'), linkLabel: 'Email Press and Media' },
  ],
};

export const faq = {
  eyebrow: 'Frequently asked questions',
  title: 'Before you <span class="text-red">reach out.</span>',
  text: 'Quick answers to the questions we hear most.',
  items: [
    { q: 'How quickly will I hear back?', a: 'We reply to every message within 24 hours, Monday to Friday. Pro and Pro+ members get priority support.' },
    { q: 'I already have an account. Where do I get help?', a: 'Use the form and choose the topic that fits — include the email on your account so we can find it quickly.' },
    { q: 'Can I talk to someone about a label account?', a: 'Yes — pick “Labels” in the form or email our Labels &amp; Partnerships team, and we’ll set up a call.' },
    { q: 'How do I apply for an Advance?', a: 'Advance offers are based on your catalog’s performance. Pick “Advance” in the form and we’ll check your eligibility.' },
  ],
};

export const cta = {
  variant: 'boxed',
  eyebrow: 'Ready when you are',
  title: 'Own More. <span class="text-red">Build Bigger.</span>',
  text: 'Start releasing on IKONIC today and keep 100% of your rights.',
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', iconRight: 'arrow-right' },
    { label: 'View Pricing', href: '/pricing', variant: 'outline' },
  ],
};
