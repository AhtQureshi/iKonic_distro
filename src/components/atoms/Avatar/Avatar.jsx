import { cx } from '../../../utils/cx.js';
import { Cover } from '../Cover/Cover.jsx';

/** Round avatar. Uses the Cover atom for the image / placeholder art. */
export function Avatar({ tone = 1, src, alt = '', size = 44, className = '' }) {
  return (
    <span className={cx('avatar', className)} style={{ '--avatar-size': `${size}px` }}>
      <Cover tone={tone} src={src} alt={alt} radius="full" />
    </span>
  );
}
