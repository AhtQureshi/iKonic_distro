import { html, cx } from '../../../utils/html.js';
import { Pill } from '../../atoms/index.js';

/** Group of toggle pills. options: [{ label, value }] */
export function FilterPills({ options = [], active, label = 'Filter', size = 'md', className = '' } = {}) {
  return html`<div class="${cx('filter-pills', className)}" role="group" aria-label="${label}">
    ${options.map((o) => Pill({ label: o.label, value: o.value, size, active: o.value === active }))}
  </div>`;
}

/** Wire up a FilterPills group; calls onChange(value) when the selection changes. */
export function setupFilterPills(group, onChange) {
  group.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill || pill.classList.contains('is-active')) return;
    group.querySelectorAll('.pill').forEach((p) => {
      const on = p === pill;
      p.classList.toggle('is-active', on);
      p.setAttribute('aria-pressed', String(on));
    });
    onChange && onChange(pill.dataset.value);
  });
}
