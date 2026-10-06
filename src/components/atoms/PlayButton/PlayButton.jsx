import { cx } from '../../../utils/cx.js';
import { Icon } from '../Icon/Icon.jsx';

/** Circular play glyph. Decorative by default; pass `label` to make it a real button. */
export function PlayButton({ size = 44, label, className = '' }) {
  const style = { '--play-size': `${size}px` };
  const glyph = <Icon name="play" size={Math.round(size * 0.38)} />;
  return label
    ? <button type="button" className={cx('play-btn', className)} style={style} aria-label={label}>{glyph}</button>
    : <span className={cx('play-btn', className)} style={style} aria-hidden="true">{glyph}</span>;
}
