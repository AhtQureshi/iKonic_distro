import { cx } from '../../../utils/cx.js';
import { image } from '../../../utils/assets.js';
import { Anchor } from '../Anchor/Anchor.jsx';

/**
 * IKONIC wordmark (public/assets/images/logo.webp).
 * height: rendered height in px; width follows the 1194x298 aspect ratio.
 */
export function Logo({ href, height = 24, className = '' }) {
  const width = Math.round(height * (1194 / 298));
  const img = <img className="logo__img" src={image('logo.webp')} alt="IKONIC" width={width} height={height} />;

  // No prefetch: prefetching the home page would make every page download its 1.6 MB hero photo.
  return href
    ? <Anchor className={cx('logo', className)} href={href} prefetch={false} aria-label="IKONIC home">{img}</Anchor>
    : <span className={cx('logo', className)}>{img}</span>;
}
