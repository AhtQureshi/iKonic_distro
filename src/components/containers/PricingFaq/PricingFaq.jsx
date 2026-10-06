import { faq } from '../../../data/pricing.js';
import { Button } from '../../atoms/index.js';
import { Accordion, SectionHeading } from '../../subcomponents/index.js';

/** Pricing FAQ: heading + link on the left, accordion (one open at a time) on the right. */
export function PricingFaq({ content = faq }) {
  return (
    <section className="pricing-faq">
      <div className="container pricing-faq__grid">
        <div className="pricing-faq__copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} className="pricing-faq__heading" />
          {content.action && <div data-reveal="up" data-reveal-delay="300"><Button variant="outline" iconRight="arrow-right" {...content.action} /></div>}
        </div>
        <Accordion
          items={content.items.map((item) => ({ question: item.q, answer: item.a }))}
          className="pricing-faq__list"
          data-reveal-stagger="up"
          data-reveal-step="90"
        />
      </div>
    </section>
  );
}
