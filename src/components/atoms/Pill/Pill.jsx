import { cx } from '../../../utils/cx.js';

/** Toggle pill used for filters / tabs. Pass onClick to make it interactive. */
export function Pill({ label, value, active = false, size = 'md', className = '', ...rest }) {
  return (
    <button type="button" className={cx('pill', `pill--${size}`, active && 'is-active', className)} data-value={value ?? label} aria-pressed={active} {...rest}>
      {label}
    </button>
  );
}
