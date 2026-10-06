// Contact / Support page content. Edit copy here; layouts live in the Contact* containers.

export const contactEmail = 'support@ikonicdistro.com';

export const hero = {
  eyebrow: 'Support &amp; FAQ',
  title: 'We’re Here<br><span class="text-red">to Help.</span>',
  text: 'Get answers, learn how to use Ikonic, and find the resources you need to take your music further.',
  // Decorative full-bleed background (public/assets/images/), 1983×793.
  image: { file: 'contact-hero.webp', width: 1983, height: 793 },
  cards: [
    { icon: 'book-open', title: 'Help Center', text: 'Step-by-step guides and platform walkthroughs.', href: '#faq', linkLabel: 'Go to the Help Center' },
    { icon: 'play-circle', title: 'Video Tutorials', text: 'Watch quick tutorials on key features.', href: '#faq', linkLabel: 'Go to Video Tutorials' },
    { icon: 'users', title: 'Community', text: 'Connect with other artists and creators.', href: '#faq', linkLabel: 'Go to the Community' },
    { icon: 'chat', title: 'Contact Support', text: 'Get help from our team whenever you need it.', href: '#support', linkLabel: 'Contact Support' },
  ],
};

export const faq = {
  id: 'faq',
  eyebrow: 'Frequently Asked Questions',
  title: 'Quick Answers<br><span class="text-red">to Common Questions.</span>',
  text: 'Find answers to the most common questions about distribution, publishing, payments, and more.',
  allLabel: 'View All FAQs',
  categories: [
    {
      id: 'getting-started',
      label: 'Getting Started',
      icon: 'rocket',
      items: [
        { q: 'How do I create an account on Ikonic?', a: 'Sign up in minutes with your email, choose a plan, and set up your artist profile to get started.' },
        { q: 'How do I release my first song?', a: 'Upload your audio and cover art, add your release details, choose your stores, and submit — we handle delivery from there.' },
        { q: 'Do I keep 100% of my rights?', a: 'Yes — you always keep 100% ownership of your music and your masters with Ikonic.' },
        { q: 'What stores will my music go to?', a: 'We deliver to 250+ stores and platforms worldwide, including Spotify, Apple Music, Amazon Music, TikTok, and more.' },
        { q: 'How long does it take to get my music live?', a: 'Most releases go live within 1–7 days, depending on each store’s review times.' },
        { q: 'Can I add team members to my account?', a: 'Yes — invite managers, collaborators, and team members with custom roles and permissions.' },
        { q: 'How do publishing royalties work?', a: 'We collect your mechanical and performance royalties from around the world and pay them to you monthly.' },
        { q: 'How does Ikonic Advance work?', a: 'Qualifying artists can get an upfront cash advance on future royalties — with no debt and no hidden fees.' },
        { q: 'How and when do I get paid?', a: 'Royalties are paid out monthly to your bank account or PayPal once you reach the payout threshold.' },
        { q: 'Can I have multiple artist accounts under one label?', a: 'Yes — label plans let you manage unlimited independent artist accounts from a single dashboard.' },
        { q: 'Can I upgrade or downgrade my plan?', a: 'Yes — you can change your plan at any time from your account settings, effective on your next billing cycle.' },
        { q: 'What file formats do you accept?', a: 'We accept WAV, FLAC, and MP3 uploads, with WAV 44.1kHz 16-bit or higher preferred for best quality.' },
        { q: 'How do I contact support?', a: `Reach us through live chat, email us at ${contactEmail}, or use the contact options below.` },
      ],
    },
    {
      id: 'distribution',
      label: 'Distribution',
      icon: 'globe',
      items: [
        { q: 'Which stores and platforms does Ikonic deliver to?', a: 'We deliver to 250+ major stores and platforms, including Spotify, Apple Music, Amazon Music, YouTube Music, TikTok, and Instagram.' },
        { q: 'Can I set a future release date?', a: 'Yes — schedule your release up to several months in advance to plan your rollout and pitch to playlists.' },
        { q: 'Will my music be available on TikTok and Instagram Reels?', a: 'Yes — your music is delivered to TikTok, Instagram, and other short-form platforms so fans can use your sound.' },
      ],
    },
    {
      id: 'publishing',
      label: 'Publishing',
      icon: 'file-text',
      items: [
        { q: 'What is music publishing?', a: 'Publishing covers the royalties earned from your songwriting — mechanical and performance royalties collected worldwide.' },
        { q: 'Do I need a publisher to collect my royalties?', a: 'Not with Ikonic — our publishing administration collects your global publishing royalties for you.' },
        { q: 'How do I register my songs for publishing?', a: 'Add your songs to your publishing catalog in the dashboard and we register them with societies worldwide.' },
      ],
    },
    {
      id: 'advance',
      label: 'Advance',
      icon: 'dollar-outline',
      items: [
        { q: 'Who qualifies for Ikonic Advance?', a: 'Artists with a consistent streaming history and growing audience can qualify for an advance offer.' },
        { q: 'Do I have to pay the advance back?', a: 'Your advance recoups from future royalties — there is no debt, no interest, and no fixed repayment schedule.' },
        { q: 'How is my advance amount calculated?', a: 'Your offer is based on your streaming data, revenue trends, and growth across platforms.' },
      ],
    },
    {
      id: 'payouts',
      label: 'Payouts',
      icon: 'credit-card',
      items: [
        { q: 'When are royalties paid out?', a: 'Payouts are processed monthly, with royalties typically available 2–3 months after the streams occur.' },
        { q: 'What is the minimum payout threshold?', a: 'You can withdraw your earnings once your balance reaches the minimum payout threshold in your account.' },
        { q: 'Which payment methods do you support?', a: 'We pay out via direct bank transfer and PayPal, depending on your region.' },
      ],
    },
    {
      id: 'labels-teams',
      label: 'Labels &amp; Teams',
      icon: 'users',
      items: [
        { q: 'How many artists can I manage on a label plan?', a: 'Label plans let you manage unlimited artist accounts, each fully independent with its own catalog and payouts.' },
        { q: 'Can I assign different roles to team members?', a: 'Yes — invite team members and assign roles that control exactly what they can view and manage.' },
        { q: 'Can my artists see each other’s earnings?', a: 'No — every artist account is fully separate, so earnings and data stay private between accounts.' },
      ],
    },
    {
      id: 'account-settings',
      label: 'Account &amp; Settings',
      icon: 'settings',
      items: [
        { q: 'How do I change my email or password?', a: 'Update your email, password, and profile details anytime from the Account Settings page in your dashboard.' },
        { q: 'Can I cancel my subscription anytime?', a: 'Yes — you can cancel at any time from your billing settings; your music stays live through the end of your cycle.' },
        { q: 'Where do I update my billing information?', a: 'Manage your payment method, invoices, and billing history from the Billing section of your account settings.' },
      ],
    },
    {
      id: 'technical-support',
      label: 'Technical Support',
      icon: 'headset',
      items: [
        { q: 'Why did my release get rejected?', a: 'Most rejections are for artwork or metadata issues — check the notification in your dashboard and resubmit with the fix.' },
        { q: 'My upload keeps failing — what should I do?', a: 'Check your file format and connection, then try again; if it persists, contact support with the error message.' },
        { q: 'How do I report a bug or an issue?', a: 'Send us a message through live chat or email with the details, and our team will investigate right away.' },
      ],
    },
  ],
};

export const support = {
  id: 'support',
  eyebrow: 'Still Need Help?',
  title: 'Contact Our<br>Support Team.',
  text: 'Our team is here to help. Get in touch and we’ll respond as soon as possible.',
  action: { label: 'Contact Support', closeLabel: 'Hide Message Form' },
  cards: [
    { icon: 'chat', title: 'Live Chat', text: 'Chat with our support team in real time.', badge: { label: 'Available Now', live: true } },
    { icon: 'mail', title: 'Email Support', text: 'Send us a message and we’ll get back to you.', badge: { label: contactEmail, href: `mailto:${contactEmail}` } },
    { icon: 'clock', title: 'Support Hours', hours: 'Monday – Friday<br>9AM – 9PM (EST)', text: 'We typically respond within 24 hours.' },
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

export const cta = {
  variant: 'split',
  eyebrow: 'Your Next Chapter Starts Here',
  title: 'Own More. <span class="text-red">Go Further.</span>',
  text: 'Get the support you need and keep building your music business with Ikonic.',
  actions: [
    { label: 'Get Started', href: '#', variant: 'primary', iconRight: 'arrow-right' },
    { label: 'View Pricing', href: '/pricing', variant: 'outline' },
  ],
};
