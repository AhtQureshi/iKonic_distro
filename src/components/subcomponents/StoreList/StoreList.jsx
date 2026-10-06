import { cx } from '../../../utils/cx.js';
import { StoreMark } from '../StoreMark/StoreMark.jsx';

/** "Available everywhere" row of store logos. */
export function StoreList({ label = 'Available Everywhere', stores = [], more = '+ More', className = '' }) {
  return (
    <div className={cx('store-list', className)}>
      <p className="store-list__label">{label}</p>
      <ul className="store-list__row">
        {stores.map((s) => <StoreMark key={s.name} {...s} />)}
        {more && <li className="store-list__more">{more}</li>}
      </ul>
    </div>
  );
}
