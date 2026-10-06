import { html, cx } from '../../../utils/html.js';
import { Cover, Icon, Logo } from '../../atoms/index.js';
import { StoreStatusList } from '../StoreStatusList/StoreStatusList.js';

/** Tilted phone showing a release and its per-store delivery status. Decorative. */
export function PhoneMockup({ title, artist, tone = 1, live, listTitle, stores = [], className = '' } = {}) {
  return html`<div class="${cx('phone-mockup', className)}" aria-hidden="true">
    <div class="phone-mockup__screen">
      <div class="phone-mockup__top">
        ${Logo({ height: 15 })}
        ${Icon({ name: 'menu', size: 18, className: 'phone-mockup__menu' })}
      </div>
      <div class="phone-mockup__art">${Cover({ tone, radius: 'md', alt: `${title} cover` })}</div>
      <p class="phone-mockup__title">${title}</p>
      <p class="phone-mockup__artist">${artist}</p>
      ${live && html`<span class="phone-mockup__live">${live}</span>`}
      ${listTitle && html`<p class="phone-mockup__list-title">${listTitle}</p>`}
      ${StoreStatusList({ items: stores, size: 'sm' })}
    </div>
  </div>`;
}
