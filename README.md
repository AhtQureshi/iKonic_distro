# IKONIC — Main Site

Next.js (App Router) site built from reusable React components.

## Run it

```
npm install        # first time only
npm run dev        # http://localhost:3000, reloads as you edit
npm run build      # production build
npm start          # serve the production build
```

Pages: `/`, `/distribution`, `/publishing`, `/advance`, `/pricing`, `/labels`, `/contact`.

## Contact form email

The contact form posts to `/api/contact` (`src/app/api/contact/route.js`), which emails the message
through [Resend](https://resend.com). Set these environment variables (Vercel → Settings → Environment Variables):

- `RESEND_API_KEY` — API key from resend.com
- `CONTACT_TO_EMAIL` — inbox that receives messages (comma-separate several)
- `CONTACT_FROM_EMAIL` — a sender on a domain verified in Resend, e.g. `IKONIC Website <website@your-domain.com>`

Without them, `npm run dev` just logs each message to the terminal, and production shows the form's error message
(with the contact email) instead of pretending the message was sent. The support email, FAQ categories and support hours shown on the page live in `src/data/contact.js`.

## Animations

Driven by attributes, handled in `src/utils/motion.js` + `src/styles/motion.css` (wired once in the root layout):

- `data-reveal="up|down|left|right|zoom|fade"` — animate in on scroll (`data-reveal-delay="200"` in ms)
- `data-reveal-stagger="up"` — reveal each child in turn (`data-reveal-step="100"`)
- `data-count` — count the number up from zero (works with `$8,432`, `1.2M`, `170+`)

Charts inside a revealed element draw themselves. Everything is skipped for users who set "reduce motion".

## Structure

```
public/assets/
  images/                  Raster images: page banners (*-hero.webp), logo.webp
  svgs/                    brand/, stores/, flags/, maps/, illustrations/ — served from /assets/...
scripts/build-icons.mjs    Builds the Icon atom's registry from its .svg files (runs before dev/build)
src/
  app/                     Routes. layout.jsx (fonts, metadata, global CSS) + one page.jsx per page
    page.jsx               Home
    distribution/, publishing/, advance/, pricing/, labels/, contact/
    api/contact/route.js   Contact form endpoint (emails via Resend)
  styles/
    tokens.css             Colours, type scale, radii, spacing. Change the brand here.
    base.css, layout.css   Reset + .container / .section
    motion.css             Scroll-reveal states
    index.css              Imports every stylesheet (add new components here)
  components/
    atoms/                 Smallest pieces: Button, Icon, Logo, Heading, Text, Pill, Cover, Sparkline…
      Icon/svgs/           Single-colour UI icons (inlined by the Icon atom, coloured by CSS)
    subcomponents/         Built from atoms: FeatureCard, PlanCard, ReleaseCard, Accordion, NavMenu…
    containers/            Full page sections: Header, Hero, Ticker, PlatformShowcase, … Footer
  data/
    site.js                Navigation, footer, socials, stores, plan prices (shared by every page)
    home.js, distribution.js, publishing.js, advance.js, pricing.js, labels.js, contact.js   Copy for each page
  utils/                   cx / rich helpers, asset paths, map projection, motion
docs/legacy/               The original hand-written pages, kept for reference only
```

Each component lives in its own folder with a `.jsx` file and a `.css` file.
Every level has an `index.js` that exports everything in it.

## Rules

1. **Reuse, don't recreate.** Pages import containers only. Containers import subcomponents and atoms. Subcomponents import atoms. Atoms import only utils.
2. **Content goes in `src/data/`.** Change copy, prices or stats there, not in the components. Titles may contain markup
   (`'Own More <span class="text-red">Of Your Music.</span>'`); components render those with `rich()` from `src/utils/cx.js`.
3. **Server by default.** Components are React Server Components. Only components with state or event handlers start with
   `'use client'` (Header, NavMenu, Accordion, BillingToggle, PlanCard, LatestReleases, AdvanceEstimator, ContactForm,
   ContactFaq, ContactSupport).
4. **Icons:** drop a new `name.svg` into `src/components/atoms/Icon/svgs/`, run `npm run icons` (or restart `npm run dev`), then use `<Icon name="name" />`.
5. **New component:** create `Folder/Folder.jsx` + `Folder/Folder.css`, export it from that level's `index.js`, and add the CSS to `src/styles/index.css`.
6. **Internal links** use `/route` hrefs (e.g. `/pricing`); the `Anchor` atom turns them into Next.js client-side links.

## Adding a page

Create `src/app/<route>/page.jsx`:

```jsx
import { Header, Footer, PricingPreview, CtaBanner } from '../../components/containers/index.js';

export const metadata = { title: 'Page title — IKONIC', description: '…' };

export default function Page() {
  return (
    <>
      <Header active="pricing" />
      <main id="main">
        <PricingPreview />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
```

Containers take their copy from `src/data/` by default; pass `content={…}` to reuse one with different copy
(e.g. `<FeatureGrid content={features} />` on the distribution page).

## Shared pieces

Every page uses the same `Header` and `Footer` containers; edit nav links and footer content in
`src/data/site.js` and every page updates. Generic subcomponents shared across pages include
`Accordion` / `AccordionItem`, `CheckList`, `SectionIntro`, `IconCard`, `IconPoint`, `TitledPoint`
and `NumberedStep`. Plan prices live once in `planPrices` in `src/data/site.js` (used by home and pricing).
On the pricing page, `BillingProvider` links the hero's Monthly / Annual switch to the plan cards.
