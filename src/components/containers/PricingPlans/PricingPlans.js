import { html } from '../../../utils/html.js';
import { plans } from '../../../data/pricing.js';
import { PlanCard, setupPlanCards } from '../../subcomponents/index.js';

/** The three artist plans in full, with prices that follow the hero's Monthly / Annual switch. */
export function PricingPlans(content = plans) {
  return html`<section class="pricing-plans">
    <div class="container">
      <div class="pricing-plans__grid" data-reveal-stagger="up" data-reveal-step="130">
        ${content.items.map((p) => PlanCard({ ...p, size: 'lg', badgeVariant: 'red', annualNote: content.annualNote }))}
      </div>
    </div>
  </section>`;
}

/** Listen on `root` (the page) for the hero's `billingchange` event and swap the prices. */
export function setupPricingPlans(root = document) {
  setupPlanCards(root);
}
