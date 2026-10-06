import { html } from '../../../utils/html.js';
import { process } from '../../../data/advance.js';
import { JourneyStep, SectionHeading } from '../../subcomponents/index.js';

/** "Get Funded. Keep Creating." — four numbered steps on a red connecting line. */
export function AdvanceProcess(content = process) {
  return html`<section class="section advance-process" id="${content.id}">
    <div class="container">
      ${SectionHeading({ eyebrow: content.eyebrow, title: content.title })}
      <ol class="advance-process__steps" data-reveal-stagger="up" data-reveal-step="140">${content.steps.map((s) => JourneyStep(s))}</ol>
    </div>
  </section>`;
}
