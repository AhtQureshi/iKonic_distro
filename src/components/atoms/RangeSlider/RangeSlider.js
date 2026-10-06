import { html, cx, attrs } from '../../../utils/html.js';

/**
 * Styled range input with a red filled track. The fill follows the value through
 * the --fill custom property; call updateRangeFill(input) after the value changes.
 */
export function RangeSlider({ id, min = 0, max = 100, step = 1, value = 0, label, className = '', extra = {} } = {}) {
  const fill = ((value - min) / (max - min)) * 100;
  return html`<input type="range" class="${cx('range-slider', className)}" ${attrs({ id, min, max, step, value, 'aria-label': label, ...extra })} style="--fill:${fill}%">`;
}

/** Sync the red track fill with the input's current value. */
export function updateRangeFill(input) {
  const min = Number(input.min);
  const max = Number(input.max);
  input.style.setProperty('--fill', `${((Number(input.value) - min) / (max - min)) * 100}%`);
}
