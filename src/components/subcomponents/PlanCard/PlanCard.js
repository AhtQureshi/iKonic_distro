import { html, cx } from '../../../utils/html.js';
import { Badge, Button, Icon } from '../../atoms/index.js';

/**
 * Pricing plan. `featured` highlights the card and switches the CTA to primary.
 * Optional: size 'lg' (full pricing page card), tagline, badgeVariant, and annualPrice —
 * with annualPrice the price swaps when a BillingToggle fires 'billingchange' (see setupPlanCards).
 */
export function PlanCard({ name, price, period = '/mo', features = [], cta = {}, featured = false, badge, className = '', size = 'md', tagline, annualPrice, annualNote = 'billed annually', badgeVariant } = {}) {
  const lg = size === 'lg';
  return html`<article class="${cx('plan-card', featured && 'plan-card--featured', lg && 'plan-card--lg', className)}">
    ${badge && Badge({ label: badge, variant: badgeVariant, className: 'plan-card__badge' })}
    <p class="plan-card__name">${name}</p>
    ${tagline && html`<p class="plan-card__tagline">${tagline}</p>`}
    <p class="plan-card__price">${annualPrice ? html`<span class="plan-card__amount" data-monthly="${price}" data-annual="${annualPrice}">${price}</span>` : price}<small>${period}</small></p>
    ${annualPrice && html`<p class="plan-card__note" data-annual="${annualNote}"></p>`}
    <ul class="plan-card__features">
      ${features.map((f) => html`<li>${Icon({ name: 'check', size: lg ? 16 : 14 })}<span>${f}</span></li>`)}
    </ul>
    ${Button({
      label: cta.label || 'Get Started',
      href: cta.href || '#',
      variant: featured ? 'primary' : 'outline',
      iconRight: 'arrow-right',
      block: true,
    })}
  </article>`;
}

/** Swap plan prices between monthly and annual when a BillingToggle inside `root` changes. */
export function setupPlanCards(root = document) {
  root.addEventListener('billingchange', (e) => {
    const annual = e.detail.value === 'annual';
    root.querySelectorAll('.plan-card__amount').forEach((el) => { el.textContent = annual ? el.dataset.annual : el.dataset.monthly; });
    root.querySelectorAll('.plan-card__note').forEach((el) => { el.textContent = annual ? el.dataset.annual : ''; });
  });
}
