import { cx, rich } from '../../../utils/cx.js';

/**
 * Body copy. `text` may contain markup (e.g. <br>).
 * size: 'sm' | 'md' | 'lg'   tone: 'muted' | 'dim' | 'default'
 */
export function Text({ text, size = 'md', tone = 'muted', className = '' }) {
  return <p className={cx('text', `text--${size}`, `text--${tone}`, className)} {...rich(text)} />;
}
