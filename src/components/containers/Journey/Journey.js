import { html, cx } from '../../../utils/html.js';
import { journey } from '../../../data/home.js';
import { JourneyStep, SectionHeading } from '../../subcomponents/index.js';

/**
 * "From Song to Success." — five-step process with connecting line.
 * Optional: content.align = 'center' (centred heading + steps), content.divided = false (no top rule).
 */
export function Journey(content = journey) {
  const { align = 'left', divided = true } = content;
  return html`<section class="${cx('section', divided && 'section--divided', 'journey', align === 'center' && 'journey--center')}">
    <div class="container">
      ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, align })}
      <ol class="journey__steps" data-reveal-stagger="up" data-reveal-step="150">${content.steps.map((s) => JourneyStep(s))}</ol>
    </div>
  </section>`;
}
