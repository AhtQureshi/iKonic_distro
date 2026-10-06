import { cx } from '../../../utils/cx.js';
import { Cover, Icon, Logo } from '../../atoms/index.js';
import { StoreStatusList } from '../StoreStatusList/StoreStatusList.jsx';

/** Tilted phone showing a release and its per-store delivery status. Decorative. */
export function PhoneMockup({ title, artist, tone = 1, live, listTitle, stores = [], className = '' }) {
  return (
    <div className={cx('phone-mockup', className)} aria-hidden="true">
      <div className="phone-mockup__screen">
        <div className="phone-mockup__top">
          <Logo height={15} />
          <Icon name="menu" size={18} className="phone-mockup__menu" />
        </div>
        <div className="phone-mockup__art"><Cover tone={tone} radius="md" alt={`${title} cover`} /></div>
        <p className="phone-mockup__title">{title}</p>
        <p className="phone-mockup__artist">{artist}</p>
        {live && <span className="phone-mockup__live">{live}</span>}
        {listTitle && <p className="phone-mockup__list-title">{listTitle}</p>}
        <StoreStatusList items={stores} size="sm" />
      </div>
    </div>
  );
}
