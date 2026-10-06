import { html, cx } from '../../../utils/html.js';
import { $$ } from '../../../utils/dom.js';

/**
 * Segmented Monthly / Annual switch with an optional "save" note beside it.
 * setupBillingToggle(root) wires it up; each change dispatches a bubbling
 * `billingchange` event with { value } (PlanCard's setupPlanCards listens for it).
 */
export function BillingToggle({ label = 'Billing period', options = [], active, save, className = '' } = {}) {
  const current = active ?? options[0]?.value;
  return html`<div class="${cx('billing-toggle', className)}">
    <div class="billing-toggle__switch" role="group" aria-label="${label}">
      ${options.map((o) => html`<button type="button" class="${cx('billing-toggle__option', o.value === current && 'is-on')}" data-value="${o.value}" aria-pressed="${o.value === current}">${o.label}</button>`)}
    </div>
    ${save && html`<span class="billing-toggle__save">${save}</span>`}
  </div>`;
}

export function setupBillingToggle(root = document) {
  $$('.billing-toggle', root).forEach((toggle) => {
    const buttons = $$('.billing-toggle__option', toggle);
    buttons.forEach((btn) => btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.classList.toggle('is-on', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      toggle.dispatchEvent(new CustomEvent('billingchange', { bubbles: true, detail: { value: btn.dataset.value } }));
    }));
  });
}
