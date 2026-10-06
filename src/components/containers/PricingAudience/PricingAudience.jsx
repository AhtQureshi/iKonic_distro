import { audience } from '../../../data/pricing.js';
import { OfferPanel } from '../../subcomponents/index.js';

/** Side-by-side panels for labels and distributors. `content` is the array of panels. */
export function PricingAudience({ content = audience }) {
  return (
    <section className="pricing-audience">
      <div className="container pricing-audience__grid" data-reveal-stagger="up" data-reveal-step="130">
        {content.map((item) => <OfferPanel key={item.eyebrow} {...item} />)}
      </div>
    </section>
  );
}
