import { cx, rich } from '../../../utils/cx.js';

/** Small red uppercase label that sits above section headings. `text` may contain entities (e.g. &amp;). */
export function Eyebrow({ text, className = '' }) {
  return <p className={cx('eyebrow', className)} {...rich(text)} />;
}
