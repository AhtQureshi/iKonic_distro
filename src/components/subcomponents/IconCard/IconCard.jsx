import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/**
 * Plain bordered card: red line icon, title and short text. size: 'md' | 'sm'
 * Optional `children` render under the text (badges, extra lines).
 */
export function IconCard({ icon, title, text, size = 'md', className = '', children }) {
  return (
    <article className={cx('icon-card', `icon-card--${size}`, className)}>
      <span className="icon-card__icon"><Icon name={icon} size={size === 'sm' ? 38 : 44} /></span>
      <h3 className="icon-card__title" {...rich(title)} />
      {text && <p className="icon-card__text" {...rich(text)} />}
      {children}
    </article>
  );
}
