import { cx, rich } from '../../../utils/cx.js';
import { Cover, Icon, Logo, Sparkline } from '../../atoms/index.js';

/** Label overview dashboard screen: sidebar nav, KPI tiles, streams chart and the artist roster. */
export function LabelDashboardMockup({ title, range, nav = [], stats = [], chart = [], artistsTitle, artists = [], className = '' }) {
  return (
    <div className={cx('label-dash', className)} aria-hidden="true">
      <aside className="label-dash__side">
        <Logo height={16} className="label-dash__logo" />
        {nav.map((item) => (
          <div key={item.label} className={cx('label-dash__nav', item.active && 'is-active')}><Icon name={item.icon} size={16} />{item.label}</div>
        ))}
      </aside>
      <div className="label-dash__main">
        <div className="label-dash__head">
          <h3 className="label-dash__title" {...rich(title)} />
          <span className="label-dash__range">{range} <Icon name="chevron-down" size={12} /></span>
        </div>
        <div className="label-dash__stats">
          {stats.map((s) => (
            <div className="label-dash__stat" key={s.label}>
              <p className="label-dash__value">{s.value}</p>
              <p className="label-dash__label" {...rich(s.label)} />
              <p className="label-dash__trend">{s.trend}</p>
            </div>
          ))}
        </div>
        <div className="label-dash__chart">
          <Sparkline values={chart} width={600} height={130} area fluid smooth={false} strokeWidth={2.5} min={0} max={130} />
        </div>
        <p className="label-dash__subhead" {...rich(artistsTitle)} />
        <div className="label-dash__artists">
          {artists.map((a) => (
            <div className="label-dash__artist" key={a.name}>
              <Cover tone={a.tone} alt={a.name} radius="none" />
              <div className="label-dash__artist-body">
                <p className="label-dash__artist-name">{a.name}</p>
                <p className="label-dash__artist-meta" {...rich(a.meta)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
