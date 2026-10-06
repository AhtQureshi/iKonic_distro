import { cx } from '../../../utils/cx.js';

/**
 * Styled range input with a red filled track; the fill follows `value` through --fill.
 * Controlled: pass value + onChange from a client component.
 */
export function RangeSlider({ id, min = 0, max = 100, step = 1, value = 0, label, className = '', ...rest }) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <input
      type="range"
      className={cx('range-slider', className)}
      id={id}
      min={min}
      max={max}
      step={step}
      value={value}
      aria-label={label}
      style={{ '--fill': `${fill}%` }}
      {...rest}
    />
  );
}
