// Distribution page content. Edit copy and numbers here; layouts live in the Distribution* containers.
import { stores as siteStores } from './site.js';
import { cover } from '../utils/assets.js';

const liveStores = [
  { name: 'Spotify', logo: 'spotify' },
  { name: 'Apple Music', logo: 'apple-music' },
  { name: 'YouTube', logo: 'youtube' },
  { name: 'TikTok', logo: 'tiktok' },
  { name: 'Amazon Music', logo: 'amazon-music' },
];

export const hero = {
  eyebrow: 'Music Without Limits',
  title: 'Distribute Your Music <span class="text-red">Worldwide.</span>',
  text: 'Get your music on 250+ streaming platforms, keep 100% of your rights, and reach new fans everywhere.',
  // Decorative full-bleed background (public/assets/images/), 1983×793.
  image: { file: 'distribution-hero.webp', width: 1983, height: 793 },
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'Watch Demo', href: '#', variant: 'outline', size: 'lg', iconLeft: 'play-circle' },
  ],
  release: { label: 'New Release', title: 'Samurai', artist: 'Orio x Shootergang', src: cover('orio-samurai'), status: 'Delivered to 250+ stores' },
  stores: { items: liveStores.map((s) => ({ ...s, status: 'Live' })), more: '+ 245 more stores' },
  streams: { label: 'Total Streams', value: '2,482,391', trend: '+42%', chart: { type: 'bars', values: [28, 44, 62, 80, 100] } },
  points: [
    { icon: 'bolt-outline', title: 'Fast Delivery', text: 'Typically live in 1–7 days' },
    { icon: 'shield', title: '100% Ownership', text: 'You keep your rights' },
    { icon: 'globe', title: '250+ Stores', text: 'Reach every major platform' },
  ],
};

export const storeStrip = {
  label: 'Available on Everywhere',
  stores: [...siteStores, { name: 'pandora' }],
  more: '+ Many More',
};

export const features = {
  items: [
    { icon: 'globe', title: 'Global Distribution', text: 'Get your music on 250+ streaming platforms worldwide.', href: '#', variant: 'plain' },
    { icon: 'bolt-outline', title: 'Fast &amp; Reliable', text: 'Typically live in 1–7 days with real-time delivery updates.', href: '#', variant: 'plain' },
    { icon: 'bar-chart-axis', title: 'Keep 100% Ownership', text: 'You keep your masters, your rights, and your revenue.', href: '#', variant: 'plain' },
    { icon: 'users', title: 'For Artists &amp; Labels', text: 'Release as an independent artist or manage multiple artists under one label.', href: '/labels', variant: 'plain' },
  ],
};

export const audience = {
  eyebrow: 'Reach a Global Audience',
  title: 'Your Music.<br>Everywhere Fans Listen.',
  text: 'From Spotify to TikTok, Apple Music to Amazon, Ikonic gets your music in front of listeners across the world — with one simple release.',
  phone: {
    title: 'Made Me This Way',
    artist: 'Vory',
    src: cover('vory-made-me-this-way'),
    live: 'Live on 250+ stores',
    listTitle: 'Distribution Status',
    stores: [
      ...liveStores,
      { name: 'TIDAL', logo: 'tidal' },
      { name: 'Deezer', logo: 'deezer' },
    ].map((s) => ({ ...s, status: 'Delivered' })),
  },
  stats: [
    { icon: 'globe', value: '250+', label: 'Streaming Stores' },
    { icon: 'flag', value: '170+', label: 'Countries' },
    { icon: 'users', value: '1B+', label: 'Potential Listeners' },
    { icon: 'clock', value: '24/7', label: 'Real-Time Analytics' },
  ],
};

export const steps = {
  eyebrow: 'How It Works',
  title: 'Get Your Music Live.',
  align: 'center',
  headingAlign: 'left',
  divided: false,
  steps: [
    { icon: 'upload', title: '1. Upload', text: 'Add your music and artwork.' },
    { icon: 'file-text', title: '2. Set Details', text: 'Tell us about your release.' },
    { icon: 'send', title: '3. We Distribute', text: 'We deliver to 250+ stores worldwide.' },
    { icon: 'broadcast', title: '4. Go Live', text: 'Your music is live and ready to stream.' },
    { icon: 'bar-chart-axis', title: '5. Grow', text: 'Track, earn, and reach more fans.' },
  ],
};

