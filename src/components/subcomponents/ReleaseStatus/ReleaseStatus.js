import { html, cx } from '../../../utils/html.js';
import { storeLogo } from '../../../utils/assets.js';
import { Cover, Icon, Img } from '../../atoms/index.js';

/** Floating "release is live" card: cover, title, artist, status and store logos. */
export function ReleaseStatus({ title, artist, tone = 1, status = 'Released', stores = [], extra, label, className = '' } = {}) {
  return html`<div class="${cx('release-status', className)}">
    <div class="release-status__cover">${Cover({ tone, alt: `${title} cover`, radius: 'sm' })}</div>
    <div>
      ${label && html`<p class="release-status__label">${label}</p>`}
      <p class="release-status__title">${title}</p>
      <p class="release-status__artist">${artist}</p>
      <p class="release-status__state">${Icon({ name: 'play', size: 8 })} ${status}</p>
      ${(stores.length > 0 || extra) && html`<div class="release-status__stores">
        ${stores.map((s) => html`<span class="release-status__store">${Img({ src: storeLogo(s), alt: s, width: 12, height: 12 })}</span>`)}
        ${extra && html`<span class="release-status__more">${extra}</span>`}
      </div>`}
    </div>
  </div>`;
}
