import { html, cx } from '../../../utils/html.js';

/** Glass card listing royalty types, each with an amount and a progress bar. rows: [{ label, value, percent }] */
export function RoyaltyBreakdown({ title, rows = [], className = '' } = {}) {
  return html`<div class="${cx('royalty-breakdown', className)}">
    <p class="royalty-breakdown__title">${title}</p>
    <ul class="royalty-breakdown__list">
      ${rows.map((r) => html`<li class="royalty-breakdown__row">
        <div class="royalty-breakdown__top"><span>${r.label}</span><b>${r.value}</b></div>
        <span class="royalty-breakdown__bar"><i style="width:${r.percent}%"></i></span>
      </li>`)}
    </ul>
  </div>`;
}
