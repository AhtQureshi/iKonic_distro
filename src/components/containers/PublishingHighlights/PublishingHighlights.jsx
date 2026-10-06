import { highlights } from '../../../data/publishing.js';
import { IconPoint } from '../../subcomponents/index.js';

/** Row of four benefit bullets under the publishing hero. `content` is the array of bullets. */
export function PublishingHighlights({ content = highlights }) {
  return (
    <div className="container">
      <div className="publishing-highlights" data-reveal-stagger="up">{content.map((i) => <IconPoint key={i.text} {...i} />)}</div>
    </div>
  );
}
