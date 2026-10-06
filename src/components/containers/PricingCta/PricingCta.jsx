import { cta } from '../../../data/pricing.js';
import { CtaBanner } from '../CtaBanner/CtaBanner.jsx';

/** Pricing page closing CTA: the shared CtaBanner in its 'boxed' variant, fed with pricing copy. */
export function PricingCta({ content = cta }) {
  return <CtaBanner content={content} />;
}
