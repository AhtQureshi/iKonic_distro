'use client';

import { useEffect, useState } from 'react';
import { cx } from '../../../utils/cx.js';
import { navigation, headerActions } from '../../../data/site.js';
import { Button, Icon, Logo } from '../../atoms/index.js';
import { MobileNav, NavMenu } from '../../subcomponents/index.js';

/** Site header: logo, main nav, actions and the mobile menu. `active` is a nav item id. */
export function Header({ active, items = navigation, actions = headerActions }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const desktop = window.matchMedia('(min-width: 1025px)');
    const onResize = (e) => { if (e.matches) setMenuOpen(false); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, []);

  return (
    <header className={cx('site-header', menuOpen && 'is-menu-open', scrolled && 'is-scrolled')} data-header>
      <div className="container site-header__bar">
        <Logo href="/" height={28} />
        <NavMenu items={items} active={active} className="site-header__nav" />
        <div className="site-header__actions">
          {actions.map((a) => <Button key={a.label} {...a} />)}
          <button
            className="site-header__burger"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" size={24} className="site-header__burger-open" />
            <Icon name="close" size={24} className="site-header__burger-close" />
          </button>
        </div>
      </div>
      <MobileNav items={items} actions={actions.map((a) => ({ ...a, size: 'md' }))} open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
}
