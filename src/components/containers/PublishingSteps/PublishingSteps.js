import { html } from '../../../utils/html.js';
import { steps } from '../../../data/publishing.js';
import { JourneyStep, SectionIntro } from '../../subcomponents/index.js';

/** "You Create. We Help You Collect." — intro beside four centred process steps. */
export function PublishingSteps(content = steps) {
  return html`<section class="publishing-steps">
    <div class="container publishing-steps__grid">
      ${SectionIntro({ eyebrow: content.eyebrow, title: content.title, text: content.text, action: content.action })}
      <ol class="publishing-steps__list" data-reveal-stagger="up" data-reveal-step="120">
        ${content.items.map((s) => JourneyStep({ ...s, className: 'publishing-steps__step' }))}
      </ol>
    </div>
  </section>`;
}
