import { html } from '../../../utils/html.js';
import { labelsRoles } from '../../../data/labels.js';
import { IconCard, SectionIntro } from '../../subcomponents/index.js';

/** "Give the Right Access to the Right People." — intro + eight role cards. */
export function LabelsRoles(content = labelsRoles) {
  return html`<section class="labels-roles">
    <div class="container labels-roles__grid">
      ${SectionIntro(content)}
      <div class="labels-roles__cards" data-reveal-stagger="up" data-reveal-step="70">
        ${content.items.map((item) => IconCard({ ...item, size: 'sm' }))}
      </div>
    </div>
  </section>`;
}
