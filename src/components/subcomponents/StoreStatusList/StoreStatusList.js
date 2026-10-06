import { html, cx } from '../../../utils/html.js';
import { storeLogo } from '../../../utils/assets.js';
import { Img } from '../../atoms/index.js';

/**
 * Stores with a green delivery status per row ("Spotify  ● Live").
 * items: [{ name, logo, status }] — logo is a file in src/assets/svgs/stores/.
 */
export function StoreStatusList({ items = [], more, size = 'md', className = '' } = {}) {
  return html`<div class="${cx('store-status-list', `store-status-list--${size}`, className)}">
    <ul>
      ${items.map((s) => html`<li class="store-status-list__row">
        <span class="store-status-list__name">
          <span class="store-status-list__logo">${s.logo && Img({ src: storeLogo(s.logo), alt: '', width: 16, height: 16 })}</span>
          ${s.name}
        </span>
        <span class="store-status-list__status">${s.status}</span>
      </li>`)}
    </ul>
    ${more && html`<p class="store-status-list__more">${more}</p>`}
  </div>`;
}
