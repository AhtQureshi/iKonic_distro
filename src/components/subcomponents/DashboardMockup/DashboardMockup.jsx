import { cx } from '../../../utils/cx.js';
import { Button, Cover, Icon, Logo, Pill, Sparkline } from '../../atoms/index.js';
import { MetricCard } from '../MetricCard/MetricCard.jsx';

/**
 * Laptop with the IKONIC artist dashboard on screen.
 * Built entirely from atoms + MetricCard so it stays in sync with the design system.
 */
export function DashboardMockup({
  user = 'Nova Rae',
  tagline = 'Your music. Your business. All in one place.',
  nav = [],
  stats = [],
  chart = { values: [], ranges: [], activeRange: '', tooltip: null, labels: [] },
  releases = [],
  className = '',
}) {
  return (
    <div className={cx('dashboard-mockup', className)} aria-hidden="true">
      <div className="dashboard-mockup__lid">
        <div className="dashboard-mockup__screen">
          <aside className="dashboard-mockup__side">
            <Logo height={14} className="dashboard-mockup__logo" />
            <ul>
              {nav.map((item) => (
                <li key={item.label} className={cx('dashboard-mockup__nav', item.active && 'is-active')}><Icon name={item.icon} size={12} />{item.label}</li>
              ))}
            </ul>
          </aside>

          <div className="dashboard-mockup__main">
            <div className="dashboard-mockup__head">
              <div>
                <p className="dashboard-mockup__welcome">Welcome back, {user}</p>
                <p className="dashboard-mockup__tagline">{tagline}</p>
              </div>
              <Button label="Create Release" size="sm" className="dashboard-mockup__cta" tabIndex={-1} />
            </div>

            <div className="dashboard-mockup__stats">
              {stats.map((s) => <MetricCard key={s.label} {...s} size="sm" />)}
            </div>

            <div className="dashboard-mockup__chart">
              <div className="dashboard-mockup__chart-head">
                <p>Streams</p>
                <div className="dashboard-mockup__ranges">{chart.ranges.map((r) => <Pill key={r} label={r} size="sm" active={r === chart.activeRange} className="dashboard-mockup__range" />)}</div>
              </div>
              <div className="dashboard-mockup__plot">
                <Sparkline values={chart.values} width={400} height={92} area fluid strokeWidth={2} />
                {chart.tooltip && (
                  <span className="dashboard-mockup__tooltip" style={{ left: `${chart.tooltip.x}%`, top: `${chart.tooltip.y}%` }}><b>{chart.tooltip.value}</b>{chart.tooltip.date}</span>
                )}
              </div>
              <div className="dashboard-mockup__axis">{chart.labels.map((l, i) => <span key={i}>{l}</span>)}</div>
            </div>

            <p className="dashboard-mockup__label">Recent Releases</p>
            <div className="dashboard-mockup__releases">
              {releases.map((r) => (
                <div className="dashboard-mockup__release" key={r.title}>
                  <Cover tone={r.tone} alt={r.title} radius="sm" />
                  <p className="dashboard-mockup__release-title">{r.title}</p>
                  <p className="dashboard-mockup__release-artist">{r.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-mockup__base"></div>
    </div>
  );
}
