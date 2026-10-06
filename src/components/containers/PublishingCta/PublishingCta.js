import { html } from '../../../utils/html.js';
import { cta } from '../../../data/publishing.js';
import { Button } from '../../atoms/index.js';
import { SectionIntro } from '../../subcomponents/index.js';

/** Closing call to action on a red-glow band. */
export function PublishingCta(content = cta) {
  const actions = html`<div class="publishing-cta__actions">${content.actions.map((a) => Button(a))}</div>`;
  return html`<section class="publishing-cta">
    <div class="container">
      ${SectionIntro({ eyebrow: content.eyebrow, title: content.title, text: content.text, extra: actions })}
    </div>
  </section>`;
}
