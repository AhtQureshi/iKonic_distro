import { cx, rich } from '../../../utils/cx.js';
import { Logo } from '../../atoms/index.js';

/** Dashboard screen showing an advance's repayment: sidebar, stats, progress bar, recent payments. */
export function RepaymentMockup({ nav = [], active, title, tabs = [], stats = [], progress, paymentsTitle, payments = [], className = '' }) {
  return (
    <div className={cx('repayment-mockup', className)} aria-hidden="true">
      <div className="repayment-mockup__side">
        <Logo height={16} className="repayment-mockup__logo" />
        {nav.map((item) => (
          <div key={item} className={cx('repayment-mockup__nav', item === active && 'is-active')}><span className="repayment-mockup__dot"></span>{item}</div>
        ))}
      </div>
      <div className="repayment-mockup__main">
        <p className="repayment-mockup__title" {...rich(title)} />
        <div className="repayment-mockup__tabs">
          {tabs.map((t, i) => (
            <span key={t} className={cx(i === 0 && 'is-active')}>{t}</span>
          ))}
        </div>
        <div className="repayment-mockup__stats">
          {stats.map((s) => (
            <div key={s.label} className="repayment-mockup__stat">
              <small {...rich(s.label)} /><b>{s.value}</b>{s.pct && <span className="repayment-mockup__pct">{s.pct}</span>}
            </div>
          ))}
        </div>
        {progress && (
          <div className="repayment-mockup__progress">
            <div className="repayment-mockup__progress-head"><span {...rich(progress.label)} /><span {...rich(progress.caption)} /></div>
            <div className="repayment-mockup__bar"><i style={{ width: `${progress.value}%` }}></i></div>
          </div>
        )}
        <p className="repayment-mockup__pay-title" {...rich(paymentsTitle)} />
        {payments.map((p, i) => (
          <div key={`${p.date}-${i}`} className="repayment-mockup__pay-row"><span>{p.date}</span><span>{p.amount}</span><span>{p.rate}</span></div>
        ))}
      </div>
    </div>
  );
}
