import { cx, rich } from '../../../utils/cx.js';
import { Icon } from '../../atoms/index.js';

/**
 * One step of a horizontal process. Connector lines are drawn by the parent list.
 * Pass `number` (e.g. '01') instead of `icon` to show a step number in the circle.
 */
export function JourneyStep({ icon, number, title, text, className = '' }) {
  return (
    <li className={cx('journey-step', className)}>
      {number
        ? <span className="journey-step__icon journey-step__icon--number">{number}</span>
        : <span className="journey-step__icon"><Icon name={icon} size={26} /></span>}
      <div>
        <h3 className="journey-step__title" {...rich(title)} />
        <p className="journey-step__text" {...rich(text)} />
      </div>
    </li>
  );
}
