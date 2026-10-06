import { cx } from '../../../utils/cx.js';
import { Heading, Icon, IconButton, Text } from '../../atoms/index.js';

/**
 * Product feature tile with a glowing icon artwork in the corner.
 * variant: 'glow' (default) | 'plain' (no corner artwork or red glow, compact height)
 */
export function FeatureCard({ icon, title, text, href = '#', art, variant = 'glow', className = '' }) {
  const plain = variant === 'plain';
  // The aria-label is plain text, so decode the &amp; entity some titles carry.
  const plainTitle = String(title ?? '').replace(/&amp;/g, '&');
  return (
    <article className={cx('feature-card', plain && 'feature-card--plain', className)}>
      {!plain && <span className="feature-card__art" aria-hidden="true"><Icon name={art || icon} size={190} /></span>}
      <span className="feature-card__icon"><Icon name={icon} size={34} /></span>
      <Heading text={title} level={3} size="h3" className="feature-card__title" />
      <Text text={text} size="sm" />
      <IconButton icon="arrow-right" label={`Learn more about ${plainTitle}`} href={href} className="feature-card__go" />
    </article>
  );
}
