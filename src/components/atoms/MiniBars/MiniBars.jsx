import { cx } from '../../../utils/cx.js';

/** Tiny bar chart. values are 0-100 (percent of the bar height). */
export function MiniBars({ values = [], height = 34, className = '' }) {
  return (
    <span className={cx('mini-bars', className)} style={{ '--bars-h': `${height}px` }} aria-hidden="true">
      {values.map((v, i) => <i key={i} style={{ height: `${v}%`, '--i': i }} />)}
    </span>
  );
}
