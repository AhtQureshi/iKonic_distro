import { cx } from '../../../utils/cx.js';
import { Button } from '../../atoms/index.js';
import { SectionHeading } from '../SectionHeading/SectionHeading.jsx';

/**
 * Left column of a split section: eyebrow, heading, text, optional extra content
 * (a React node, e.g. a check list) and a call-to-action button.
 */
export function SectionIntro({ eyebrow, title, text, action, extra = null, level = 2, size = 'h2', className = '' }) {
  return (
    <div className={cx('section-intro', className)}>
      <SectionHeading eyebrow={eyebrow} title={title} text={text} level={level} size={size} />
      {extra && <div className="section-intro__extra" data-reveal="up" data-reveal-delay="300">{extra}</div>}
      {action && <div className="section-intro__action" data-reveal="up" data-reveal-delay="350"><Button {...action} /></div>}
    </div>
  );
}
