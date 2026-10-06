import { cx, rich } from '../../../utils/cx.js';
import { Avatar, Icon } from '../../atoms/index.js';

/** Label account summary: avatar + name, four headline stats and a stack of artist avatars. */
export function LabelSummaryCard({ name, stats = [], avatars = [], more, className = '' }) {
  return (
    <div className={cx('label-summary', className)}>
      <div className="label-summary__top">
        <span className="label-summary__avatar" aria-hidden="true"></span>
        <span className="label-summary__name" {...rich(name)} />
        <Icon name="chevron-down" size={14} className="label-summary__caret" />
      </div>
      <div className="label-summary__stats">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="label-summary__value" data-count>{s.value}</p>
            <p className="label-summary__label" {...rich(s.label)} />
          </div>
        ))}
      </div>
      <div className="label-summary__avatars">
        {avatars.map((tone, i) => <Avatar key={i} tone={tone} size={40} className="label-summary__dot" />)}
        {more && <span className="label-summary__more">{more}</span>}
      </div>
    </div>
  );
}
