'use client';

import { useEffect, useRef, useState } from 'react';
import { cx } from '../../../utils/cx.js';
import { Anchor, Icon } from '../../atoms/index.js';

/**
 * Desktop navigation. Items with `children` render as a dropdown
 * (opens on hover via CSS; click / keyboard / touch handled here).
 * items: [{ id, label, href, children?: [{ label, href, description? }] }]
 */
export function NavMenu({ items = [], active, className = '' }) {
  return (
    <nav className={cx('nav-menu', className)} aria-label="Main">
      <ul className="nav-menu__list">
        {items.map((item) => (item.children
          ? <Dropdown key={item.label} item={item} />
          : <li key={item.label}><Anchor className={cx('nav-menu__link', active === item.id && 'is-active')} href={item.href}>{item.label}</Anchor></li>))}
      </ul>
    </nav>
  );
}

function Dropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <li className={cx('nav-menu__dropdown', open && 'is-open')} ref={ref}>
      <button className="nav-menu__link nav-menu__trigger" type="button" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)}>
        {item.label} <Icon name="chevron-down" size={14} />
      </button>
      <div className="nav-menu__panel" role="menu">
        {item.children.map((child) => (
          <Anchor key={child.label} className="nav-menu__panel-link" role="menuitem" href={child.href} onClick={() => setOpen(false)}>
            <span>{child.label}</span>
            {child.description && <small>{child.description}</small>}
          </Anchor>
        ))}
      </div>
    </li>
  );
}
