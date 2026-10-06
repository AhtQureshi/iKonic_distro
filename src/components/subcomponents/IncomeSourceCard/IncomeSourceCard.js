import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/** Small bordered card: icon + title on one line, short description below. */
export function IncomeSourceCard({ icon, title, text, className = '' } = {}) {
  return html`<article class="${cx('income-source-card', className)}">
    <div class="income-source-card__head">
      ${Icon({ name: icon, size: 30 })}
      <h3 class="income-source-card__title">${title}</h3>
    </div>
    <p class="income-source-card__text">${text}</p>
  </article>`;
}
