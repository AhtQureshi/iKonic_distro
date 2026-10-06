import { html } from '../../../utils/html.js';
import { Button } from '../../atoms/index.js';

/** Slide-down navigation for small screens. Dropdown children are flattened into groups. */
export function MobileNav({ id = 'mobile-nav', items = [], actions = [] } = {}) {
  return html`<div class="mobile-nav" id="${id}" hidden>
    <nav aria-label="Mobile">
      ${items.map((item) => (item.children
        ? html`<p class="mobile-nav__group">${item.label}</p>${item.children.map((c) => html`<a class="mobile-nav__link mobile-nav__link--sub" href="${c.href}">${c.label}</a>`)}`
        : html`<a class="mobile-nav__link" href="${item.href}">${item.label}</a>`))}
    </nav>
    <div class="mobile-nav__actions">${actions.map((a) => Button({ ...a, block: true }))}</div>
  </div>`;
}
