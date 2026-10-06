import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/** Red line icon beside a short bold title and a muted one-line description. */
export function TitledPoint({ icon, title, text, className = '' }) {
  return (
    <div className={cx('titled-point', className)}>
      <Icon name={icon} size={34} className="titled-point__icon" />
      <div>
        <p className="titled-point__title" {...rich(title)} />
        <p className="titled-point__text" {...rich(text)} />
      </div>
    </div>
  );
}
