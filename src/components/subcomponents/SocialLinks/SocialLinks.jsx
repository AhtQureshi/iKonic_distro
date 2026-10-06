import { cx } from '../../../utils/cx.js';
import { IconButton } from '../../atoms/index.js';

/** Row of round social icons. items: [{ icon, label, href }] */
export function SocialLinks({ items = [], className = '' }) {
  return (
    <ul className={cx('social-links', className)}>
      {items.map((s) => (
        <li key={s.label}><IconButton icon={s.icon} label={s.label} href={s.href} size={38} iconSize={15} target="_blank" rel="noopener" /></li>
      ))}
    </ul>
  );
}
