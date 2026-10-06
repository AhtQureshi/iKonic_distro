'use client';

// A client component on purpose: React adds a "preload this image" hint for eager images rendered by
// server components, and that hint also rides along when Next.js prefetches a page from the menu, so every
// page would download every other page's banner. Rendered here, the page's own HTML still preloads its
// banner (fast first paint), but prefetched pages don't.
import { cx } from '../../../utils/cx.js';

/**
 * Plain image with sensible defaults (lazy loading, async decoding).
 * eager: load immediately. priority: eager + high fetch priority, for the banner at the top of a page.
 */
export function Img({ src, alt = '', width, height, eager = false, priority = false, className = '' }) {
  return (
    <img
      className={cx('img', className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager || priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
