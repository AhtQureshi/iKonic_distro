import { cx, rich } from '../../../utils/cx.js';

/** One step of a numbered process: red ring with the number, title and text. Connectors are drawn by the parent list. */
export function NumberedStep({ number, title, text, className = '' }) {
  return (
    <li className={cx('numbered-step', className)}>
      <span className="numbered-step__num">{number}</span>
      <h3 className="numbered-step__title" {...rich(title)} />
      <p className="numbered-step__text" {...rich(text)} />
    </li>
  );
}