export const tools = {
  eyebrow: 'Tools to Help You Grow',
  title: 'More Than Just<br>Distribution.',
  text: 'Everything you need to release, manage, and grow your music — all in one place.',
  checklist: [
    'Unlimited Releases',
    'Real-Time Delivery Updates',
    'Pre-Save &amp; Smart Links',
    'ISRC &amp; UPC Support',
    'Release Scheduling',
    'Team Collaboration (Pro+)',
  ],
  action: { label: 'Start Distributing', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
  dashboard: {
    title: 'Releases',
    action: 'Create Release',
    nav: ['Dashboard', 'Releases', 'Analytics', 'Catalog', 'Smart Links', 'Team', 'Royalties', 'Settings'],
    activeNav: 'Releases',
    tabs: ['All', 'Drafts', 'Pending', 'Live'],
    activeTab: 'All',
    stores: ['spotify', 'apple-music', 'tidal', 'youtube'],
    more: '+247',
    status: 'Live',
    rows: [
      { title: 'By Any Means', artist: 'Orio x Malik Montana x M Huncho', date: 'Oct 12, 2024', src: cover('orio-by-any-means') },
      { title: 'Overseas', artist: 'Orio x Bobby Shmurda', date: 'Sep 28, 2024', src: cover('orio-overseas') },
      { title: 'Heartbreak Anniversary', artist: 'Jersey', date: 'Sep 14, 2024', src: cover('jersey-heartbreak-anniversary') },
      { title: 'For Me', artist: 'Tússsin', date: 'Aug 30, 2024', src: cover('tusssin-for-me') },
      { title: 'Oly', artist: 'Orio x Dollypran', date: 'Aug 12, 2024', src: cover('orio-oly') },
    ],
  },
};

export const releases = {
  eyebrow: 'Recent Releases',
  title: 'Distributed on <span class="text-red">Ikonic.</span>',
  items: [
    { title: 'Overseas', artist: 'Orio x Bobby Shmurda', src: cover('orio-overseas') },
    { title: 'Plata O Plomo', artist: 'Orio x Uncle Murda x Silva', src: cover('orio-plata-o-plomo') },
    { title: 'Jet Li', artist: 'Orio x Guleed x Kazior', src: cover('orio-jet-li') },
    { title: 'Oly', artist: 'Orio x Dollypran', src: cover('orio-oly') },
    { title: 'Lossst', artist: 'Tússsin', src: cover('tusssin-lossst') },
    { title: 'Miami', artist: 'DoubleChanel x Tricks', src: cover('doublechanel-tricks-miami') },
    { title: 'Body', artist: 'Big Nuni', src: cover('big-nuni-body') },
    { title: 'Limitless', artist: 'Tricks', src: cover('tricks-limitless') },
  ],
};

export const faq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Quick <span class="text-red">answers.</span>',
  text: 'Everything you need to know about distribution on Ikonic.',
  items: [
    { question: 'How long does it take to get my music live?', answer: 'Most releases go live within 1–7 days, depending on the store’s review times.' },
    { question: 'Which platforms will my music go to?', answer: 'Your music is delivered to 250+ streaming platforms and stores worldwide, including Spotify, Apple Music, YouTube, TikTok, Amazon Music, TIDAL, Deezer, and Pandora.' },
    { question: 'Do I keep 100% of my rights?', answer: 'Yes — you always keep 100% of your masters, your rights, and your revenue with Ikonic.' },
    { question: 'Can I update my release after it’s live?', answer: 'Yes — you can update your release details anytime, and the changes are pushed out to every store.' },
  ],
};

export const cta = {
  eyebrow: 'Your Next Chapter Starts Here',
  title: 'Release Worldwide.<br><span class="text-red">Build Without Limits.</span>',
  text: 'Join thousands of independent artists releasing, growing, and owning more with Ikonic.',
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'View Pricing', href: '/pricing', variant: 'outline', size: 'lg' },
  ],
  stats: [
    { value: '50K+', label: 'Artists &amp; Labels' },
    { value: '500M+', label: 'Streams Distributed' },
    { value: '$100M+', label: 'Paid to Artists' },
  ],
};
