import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/**
 * Desktop navigation. Items with `children` render as a dropdown.
 * items: [{ label, href, children?: [{ label, href, description? }] }]
 */
export function NavMenu({ items = [], active, className = '' } = {}) {
  return html`<nav class="${cx('nav-menu', className)}" aria-label="Main">
    <ul class="nav-menu__list">
      ${items.map((item) => (item.children ? Dropdown(item) : html`
        <li><a class="${cx('nav-menu__link', active === item.id && 'is-active')}" href="${item.href}">${item.label}</a></li>`))}
    </ul>
  </nav>`;
}

function Dropdown(item) {
  return html`<li class="nav-menu__dropdown">
    <button class="nav-menu__link nav-menu__trigger" type="button" aria-expanded="false" aria-haspopup="true">
      ${item.label} ${Icon({ name: 'chevron-down', size: 14 })}
    </button>
    <div class="nav-menu__panel" role="menu">
      ${item.children.map((child) => html`
        <a class="nav-menu__panel-link" role="menuitem" href="${child.href}">
          <span>${child.label}</span>
          ${child.description && html`<small>${child.description}</small>`}
        </a>`)}
    </div>
  </li>`;
}
