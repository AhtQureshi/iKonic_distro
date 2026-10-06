import { cx, rich } from '../../../utils/cx.js';

/** Label / value rows separated by hairlines (offer summaries, estimated terms). */
export function DetailRows({ rows = [], className = '' }) {
  return (
    <dl className={cx('detail-rows', className)}>
      {rows.map((r, i) => (
        <div className="detail-rows__row" key={i}><dt {...rich(r.label)} /><dd {...rich(r.value)} /></div>
      ))}
    </dl>
  );
}
