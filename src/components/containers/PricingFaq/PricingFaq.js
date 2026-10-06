import { html } from '../../../utils/html.js';
import { faq } from '../../../data/pricing.js';
import { Button } from '../../atoms/index.js';
import { AccordionItem, SectionHeading, setupAccordion } from '../../subcomponents/index.js';

/** Pricing FAQ: heading + link on the left, accordion on the right. */
export function PricingFaq(content = faq) {
  return html`<section class="pricing-faq">
    <div class="container pricing-faq__grid">
      <div class="pricing-faq__copy">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text, className: 'pricing-faq__heading' })}
        ${content.action && html`<div data-reveal="up" data-reveal-delay="300">${Button({ variant: 'outline', iconRight: 'arrow-right', ...content.action })}</div>`}
      </div>
      <div class="pricing-faq__list" data-accordion data-reveal-stagger="up" data-reveal-step="90">
        ${content.items.map((item) => AccordionItem({ question: item.q, answer: item.a }))}
      </div>
    </div>
  </section>`;
}

export function setupPricingFaq(root = document) {
  setupAccordion(root);
}
