import { cx } from '../../../utils/cx.js';
import { Flag } from '../../atoms/index.js';

/** Ranked list of countries with flag and value. items: [{ code, name, value }] */
export function CountryList({ items = [], label = 'Top countries', className = '' }) {
  return (
    <ol className={cx('country-list', className)} aria-label={label}>
      {items.map((c) => (
        <li className="country-list__row" key={c.code}>
          <span className="country-list__name"><Flag code={c.code} />{c.name}</span>
          <span className="country-list__value" data-count>{c.value}</span>
        </li>
      ))}
    </ol>
  );
}
