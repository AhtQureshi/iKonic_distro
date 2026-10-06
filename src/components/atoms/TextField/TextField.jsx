import { cx } from '../../../utils/cx.js';

/**
 * Labelled form input. multiline renders a <textarea>.
 * Pass `error` to show a message under the field (and mark it invalid). Extra props (value, onChange, required…) pass through.
 */
export function TextField({ id, label, multiline = false, error, className = '', ...rest }) {
  const Control = multiline ? 'textarea' : 'input';
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={cx('text-field', error && 'is-invalid', className)}>
      <label className="text-field__label" htmlFor={id}>{label}</label>
      <Control id={id} className="text-field__control" aria-invalid={error ? true : undefined} aria-describedby={errorId} rows={multiline ? 5 : undefined} {...rest} />
      {error && <p className="text-field__error" id={errorId}>{error}</p>}
    </div>
  );
}
