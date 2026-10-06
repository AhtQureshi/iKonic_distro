import { html, cx } from '../../../utils/html.js';
import { Logo } from '../../atoms/index.js';

/** Dashboard screen showing an advance's repayment: sidebar, stats, progress bar, recent payments. */
export function RepaymentMockup({ nav = [], active, title, tabs = [], stats = [], progress, paymentsTitle, payments = [], className = '' } = {}) {
  return html`<div class="${cx('repayment-mockup', className)}" aria-hidden="true">
    <div class="repayment-mockup__side">
      ${Logo({ height: 16, className: 'repayment-mockup__logo' })}
      ${nav.map((item) => html`<div class="${cx('repayment-mockup__nav', item === active && 'is-active')}"><span class="repayment-mockup__dot"></span>${item}</div>`)}
    </div>
    <div class="repayment-mockup__main">
      <p class="repayment-mockup__title">${title}</p>
      <div class="repayment-mockup__tabs">${tabs.map((t, i) => html`<span class="${cx(i === 0 && 'is-active')}">${t}</span>`)}</div>
      <div class="repayment-mockup__stats">
        ${stats.map((s) => html`<div class="repayment-mockup__stat"><small>${s.label}</small><b>${s.value}</b>${s.pct && html`<span class="repayment-mockup__pct">${s.pct}</span>`}</div>`)}
      </div>
      ${progress && html`<div class="repayment-mockup__progress">
        <div class="repayment-mockup__progress-head"><span>${progress.label}</span><span>${progress.caption}</span></div>
        <div class="repayment-mockup__bar"><i style="width:${progress.value}%"></i></div>
      </div>`}
      <p class="repayment-mockup__pay-title">${paymentsTitle}</p>
      ${payments.map((p) => html`<div class="repayment-mockup__pay-row"><span>${p.date}</span><span>${p.amount}</span><span>${p.rate}</span></div>`)}
    </div>
  </div>`;
}
