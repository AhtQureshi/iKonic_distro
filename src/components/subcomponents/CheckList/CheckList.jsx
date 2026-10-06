import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/** Bulleted list with a red check before each item. `items` may contain markup. */
export function CheckList({ items = [], className = '' }) {
  return (
    <ul className={cx('check-list', className)}>
      {items.map((item, i) => (
        <li key={i}><Icon name="check" size={16} className="check-list__icon" /><span {...rich(item)} /></li>
      ))}
    </ul>
  );
}
