import { cx, rich } from '../../../utils/cx.js';
import { storeLogo } from '../../../utils/assets.js';
import { Cover, Icon, Img } from '../../atoms/index.js';

/** Floating "release is live" card: cover, title, artist, status and store logos. */
export function ReleaseStatus({ title, artist, tone = 1, status = 'Released', stores = [], extra, label, className = '' }) {
  return (
    <div className={cx('release-status', className)}>
      <div className="release-status__cover"><Cover tone={tone} alt={`${title} cover`} radius="sm" /></div>
      <div>
        {label && <p className="release-status__label" {...rich(label)} />}
        <p className="release-status__title" {...rich(title)} />
        <p className="release-status__artist" {...rich(artist)} />
        <p className="release-status__state"><Icon name="play" size={8} /> {status}</p>
        {(stores.length > 0 || extra) && (
          <div className="release-status__stores">
            {stores.map((s) => (
              <span key={s} className="release-status__store"><Img src={storeLogo(s)} alt={s} width={12} height={12} /></span>
            ))}
            {extra && <span className="release-status__more">{extra}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
