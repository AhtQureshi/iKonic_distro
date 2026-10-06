import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/** Red line icon beside a short bold statement (benefit bullets). */
export function IconPoint({ icon, text, className = '' }) {
  return (
    <div className={cx('icon-point', className)}>
      <Icon name={icon} size={30} />
      <p className="icon-point__text" {...rich(text)} />
    </div>
  );
}
