import { html, cx } from '../../../utils/html.js';
import { StoreMark } from '../StoreMark/StoreMark.js';

/** "Available everywhere" row of store logos. */
export function StoreList({ label = 'Available Everywhere', stores = [], more = '+ More', className = '' } = {}) {
  return html`<div class="${cx('store-list', className)}">
    <p class="store-list__label">${label}</p>
    <ul class="store-list__row">
      ${stores.map((s) => StoreMark(s))}
      ${more && html`<li class="store-list__more">${more}</li>`}
    </ul>
  </div>`;
}
