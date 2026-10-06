import { html, cx } from '../../../utils/html.js';
import { storeLogo } from '../../../utils/assets.js';
import { Button, Cover, Img, Logo } from '../../atoms/index.js';

/**
 * "Releases" screen of the IKONIC dashboard: sidebar, tabs and a table of live releases.
 * Decorative, so nothing inside is focusable.
 */
export function ReleaseManagerMockup({
  title = 'Releases',
  action = 'Create Release',
  nav = [],
  activeNav,
  tabs = [],
  activeTab,
  rows = [],
  stores = [],
  more,
  status = 'Live',
  className = '',
} = {}) {
  return html`<div class="${cx('release-manager', className)}" aria-hidden="true">
    <aside class="release-manager__side">
      ${Logo({ height: 15, className: 'release-manager__logo' })}
      <ul>${nav.map((item) => html`<li class="${cx('release-manager__nav', item === activeNav && 'is-active')}">${item}</li>`)}</ul>
    </aside>
    <div class="release-manager__main">
      <div class="release-manager__head">
        <p class="release-manager__title">${title}</p>
        ${Button({ label: action, size: 'sm', className: 'release-manager__cta', extra: { tabindex: -1 } })}
      </div>
      <div class="release-manager__tabs">${tabs.map((t) => html`<span class="${cx('release-manager__tab', t === activeTab && 'is-active')}">${t}</span>`)}</div>
      ${rows.map((r) => html`<div class="release-manager__row">
        <span class="release-manager__thumb">${Cover({ tone: r.tone, radius: 'sm', alt: r.title })}</span>
        <div class="release-manager__track"><p>${r.title}</p><span>${r.artist}</span></div>
        <span class="release-manager__status">${status}</span>
        <span class="release-manager__date">${r.date}</span>
        <span class="release-manager__stores">
          ${stores.map((s) => html`<span class="release-manager__store">${Img({ src: storeLogo(s), alt: '', width: 10, height: 10 })}</span>`)}
          ${more && html`<span class="release-manager__more">${more}</span>`}
        </span>
      </div>`)}
    </div>
  </div>`;
}
