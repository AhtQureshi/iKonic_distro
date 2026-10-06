import { cx, rich } from '../../../utils/cx.js';
import { Avatar } from '../../atoms/index.js';

/** Overlapping avatars + headline number, e.g. "50K+ Artists & Labels". */
export function SocialProof({ avatars = [], value, label, className = '' }) {
  return (
    <div className={cx('social-proof', className)}>
      <div className="social-proof__avatars">
        {avatars.map((tone, i) => <Avatar key={i} tone={tone} size={44} />)}
      </div>
      <div>
        <p className="social-proof__value" data-count>{value}</p>
        <p className="social-proof__label" {...rich(label)} />
      </div>
    </div>
  );
}
