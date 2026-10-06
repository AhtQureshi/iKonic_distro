import { html } from '../../../utils/html.js';
import { pricing } from '../../../data/home.js';
import { Button } from '../../atoms/index.js';
import { PlanCard, SectionHeading } from '../../subcomponents/index.js';

/** "Plans for Every Stage." — three plan cards with a link to the full pricing page. */
export function PricingPreview(content = pricing) {
  return html`<section class="section section--divided pricing-preview">
    <div class="container pricing-preview__grid">
      <div class="pricing-preview__copy">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
        <div data-reveal="up" data-reveal-delay="350">${Button({ ...content.link, variant: 'ghost', iconRight: 'arrow-right' })}</div>
      </div>
      <div class="pricing-preview__plans" data-reveal-stagger="up" data-reveal-step="130">${content.plans.map((p) => PlanCard(p))}</div>
    </div>
  </section>`;
}
