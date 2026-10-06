import { included } from '../../../data/pricing.js';
import { Text } from '../../atoms/index.js';
import { SectionHeading, ValueCard } from '../../subcomponents/index.js';

/** "More Value. No Hidden Fees." — what every plan includes. */
export function PricingIncluded({ content = included }) {
  return (
    <section className="pricing-included">
      <div className="container">
        <div className="pricing-included__head">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} className="pricing-included__heading" />
          {content.note && <Text text={content.note} className="pricing-included__note" />}
        </div>
        <div className="pricing-included__grid" data-reveal-stagger="up" data-reveal-step="100">
          {content.items.map((item) => <ValueCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}
