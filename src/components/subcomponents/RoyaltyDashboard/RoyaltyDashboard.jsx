import { cx, rich } from '../../../utils/cx.js';
import { Icon, Logo, MiniBars, Trend } from '../../atoms/index.js';

/**
 * Flat publishing dashboard mockup: sidebar nav, stat tiles, monthly bar chart and a top-songs table.
 * Song / top-performer artwork uses `tone` (1-3) gradient swatches.
 */
export function RoyaltyDashboard({
  title,
  range,
  nav = [],
  stats = [],
  top,
  chart = { values: [], months: [], tooltip: null },
  songsTitle,
  songs = [],
  className = '',
}) {
  return (
    <div className={cx('royalty-dashboard', className)} aria-hidden="true">
      <aside className="royalty-dashboard__side">
        <Logo height={16} className="royalty-dashboard__logo" />
        <ul className="royalty-dashboard__nav">
          {nav.map((n) => (
            <li key={n.label} className={cx('royalty-dashboard__nav-item', n.active && 'is-active')}><Icon name={n.icon} size={15} />{n.label}</li>
          ))}
        </ul>
      </aside>

      <div className="royalty-dashboard__main">
        <div className="royalty-dashboard__top">
          <p className="royalty-dashboard__title" {...rich(title)} />
          <span className="royalty-dashboard__select">{range} <Icon name="chevron-down" size={12} /></span>
        </div>

        <div className="royalty-dashboard__stats">
          {stats.map((s) => (
            <div key={s.label} className="royalty-dashboard__stat">
              <p className="royalty-dashboard__stat-label" {...rich(s.label)} />
              <p className="royalty-dashboard__stat-value">{s.value}</p>
              <Trend value={s.trend} />
            </div>
          ))}
          {top && (
            <div className="royalty-dashboard__stat royalty-dashboard__stat--top">
              <span className={cx('royalty-dashboard__art', `royalty-dashboard__art--tone-${top.tone}`)}></span>
              <div>
                <p className="royalty-dashboard__stat-label" {...rich(top.label)} />
                <p className="royalty-dashboard__song" {...rich(top.title)} />
              </div>
            </div>
          )}
        </div>

        <div className="royalty-dashboard__chart">
          {chart.tooltip && <span className="royalty-dashboard__tip">{chart.tooltip.value}<small>{chart.tooltip.label}</small></span>}
          <MiniBars values={chart.values} height={120} className="royalty-dashboard__bars" />
          <div className="royalty-dashboard__months">
            {chart.months.map((m, i) => <span key={`${m}-${i}`}>{m}</span>)}
          </div>
        </div>

        <div className="royalty-dashboard__table">
          <p className="royalty-dashboard__table-title" {...rich(songsTitle)} />
          {songs.map((s, i) => (
            <div key={`${s.title}-${i}`} className="royalty-dashboard__row">
              <span className="royalty-dashboard__num">{i + 1}</span>
              <div className="royalty-dashboard__track">
                <span className={cx('royalty-dashboard__art', 'royalty-dashboard__art--sm', `royalty-dashboard__art--tone-${s.tone}`)}></span>
                <div><b {...rich(s.title)} /><small {...rich(s.meta)} /></div>
              </div>
              <span className="royalty-dashboard__amount">{s.value}</span>
              <Trend value={s.trend} className="royalty-dashboard__pct" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
