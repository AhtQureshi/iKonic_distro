import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/** Icon + big number + label tile. `stacked` puts the icon above the number. */
export function StatTile({ icon, value, label, stacked = false, className = '' }) {
  return (
    <div className={cx('stat-tile', stacked && 'stat-tile--stacked', className)}>
      <Icon name={icon} size={28} />
      <div>
        <p className="stat-tile__value" data-count>{value}</p>
        <p className="stat-tile__label" {...rich(label)} />
      </div>
    </div>
  );
}
