import { html } from '../../../utils/html.js';
import { labelsSteps } from '../../../data/labels.js';
import { NumberedStep, SectionIntro } from '../../subcomponents/index.js';

/** "Get Your Team Running in Minutes." — intro + four numbered steps joined by dotted lines. */
export function LabelsSteps(content = labelsSteps) {
  return html`<section class="labels-steps">
    <div class="container labels-steps__grid">
      ${SectionIntro(content)}
      <ol class="labels-steps__list" data-reveal-stagger="up" data-reveal-step="120">
        ${content.steps.map((s, i) => NumberedStep({ ...s, number: String(i + 1).padStart(2, '0') }))}
      </ol>
    </div>
  </section>`;
}
