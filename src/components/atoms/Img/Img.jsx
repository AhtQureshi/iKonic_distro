import { cx } from '../../../utils/cx.js';

/** Plain image with sensible defaults (lazy loading, async decoding). */
export function Img({ src, alt = '', width, height, eager = false, className = '' }) {
  return <img className={cx('img', className)} src={src} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}
