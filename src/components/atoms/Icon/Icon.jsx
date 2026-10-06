import { cx } from '../../../utils/cx.js';
import { ICONS } from './icons.generated.js';

/**
 * Single-colour icon from ./svgs/<name>.svg.
 * Icons are inlined (via the generated registry), so they take the current text colour.
 */
export function Icon({ name, size = 20, className = '', label }) {
  const svg = ICONS[name];
  if (!svg) console.warn(`Icon "${name}" not found in src/components/atoms/Icon/svgs/`);
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  return <span className={cx('icon', className)} style={{ '--icon-size': `${size}px` }} {...a11y} dangerouslySetInnerHTML={{ __html: svg || '' }} />;
}
