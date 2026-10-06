import { cx } from '../../../utils/cx.js';
import { Anchor } from '../Anchor/Anchor.jsx';
import { Icon } from '../Icon/Icon.jsx';

/**
 * Round icon-only button (carousel arrows, card "go" links, socials).
 * variant: 'outline' | 'filled'. Extra props (onClick, disabled, data-*) pass through.
 */
export function IconButton({ icon, label, href, variant = 'outline', size = 40, iconSize, className = '', ...rest }) {
  const classes = cx('icon-btn', `icon-btn--${variant}`, className);
  const style = { '--icon-btn-size': `${size}px` };
  const inner = <Icon name={icon} size={iconSize || Math.round(size * 0.42)} />;

  return href
    ? <Anchor className={classes} style={style} href={href} aria-label={label} {...rest}>{inner}</Anchor>
    : <button className={classes} style={style} type="button" aria-label={label} {...rest}>{inner}</button>;
}
