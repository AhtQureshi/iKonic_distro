import { html } from '../../../utils/html.js';
import { highlights } from '../../../data/publishing.js';
import { IconPoint } from '../../subcomponents/index.js';

/** Row of four benefit bullets under the publishing hero. */
export function PublishingHighlights(items = highlights) {
  return html`<div class="container">
    <div class="publishing-highlights" data-reveal-stagger="up">${items.map((i) => IconPoint(i))}</div>
  </div>`;
}
