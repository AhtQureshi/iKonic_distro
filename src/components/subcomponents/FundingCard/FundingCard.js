import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';
import { DetailRows } from '../DetailRows/DetailRows.js';

/** "Advance Approved" summary card: glowing icon, amount, green status and detail rows. */
export function FundingCard({ icon = 'bolt', title, amount, status, rows = [], className = '' } = {}) {
  return html`<div class="${cx('funding-card', className)}">
    <div class="funding-card__head">
      <span class="funding-card__icon">${Icon({ name: icon, size: 24 })}</span>
      <div>
        <p class="funding-card__title">${title}</p>
        <p class="funding-card__amount">${amount}</p>
      </div>
    </div>
    ${status && html`<p class="funding-card__status"><span class="funding-card__dot"></span>${status}</p>`}
    ${DetailRows({ rows })}
  </div>`;
}
