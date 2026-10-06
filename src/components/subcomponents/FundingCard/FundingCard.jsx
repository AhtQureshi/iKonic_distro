import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';
import { DetailRows } from '../DetailRows/DetailRows.jsx';

/** "Advance Approved" summary card: glowing icon, amount, green status and detail rows. */
export function FundingCard({ icon = 'bolt', title, amount, status, rows = [], className = '' }) {
  return (
    <div className={cx('funding-card', className)}>
      <div className="funding-card__head">
        <span className="funding-card__icon"><Icon name={icon} size={24} /></span>
        <div>
          <p className="funding-card__title" {...rich(title)} />
          <p className="funding-card__amount">{amount}</p>
        </div>
      </div>
      {status && <p className="funding-card__status"><span className="funding-card__dot"></span>{status}</p>}
      <DetailRows rows={rows} />
    </div>
  );
}
