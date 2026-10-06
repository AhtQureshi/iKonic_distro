import { html } from '../../../utils/html.js';
import { storeStrip } from '../../../data/distribution.js';
import { StoreList } from '../../subcomponents/index.js';

/** Full-width band of store logos ("Available on Everywhere"). */
export function DistributionStores(content = storeStrip) {
  return html`<section class="distribution-stores">
    <div class="container" data-reveal="up">
      ${StoreList({ ...content, className: 'distribution-stores__list' })}
    </div>
  </section>`;
}
