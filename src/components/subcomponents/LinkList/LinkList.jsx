import { cx } from '../../../utils/cx.js';
import { Anchor } from '../../atoms/index.js';

/** Inline list of text links. items: [{ label, href }] */
export function LinkList({ items = [], label, className = '' }) {
  return (
    <nav className={cx('link-list', className)} aria-label={label || undefined}>
      <ul>{items.map((i) => <li key={i.label}><Anchor href={i.href}>{i.label}</Anchor></li>)}</ul>
    </nav>
  );
}
