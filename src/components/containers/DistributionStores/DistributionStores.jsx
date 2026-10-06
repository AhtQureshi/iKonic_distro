import { storeStrip } from '../../../data/distribution.js';
import { StoreList } from '../../subcomponents/index.js';

/** Full-width band of store logos ("Available on Everywhere"). */
export function DistributionStores({ content = storeStrip }) {
  return (
    <section className="distribution-stores">
      <div className="container" data-reveal="up">
        <StoreList {...content} className="distribution-stores__list" />
      </div>
    </section>
  );
}
