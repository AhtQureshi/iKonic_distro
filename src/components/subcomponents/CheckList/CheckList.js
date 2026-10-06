import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/** Bulleted list with a red check before each item. `items` may contain markup. */
export function CheckList({ items = [], className = '' } = {}) {
  return html`<ul class="${cx('check-list', className)}">
    ${items.map((item) => html`<li>${Icon({ name: 'check', size: 16, className: 'check-list__icon' })}<span>${item}</span></li>`)}
  </ul>`;
}
