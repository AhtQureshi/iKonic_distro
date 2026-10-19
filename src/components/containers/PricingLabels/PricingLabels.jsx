import { hero, labelPlans } from '../../../data/pricing.js';
import { Anchor } from '../../atoms/index.js';
import { BillingToggle, PlanCard, SectionHeading } from '../../subcomponents/index.js';

/**
 * The three label plans, each with its included artist seats and per-seat price.
 * Has its own Monthly / Annual switch, shared with the hero's through the page's BillingProvider.
 */
export function PricingLabels({ content = labelPlans, billing = hero.billing }) {
  return (
    <section className="section pricing-labels" id={content.id}>
      <div className="container">
        <div className="pricing-labels__head">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          <div data-reveal="up" data-reveal-delay="300"><BillingToggle {...billing} /></div>
        </div>
        <div className="pricing-plans__grid" data-reveal-stagger="up" data-reveal-step="130">
          {content.items.map((p) => <PlanCard key={p.name} {...p} size="lg" badgeVariant="red" annualNote={content.annualNote} />)}
        </div>
        {content.more && (
          <p className="pricing-labels__more" data-reveal="up">
            {content.more.text} <Anchor href={content.more.action.href}>{content.more.action.label}</Anchor>
          </p>
        )}
      </div>
    </section>
  );
}
