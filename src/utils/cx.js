/** Join class names, skipping falsy entries. */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Render a trusted content string that may contain markup (e.g. 'Own More<br>Of <span class="text-red">Your Music.</span>').
 * Usage: <h2 className="heading" {...rich(title)} />
 */
export function rich(markup) {
  return { dangerouslySetInnerHTML: { __html: markup ?? '' } };
}
