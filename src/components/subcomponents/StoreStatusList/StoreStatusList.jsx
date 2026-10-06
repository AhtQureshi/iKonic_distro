import { cx } from '../../../utils/cx.js';
import { storeLogo } from '../../../utils/assets.js';
import { Img } from '../../atoms/index.js';

/**
 * Stores with a green delivery status per row ("Spotify  ● Live").
 * items: [{ name, logo, status }] — logo is a file in public/assets/svgs/stores/.
 */
export function StoreStatusList({ items = [], more, size = 'md', className = '' }) {
  return (
    <div className={cx('store-status-list', `store-status-list--${size}`, className)}>
      <ul>
        {items.map((s) => (
          <li key={s.name} className="store-status-list__row">
            <span className="store-status-list__name">
              <span className="store-status-list__logo">{s.logo && <Img src={storeLogo(s.logo)} alt="" width={16} height={16} />}</span>
              {s.name}
            </span>
            <span className="store-status-list__status">{s.status}</span>
          </li>
        ))}
      </ul>
      {more && <p className="store-status-list__more">{more}</p>}
    </div>
  );
}
