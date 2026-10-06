import { html } from '../../../utils/html.js';
import { labelsFeatures } from '../../../data/labels.js';
import { IconCard, SectionIntro } from '../../subcomponents/index.js';

/** "Everything Your Label Needs." — intro on the left, six feature cards on the right. */
export function LabelsFeatures(content = labelsFeatures) {
  return html`<section class="labels-features">
    <div class="container labels-features__grid">
      ${SectionIntro(content)}
      <div class="labels-features__cards" data-reveal-stagger="up" data-reveal-step="90">
        ${content.items.map((item) => IconCard(item))}
      </div>
    </div>
  </section>`;
}
