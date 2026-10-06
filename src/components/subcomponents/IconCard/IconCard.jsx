import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/** Plain bordered card: red line icon, title and short text. size: 'md' | 'sm' */
export function IconCard({ icon, title, text, size = 'md', className = '' }) {
  return (
    <article className={cx('icon-card', `icon-card--${size}`, className)}>
      <span className="icon-card__icon"><Icon name={icon} size={size === 'sm' ? 38 : 44} /></span>
      <h3 className="icon-card__title" {...rich(title)} />
      <p className="icon-card__text" {...rich(text)} />
    </article>
  );
}
