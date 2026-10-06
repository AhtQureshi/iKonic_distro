import { plans } from '../../../data/pricing.js';
import { PlanCard } from '../../subcomponents/index.js';

/**
 * The three artist plans in full. Prices follow the hero's Monthly / Annual switch
 * via the BillingProvider the page wraps around both.
 */
export function PricingPlans({ content = plans }) {
  return (
    <section className="pricing-plans">
      <div className="container">
        <div className="pricing-plans__grid" data-reveal-stagger="up" data-reveal-step="130">
          {content.items.map((p) => <PlanCard key={p.name} {...p} size="lg" badgeVariant="red" annualNote={content.annualNote} />)}
        </div>
      </div>
    </section>
  );
}
