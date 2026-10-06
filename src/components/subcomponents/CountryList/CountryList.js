import { html, cx } from '../../../utils/html.js';
import { Flag } from '../../atoms/index.js';

/** Ranked list of countries with flag and value. items: [{ code, name, value }] */
export function CountryList({ items = [], label = 'Top countries', className = '' } = {}) {
  return html`<ol class="${cx('country-list', className)}" aria-label="${label}">
    ${items.map((c) => html`<li class="country-list__row">
      <span class="country-list__name">${Flag({ code: c.code })}${c.name}</span>
      <span class="country-list__value" data-count>${c.value}</span>
    </li>`)}
  </ol>`;
}
