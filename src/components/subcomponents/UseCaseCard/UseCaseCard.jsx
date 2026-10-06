import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/** Card with a glowing red "visual" panel (tone 1-4 varies the glow) over a title and text. */
export function UseCaseCard({ icon, title, text, tone = 1, className = '' }) {
  return (
    <article className={cx('use-case-card', className)}>
      <div className={cx('use-case-card__visual', `use-case-card__visual--${tone}`)}><Icon name={icon} size={44} className="use-case-card__icon" /></div>
      <div className="use-case-card__body">
        <h3 className="use-case-card__title" {...rich(title)} />
        <p className="use-case-card__text" {...rich(text)} />
      </div>
    </article>
  );
}
