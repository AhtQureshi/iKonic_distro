import { cx, rich } from '../../../utils/cx.js';

/** Collecting-society tile: bold name + region. `highlight` paints the name red (e.g. "+ MORE"). */
export function SocietyTile({ name, region, highlight = false, className = '' }) {
  return (
    <div className={cx('society-tile', highlight && 'society-tile--highlight', className)}>
      <b className="society-tile__name" {...rich(name)} />
      <span className="society-tile__region" {...rich(region)} />
    </div>
  );
}
