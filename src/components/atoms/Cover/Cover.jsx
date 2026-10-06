import { cx } from '../../../utils/cx.js';

/**
 * Square album artwork.
 * Pass `src` for real artwork; otherwise `tone` (1-8) draws a rim-lit artist
 * silhouette placeholder so layouts look finished before real covers exist.
 */
export function Cover({ tone = 1, src, alt = '', radius = 'md', className = '' }) {
  const classes = cx('cover', `cover--r-${radius}`, !src && `cover--art cover--tone-${tone}`, className);
  return src
    ? <span className={classes}><img src={src} alt={alt} loading="lazy" /></span>
    : <span className={classes} role="img" aria-label={alt || 'Cover art'} />;
}
