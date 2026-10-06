import { cx } from '../../../utils/cx.js';
import { Icon } from '../Icon/Icon.jsx';

/** Up/down change indicator, e.g. ▲ +12.4% */
export function Trend({ value, direction = 'up', size = 'md', className = '' }) {
  return (
    <span className={cx('trend', `trend--${direction}`, `trend--${size}`, className)}>
      <Icon name="trend-up" size={size === 'sm' ? 8 : 10} />{value}
    </span>
  );
}
