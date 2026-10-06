'use client';

import { cx, rich } from '../../../utils/cx.js';
import { Badge, Button, Icon } from '../../atoms/index.js';
import { useBilling } from '../BillingToggle/BillingContext.jsx';

/**
 * Pricing plan. `featured` highlights the card and switches the CTA to primary.
 * Optional: size 'lg' (full pricing page card), tagline, badgeVariant, and annualPrice —
 * with annualPrice the price follows the BillingToggle of the surrounding BillingProvider.
 */
export function PlanCard({ name, price, period = '/mo', features = [], cta = {}, featured = false, badge, className = '', size = 'md', tagline, annualPrice, annualNote = 'billed annually', badgeVariant }) {
  const lg = size === 'lg';
  const annual = useBilling()?.billing === 'annual';

  return (
    <article className={cx('plan-card', featured && 'plan-card--featured', lg && 'plan-card--lg', className)}>
      {badge && <Badge label={badge} variant={badgeVariant} className="plan-card__badge" />}
      <p className="plan-card__name">{name}</p>
      {tagline && <p className="plan-card__tagline">{tagline}</p>}
      <p className="plan-card__price">
        {annualPrice ? <span className="plan-card__amount">{annual ? annualPrice : price}</span> : price}
        <small>{period}</small>
      </p>
      {annualPrice && <p className="plan-card__note">{annual ? annualNote : ''}</p>}
      <ul className="plan-card__features">
        {features.map((f) => <li key={f}><Icon name="check" size={lg ? 16 : 14} /><span {...rich(f)} /></li>)}
      </ul>
      <Button
        label={cta.label || 'Get Started'}
        href={cta.href || '#'}
        variant={featured ? 'primary' : 'outline'}
        iconRight="arrow-right"
        block
      />
    </article>
  );
}
