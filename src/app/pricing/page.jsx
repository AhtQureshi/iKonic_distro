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
} from '../../components/containers/index.js';
import { BillingProvider } from '../../components/subcomponents/index.js';

export const metadata = {
  title: 'Pricing — IKONIC | Artists Own More Here.',
  description: 'Simple plans for independent artists: distribute, publish, get funded and manage your music business on IKONIC. Keep 100% of your rights, no setup fees.',
};

export default function PricingPage() {
  return (
    <>
      <Header active="pricing" />
      <main id="main">
        {/* The hero's Monthly / Annual switch drives the plan prices below it. */}
        <BillingProvider>
          <PricingHero />
          <PricingPlans />
        </BillingProvider>
        <PricingCompare />
        <PricingAudience />
        <PricingIncluded />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </>
  );
}
