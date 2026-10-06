import { html } from '../../../utils/html.js';
import { ticker } from '../../../data/home.js';
import { Icon } from '../../atoms/index.js';
import { TickerItem } from '../../subcomponents/index.js';

/** Scrolling "What's new" strip. The list is rendered twice so the loop is seamless. */
export function Ticker(content = ticker) {
  const items = content.items.map((text) => TickerItem({ text }));
  return html`<aside class="ticker" aria-label="${content.title}">
    <p class="ticker__title">${Icon({ name: 'bolt', size: 16 })}${content.title}</p>
    <div class="ticker__viewport">
      <div class="ticker__track">
        <div class="ticker__group">${items}</div>
        <div class="ticker__group" aria-hidden="true">${items}</div>
      </div>
    </div>
  </aside>`;
}
