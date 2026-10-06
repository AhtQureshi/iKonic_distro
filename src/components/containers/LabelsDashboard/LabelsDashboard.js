import { html } from '../../../utils/html.js';
import { labelsDashboard } from '../../../data/labels.js';
import { CheckList, LabelDashboardMockup, SectionIntro } from '../../subcomponents/index.js';

/** "Complete Control at a Glance." — intro + check list beside the label dashboard mockup. */
export function LabelsDashboard(content = labelsDashboard) {
  return html`<section class="labels-dashboard">
    <div class="container labels-dashboard__grid">
      ${SectionIntro({ ...content, extra: CheckList({ items: content.checklist }) })}
      <div data-reveal="left" data-reveal-delay="200">${LabelDashboardMockup(content.mockup)}</div>
    </div>
  </section>`;
}
