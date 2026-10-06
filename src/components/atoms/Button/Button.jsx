import { cx } from '../../../utils/cx.js';
import { Anchor } from '../Anchor/Anchor.jsx';
import { Icon } from '../Icon/Icon.jsx';

/**
 * Button / link button.
 * variant: 'primary' | 'outline' | 'ghost'
 * size:    'sm' | 'md' | 'lg'
 * Renders a link when href is given, otherwise a <button>. Extra props (onClick, aria-*, data-*) pass through.
 */
export function Button({
  label,
  href,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  className = '',
  ...rest
}) {
  const classes = cx('btn', `btn--${variant}`, `btn--${size}`, block && 'btn--block', className);
  const iconSize = size === 'sm' ? 14 : 16;
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={iconSize + 4} />}
      <span>{label}</span>
      {iconRight && <Icon name={iconRight} size={iconSize} className="btn__icon-right" />}
    </>
  );

  return href
    ? <Anchor className={classes} href={href} {...rest}>{inner}</Anchor>
    : <button className={classes} type="button" {...rest}>{inner}</button>;
}
