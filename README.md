# IKONIC — Main Site

Component-based static site. No npm: pages are assembled from plain ES modules in `src/`, and a small Python script bundles them.

## View it

Double-click `index.html`, or use Live Server. It runs from the bundled files in `dist/`.

## Edit it

Edit files in `src/`, then rebuild:

```
python tools/build.py           # build once
python tools/build.py --watch   # rebuild automatically while you work
```

The build writes `dist/home.js` (all components) and `dist/site.css` (all styles), and regenerates
`src/assets/svgs/icons/index.js` from the icon `.svg` files. Never edit `dist/` by hand.

## Animations

Driven by attributes, handled in `src/utils/motion.js` + `src/styles/motion.css`:

- `data-reveal="up|down|left|right|zoom|fade"` — animate in on scroll (`data-reveal-delay="200"` in ms)
- `data-reveal-stagger="up"` — reveal each child in turn (`data-reveal-step="100"`)
- `data-count` — count the number up from zero (works with `$8,432`, `1.2M`, `170+`)

Charts inside a revealed element draw themselves. Everything is skipped for users who set "reduce motion".

## Structure

```
index.html                 Page shell: favicon, fonts, stylesheet, loads dist/home.js
distribution.html, publishing.html, advance.html, pricing.html, labels.html
                           Same thin shells for the other pages (dist/<page>.js)
docs/legacy/               The original hand-written pages, kept for reference only
src/
  assets/
    images/                Raster images (hero-studio.png, logo.webp)
    svgs/
      brand/               favicon.svg, eye-mark.svg
      icons/               Single-colour UI icons (used through the Icon atom, coloured by CSS)
      stores/              Full-colour streaming store logos
      flags/               Country flags
      maps/                world-dots.svg
      illustrations/       crowd.svg
  styles/
    tokens.css             Colours, type scale, radii, spacing. Change the brand here.
    base.css, layout.css   Reset + .container / .section
    index.css              Imports every stylesheet (add new components here)
  components/
    atoms/                 Smallest pieces: Button, Icon, Logo, Heading, Text, Pill, Cover, Sparkline…
    subcomponents/         Built from atoms: FeatureCard, PlanCard, ReleaseCard, MetricCard, NavMenu…
    containers/            Full page sections: Header, Hero, Ticker, PlatformShowcase, … Footer
  data/
    site.js                Navigation, footer, socials, stores (shared by every page)
    home.js                All home-page copy and numbers
    distribution.js, publishing.js, advance.js, pricing.js, labels.js   Copy for each page
  pages/                   One folder per page; each entry composes its page from containers
    home/home.js
    distribution/distribution.js
    publishing/publishing.js
    advance/advance.js
    pricing/pricing.js
    labels/labels.js
  utils/                   html template helper, asset paths, map projection, DOM helpers
```

Each component lives in its own folder with a `.js` file (returns markup) and a `.css` file.
Every level has an `index.js` that exports everything in it.

## Rules

1. **Reuse, don't recreate.** Pages import containers only. Containers import subcomponents and atoms. Subcomponents import atoms. Atoms import only utils.
2. **Content goes in `src/data/`.** Change copy, prices or stats there, not in the components.
3. **Icons:** drop a new `name.svg` into `src/assets/svgs/icons/`, run the build, then use `Icon({ name: 'name' })`.
4. **New component:** create `Folder/Folder.js` + `Folder/Folder.css`, export it from that level's `index.js`, and add the CSS to `src/styles/index.css`.

## Adding a page

Add the page to `PAGES` in `tools/build.py` (`"pricing": "src/pages/pricing/pricing.js"`), then:

```html
<!-- pricing.html -->
<link rel="stylesheet" href="dist/site.css">
<div id="app"></div>
<script src="dist/pricing.js"></script>
```

```js
// src/pages/pricing/pricing.js
import { Header, Footer, PricingPreview, CtaBanner, setupHeader } from '../../components/containers/index.js';

const app = document.getElementById('app');
app.innerHTML = [Header({ active: 'pricing' }), '<main>', PricingPreview(), CtaBanner(), '</main>', Footer()].join('');
setupHeader(app);
setupMotion(app); // import { setupMotion } from '../../utils/motion.js'
```

## Shared pieces

Every page uses the same `Header` and `Footer` containers; edit nav links and footer content in
`src/data/site.js` and every page updates. Generic subcomponents shared across pages include
`AccordionItem` (+ `setupAccordion`), `CheckList`, `SectionIntro`, `IconCard`, `IconPoint`, `TitledPoint`
and `NumberedStep`. Plan prices live once in `planPrices` in `src/data/site.js` (used by home and pricing).
