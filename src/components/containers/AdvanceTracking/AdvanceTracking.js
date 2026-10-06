import { html } from '../../../utils/html.js';
import { tracking } from '../../../data/advance.js';
import { Button } from '../../atoms/index.js';
import { CheckList, RepaymentMockup, SectionHeading } from '../../subcomponents/index.js';

/** "Track Everything In Real Time." — repayment dashboard beside a checklist. */
export function AdvanceTracking(content = tracking) {
  return html`<section class="section advance-tracking">
    <div class="container advance-tracking__grid">
      <div class="advance-tracking__screen" data-reveal="left">${RepaymentMockup(content.dashboard)}</div>
      <div class="advance-tracking__copy">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
        <div data-reveal="up" data-reveal-delay="300">${CheckList({ items: content.checks, className: 'advance-tracking__checks' })}</div>
        <div data-reveal="up" data-reveal-delay="400">${Button(content.action)}</div>
      </div>
    </div>
  </section>`;
}
