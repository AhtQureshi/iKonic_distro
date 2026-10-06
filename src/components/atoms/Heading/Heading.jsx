import { cx, rich } from '../../../utils/cx.js';

/**
 * Heading. `text` may contain markup, e.g. 'Own More <span class="text-red">Of Your Music.</span>'
 * level: semantic tag (1-6). size: 'h1' | 'display' | 'h2' | 'h3' — visual size, independent of level.
 */
export function Heading({ text, level = 2, size = 'h2', id, className = '' }) {
  const Tag = `h${level}`;
  return <Tag id={id} className={cx('heading', `heading--${size}`, className)} {...rich(text)} />;
}
