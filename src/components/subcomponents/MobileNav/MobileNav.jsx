import { Fragment } from 'react';
import { Anchor, Button } from '../../atoms/index.js';

/**
 * Slide-down navigation for small screens. Dropdown children are flattened into groups.
 * Controlled by the Header: `open` shows it, `onNavigate` runs when a link is followed.
 */
export function MobileNav({ id = 'mobile-nav', items = [], actions = [], open = false, onNavigate }) {
  return (
    <div className="mobile-nav" id={id} hidden={!open}>
      <nav aria-label="Mobile">
        {items.map((item) => (item.children
          ? (
            <Fragment key={item.label}>
              <p className="mobile-nav__group">{item.label}</p>
              {item.children.map((c) => <Anchor key={c.label} className="mobile-nav__link mobile-nav__link--sub" href={c.href} onClick={onNavigate}>{c.label}</Anchor>)}
            </Fragment>
          )
          : <Anchor key={item.label} className="mobile-nav__link" href={item.href} onClick={onNavigate}>{item.label}</Anchor>))}
      </nav>
      <div className="mobile-nav__actions">{actions.map((a) => <Button key={a.label} {...a} block onClick={onNavigate} />)}</div>
    </div>
  );
}
