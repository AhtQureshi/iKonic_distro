import { cx } from '../../../utils/cx.js';
import { storeLogo } from '../../../utils/assets.js';
import { Img } from '../../atoms/index.js';

/** Streaming store logo + name. `logo` is a file in public/assets/svgs/stores/. */
export function StoreMark({ name, logo, className = '' }) {
  return (
    <li className={cx('store-mark', className)}>
      {logo && <Img src={storeLogo(logo)} alt="" width={22} height={22} />}
      <span>{name}</span>
    </li>
  );
}
