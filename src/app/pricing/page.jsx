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
  PricingLabels,
  PricingPlans,
} from '../../components/containers/index.js';
import { BillingProvider } from '../../components/subcomponents/index.js';

export const metadata = {
  title: 'Pricing — IKONIC | Artists Own More Here.',
  description: 'Simple plans for independent artists and labels: distribute, publish and manage your music business on IKONIC. 7-day free trial. Keep 100% ownership of your music.',
};

export default function PricingPage() {
  return (
    <>
      <Header active="pricing" />
      <main id="main">
        {/* The Monthly / Annual switches (hero and label plans) drive every plan price inside. */}
        <BillingProvider>
          <PricingHero />
          <PricingPlans />
          <PricingCompare />
          <PricingLabels />
        </BillingProvider>
        <PricingAudience />
        <PricingIncluded />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </>
  );
}
