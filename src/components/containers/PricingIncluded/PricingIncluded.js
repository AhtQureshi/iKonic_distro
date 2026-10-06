import { html } from '../../../utils/html.js';
import { included } from '../../../data/pricing.js';
import { Text } from '../../atoms/index.js';
import { SectionHeading, ValueCard } from '../../subcomponents/index.js';

/** "More Value. No Hidden Fees." — what every plan includes. */
export function PricingIncluded(content = included) {
  return html`<section class="pricing-included">
    <div class="container">
      <div class="pricing-included__head">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, className: 'pricing-included__heading' })}
        ${content.note && Text({ text: content.note, className: 'pricing-included__note' })}
      </div>
      <div class="pricing-included__grid" data-reveal-stagger="up" data-reveal-step="100">
        ${content.items.map((item) => ValueCard(item))}
      </div>
    </div>
  </section>`;
}
