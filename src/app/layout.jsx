import { Archivo, Caveat } from 'next/font/google';
import { MotionObserver } from './MotionObserver.jsx';
import { MOTION_BOOT_SCRIPT } from '../utils/motion.js';
import '../styles/index.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
  display: 'swap',
});

// Handwritten note in the pricing hero only, so it isn't preloaded on every page.
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
  display: 'swap',
  preload: false,
});

export const metadata = {
  title: 'IKONIC — Own More Of Your Music.',
  description: 'Distribution, publishing and funding for independent artists. Get your music on 250+ stores in 170+ countries and keep 100% of your rights.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/assets/svgs/brand/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

// Back / forward: let the browser restore the previous scroll position instantly instead of
// animating it through the global `scroll-behavior: smooth`, then turn smooth scrolling back on.
// Clicking an in-page #link also fires popstate, but with no history state, so it's skipped.
const HISTORY_SCROLL_SCRIPT =
  "addEventListener('popstate',function(e){if(!e.state)return;var s=document.documentElement.style;s.scrollBehavior='auto';clearTimeout(window.__restoreSmooth);window.__restoreSmooth=setTimeout(function(){s.scrollBehavior=''},600)})";

export const viewport = {
  themeColor: '#0a0a0b',
};

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior: Next.js 16 only jumps instantly to the top on page changes when this is set;
    // without it the global `scroll-behavior: smooth` (base.css) animates the scroll on every navigation.
    // In-page links (e.g. #process) still scroll smoothly.
    <html lang="en" className={`${archivo.variable} ${caveat.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: HISTORY_SCROLL_SCRIPT }} />
      </head>
      <body>
        {children}
        <MotionObserver />
      </body>
    </html>
  );
}
