import { cx } from '../../../utils/cx.js';
import { Anchor } from '../../atoms/index.js';

/** One announcement in the scrolling ticker. Renders a link when href is given, otherwise a span. */
export function TickerItem({ text, href, className = '' }) {
  const classes = cx('ticker-item', className);
  const inner = (
    <>
      <i aria-hidden="true"></i>{text}
    </>
  );
  return href
    ? <Anchor className={classes} href={href}>{inner}</Anchor>
    : <span className={classes}>{inner}</span>;
}
