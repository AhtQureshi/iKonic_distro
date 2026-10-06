import { ticker } from '../../../data/home.js';
import { Icon } from '../../atoms/index.js';
import { TickerItem } from '../../subcomponents/index.js';

/** Scrolling "What's new" strip. The list is rendered twice so the loop is seamless. */
export function Ticker({ content = ticker }) {
  const items = content.items.map((text) => <TickerItem key={text} text={text} />);
  return (
    <aside className="ticker" aria-label={content.title}>
      <p className="ticker__title"><Icon name="bolt" size={16} />{content.title}</p>
      <div className="ticker__viewport">
        <div className="ticker__track">
          <div className="ticker__group">{items}</div>
          <div className="ticker__group" aria-hidden="true">{items}</div>
        </div>
      </div>
    </aside>
  );
}
