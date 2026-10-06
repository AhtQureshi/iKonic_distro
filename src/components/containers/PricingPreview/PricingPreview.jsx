import { pricing } from '../../../data/home.js';
import { Button } from '../../atoms/index.js';
import { PlanCard, SectionHeading } from '../../subcomponents/index.js';

/** "Plans for Every Stage." — three plan cards (monthly prices) with a link to the full pricing page. */
export function PricingPreview({ content = pricing }) {
  return (
    <section className="section section--divided pricing-preview">
      <div className="container pricing-preview__grid">
        <div className="pricing-preview__copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          <div data-reveal="up" data-reveal-delay="350"><Button {...content.link} variant="ghost" iconRight="arrow-right" /></div>
        </div>
        <div className="pricing-preview__plans" data-reveal-stagger="up" data-reveal-step="130">
          {content.plans.map((p) => <PlanCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}
