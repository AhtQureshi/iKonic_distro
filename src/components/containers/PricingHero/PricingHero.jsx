import { rich } from '../../../utils/cx.js';
import { hero } from '../../../data/pricing.js';
import { Eyebrow, Heading, Icon, Text } from '../../atoms/index.js';
import { BillingToggle } from '../../subcomponents/index.js';

/**
 * Pricing page intro: headline, Monthly / Annual switch and the handwritten "Artists Own More Here." note.
 * The switch drives the PlanCards of the surrounding BillingProvider (set up by the page).
 */
export function PricingHero({ content = hero }) {
  return (
    <section className="pricing-hero">
      <div className="container pricing-hero__inner">
        <div className="pricing-hero__copy" data-reveal-stagger="up" data-reveal-step="110">
          <Eyebrow text={content.eyebrow} className="pricing-hero__eyebrow" />
          <Heading text={content.title} level={1} size="h1" className="pricing-hero__title" />
          <Text text={content.text} size="lg" className="pricing-hero__text" />
          <BillingToggle {...content.billing} />
        </div>
        {content.note && (
          <div className="pricing-hero__note" aria-hidden="true">
            <Icon name={content.note.icon} size={44} className="pricing-hero__note-icon" />
            <span {...rich(content.note.text)} />
          </div>
        )}
      </div>
    </section>
  );
}
