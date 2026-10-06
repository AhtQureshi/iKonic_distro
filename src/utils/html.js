/**
 * Tagged template for building component markup.
 * Arrays are joined, and null / undefined / false render as nothing,
 * so conditionals and .map() can be dropped straight into templates.
 */
export function html(strings, ...values) {
  return strings.reduce((out, str, i) => out + str + (i < values.length ? toMarkup(values[i]) : ''), '');
}

function toMarkup(value) {
  if (Array.isArray(value)) return value.map(toMarkup).join('');
  if (value === null || value === undefined || value === false) return '';
  return String(value);
}

/** Join class names, skipping falsy entries. */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

/** Turn an object into HTML attributes: { href: '#', 'aria-label': 'x' } -> href="#" aria-label="x" */
export function attrs(map = {}) {
  return Object.entries(map)
    .filter(([, v]) => v !== null && v !== undefined && v !== false)
    .map(([k, v]) => (v === true ? k : `${k}="${String(v).replace(/"/g, '&quot;')}"`))
    .join(' ');
}
