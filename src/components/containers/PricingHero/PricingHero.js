import { html } from '../../../utils/html.js';
import { hero } from '../../../data/pricing.js';
import { Eyebrow, Heading, Icon, Text } from '../../atoms/index.js';
import { BillingToggle, setupBillingToggle } from '../../subcomponents/index.js';

/** Pricing page intro: headline, Monthly / Annual switch and the handwritten "Artists Own More Here." note. */
export function PricingHero(content = hero) {
  return html`<section class="pricing-hero">
    <div class="container pricing-hero__inner">
      <div class="pricing-hero__copy" data-reveal-stagger="up" data-reveal-step="110">
        ${Eyebrow({ text: content.eyebrow, className: 'pricing-hero__eyebrow' })}
        ${Heading({ text: content.title, level: 1, size: 'h1', className: 'pricing-hero__title' })}
        ${Text({ text: content.text, size: 'lg', className: 'pricing-hero__text' })}
        ${BillingToggle(content.billing)}
      </div>
      ${content.note && html`<div class="pricing-hero__note" aria-hidden="true">
        ${Icon({ name: content.note.icon, size: 44, className: 'pricing-hero__note-icon' })}
        <span>${content.note.text}</span>
      </div>`}
    </div>
  </section>`;
}

/** Wires the billing switch; it announces changes with a bubbling `billingchange` event. */
export function setupPricingHero(root = document) {
  setupBillingToggle(root);
}
