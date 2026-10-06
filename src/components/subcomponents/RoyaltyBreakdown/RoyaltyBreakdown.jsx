import { cx, rich } from '../../../utils/cx.js';

/** Glass card listing royalty types, each with an amount and a progress bar. rows: [{ label, value, percent }] */
export function RoyaltyBreakdown({ title, rows = [], className = '' }) {
  return (
    <div className={cx('royalty-breakdown', className)}>
      <p className="royalty-breakdown__title" {...rich(title)} />
      <ul className="royalty-breakdown__list">
        {rows.map((r) => (
          <li key={r.label} className="royalty-breakdown__row">
            <div className="royalty-breakdown__top"><span {...rich(r.label)} /><b>{r.value}</b></div>
            <span className="royalty-breakdown__bar"><i style={{ width: `${r.percent}%` }}></i></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
