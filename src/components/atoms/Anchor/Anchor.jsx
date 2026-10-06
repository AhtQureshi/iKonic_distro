import NextLink from 'next/link';

/**
 * Link that uses Next.js client-side navigation for internal paths ('/pricing')
 * and a plain <a> for everything else ('#', 'https://…', 'mailto:…').
 */
export function Anchor({ href, children, ...rest }) {
  const internal = typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
  return internal
    ? <NextLink href={href} {...rest}>{children}</NextLink>
    : <a href={href} {...rest}>{children}</a>;
}
