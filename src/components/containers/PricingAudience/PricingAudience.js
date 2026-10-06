import { html } from '../../../utils/html.js';
import { audience } from '../../../data/pricing.js';
import { OfferPanel } from '../../subcomponents/index.js';

/** Side-by-side panels for labels and distributors. */
export function PricingAudience(items = audience) {
  return html`<section class="pricing-audience">
    <div class="container pricing-audience__grid" data-reveal-stagger="up" data-reveal-step="130">
      ${items.map((item) => OfferPanel(item))}
    </div>
  </section>`;
}
