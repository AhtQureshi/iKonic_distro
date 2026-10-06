import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/** Small bordered card: icon + title on one line, short description below. */
export function IncomeSourceCard({ icon, title, text, className = '' }) {
  return (
    <article className={cx('income-source-card', className)}>
      <div className="income-source-card__head">
        <Icon name={icon} size={30} />
        <h3 className="income-source-card__title" {...rich(title)} />
      </div>
      <p className="income-source-card__text" {...rich(text)} />
    </article>
  );
}
