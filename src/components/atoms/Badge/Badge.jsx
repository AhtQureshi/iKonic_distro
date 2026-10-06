import { cx } from '../../../utils/cx.js';

/** Small label chip. variant: 'light' | 'red' | 'success' */
export function Badge({ label, variant = 'light', className = '' }) {
  return <span className={cx('badge', `badge--${variant}`, className)}>{label}</span>;
}
