// Pricing page: composed only from containers. Content lives in src/data/pricing.js.
import {
  Footer,
  Header,
  PricingAudience,
  PricingCompare,
  PricingCta,
  PricingFaq,
  PricingHero,
  PricingIncluded,
  PricingPlans,
  setupHeader,
  setupPricingFaq,
  setupPricingHero,
  setupPricingPlans,
} from '../../components/containers/index.js';
import { setupMotion } from '../../utils/motion.js';

const app = document.getElementById('app');

app.innerHTML = [
  Header({ active: 'pricing' }),
  '<main id="main">',
  PricingHero(),
  PricingPlans(),
  PricingCompare(),
  PricingAudience(),
  PricingIncluded(),
  PricingFaq(),
  PricingCta(),
  '</main>',
  Footer(),
].join('');

setupHeader(app);
setupPricingHero(app);
setupPricingPlans(app);
setupPricingFaq(app);
setupMotion(app);
