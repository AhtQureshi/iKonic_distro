import { cx, rich } from '../../../utils/cx.js';
import { storeLogo } from '../../../utils/assets.js';
import { Button, Cover, Img, Logo } from '../../atoms/index.js';

/**
 * "Releases" screen of the IKONIC dashboard: sidebar, tabs and a table of live releases.
 * Decorative, so nothing inside is focusable.
 */
export function ReleaseManagerMockup({
  title = 'Releases',
  action = 'Create Release',
  nav = [],
  activeNav,
  tabs = [],
  activeTab,
  rows = [],
  stores = [],
  more,
  status = 'Live',
  className = '',
}) {
  return (
    <div className={cx('release-manager', className)} aria-hidden="true">
      <aside className="release-manager__side">
        <Logo height={15} className="release-manager__logo" />
        <ul>
          {nav.map((item) => (
            <li key={item} className={cx('release-manager__nav', item === activeNav && 'is-active')}>{item}</li>
          ))}
        </ul>
      </aside>
      <div className="release-manager__main">
        <div className="release-manager__head">
          <p className="release-manager__title" {...rich(title)} />
          <Button label={action} size="sm" className="release-manager__cta" tabIndex={-1} />
        </div>
        <div className="release-manager__tabs">
          {tabs.map((t) => (
            <span key={t} className={cx('release-manager__tab', t === activeTab && 'is-active')}>{t}</span>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={`${r.title}-${i}`} className="release-manager__row">
            <span className="release-manager__thumb"><Cover tone={r.tone} src={r.src} radius="sm" alt={r.title} /></span>
            <div className="release-manager__track"><p {...rich(r.title)} /><span {...rich(r.artist)} /></div>
            <span className="release-manager__status">{status}</span>
            <span className="release-manager__date">{r.date}</span>
            <span className="release-manager__stores">
              {stores.map((s) => (
                <span key={s} className="release-manager__store"><Img src={storeLogo(s)} alt="" width={10} height={10} /></span>
              ))}
              {more && <span className="release-manager__more">{more}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
