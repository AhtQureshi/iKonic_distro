import { html } from '../../../utils/html.js';
import { $, $$ } from '../../../utils/dom.js';
import { navigation, headerActions } from '../../../data/site.js';
import { Button, Icon, Logo } from '../../atoms/index.js';
import { MobileNav, NavMenu } from '../../subcomponents/index.js';

/** Site header: logo, main nav, actions and the mobile menu. `active` is a nav item id. */
export function Header({ active, items = navigation, actions = headerActions } = {}) {
  return html`<header class="site-header" data-header>
    <div class="container site-header__bar">
      ${Logo({ href: 'index.html', height: 28 })}
      ${NavMenu({ items, active, className: 'site-header__nav' })}
      <div class="site-header__actions">
        ${actions.map((a) => Button(a))}
        <button class="site-header__burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav" data-burger>
          ${Icon({ name: 'menu', size: 24, className: 'site-header__burger-open' })}
          ${Icon({ name: 'close', size: 24, className: 'site-header__burger-close' })}
        </button>
      </div>
    </div>
    ${MobileNav({ items, actions: actions.map((a) => ({ ...a, size: 'md' })) })}
  </header>`;
}

export function setupHeader(root = document) {
  const header = $('[data-header]', root);
  if (!header) return;
  const burger = $('[data-burger]', header);
  const panel = $('#mobile-nav', header);

  const setMenu = (open) => {
    header.classList.toggle('is-menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.hidden = !open;
  };
  burger.addEventListener('click', () => setMenu(panel.hidden));
  window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => e.matches && setMenu(false));

  // Dropdowns open on hover via CSS; this adds click / keyboard / touch support.
  $$('.nav-menu__dropdown', header).forEach((dd) => {
    const trigger = $('.nav-menu__trigger', dd);
    trigger.addEventListener('click', () => {
      const open = !dd.classList.contains('is-open');
      dd.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      // composedPath() so this also works when the header is rendered inside a shadow root.
      if (!e.composedPath().includes(dd)) { dd.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    setMenu(false);
    $$('.nav-menu__dropdown.is-open', header).forEach((dd) => dd.classList.remove('is-open'));
  });

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
