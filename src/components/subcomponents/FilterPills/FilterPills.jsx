import { cx } from '../../../utils/cx.js';
import { Pill } from '../../atoms/index.js';

/**
 * Group of toggle pills. options: [{ label, value }]
 * Controlled: render it from a client component with `active` and `onChange(value)`.
 */
export function FilterPills({ options = [], active, onChange, label = 'Filter', size = 'md', className = '' }) {
  return (
    <div className={cx('filter-pills', className)} role="group" aria-label={label}>
      {options.map((o) => (
        <Pill
          key={o.value}
          label={o.label}
          value={o.value}
          size={size}
          active={o.value === active}
          onClick={() => o.value !== active && onChange?.(o.value)}
        />
      ))}
    </div>
  );
}
