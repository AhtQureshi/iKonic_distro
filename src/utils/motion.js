/**
 * Scroll animations, driven by attributes in component markup:
 *   data-reveal="up|down|left|right|zoom|fade"  animate the element in when it scrolls into view
 *   data-reveal-delay="120"                       delay in ms
 *   data-reveal-stagger="up"                      reveal each direct child in turn
 *   data-count                                    count the number in the element up from 0
 * Revealed elements get a data-visible attribute (not a class, which React would overwrite on re-render).
 * Content stays fully visible if JS is off or the user prefers reduced motion.
 * Browser-only: called from the MotionObserver client component in the root layout.
 */

/** Inline <head> script: hide reveal targets before first paint so they don't flash in and out. */
export const MOTION_BOOT_SCRIPT =
  "if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window)document.documentElement.classList.add('motion')";

/** Observe every reveal / count target under root. Returns a cleanup function. */
export function setupMotion(root = document) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return () => {};
  const $$ = (selector) => Array.from(root.querySelectorAll(selector));

  $$('[data-reveal-stagger]').forEach((group) => {
    const variant = group.dataset.revealStagger || 'up';
    const step = Number(group.dataset.revealStep || 90);
    const base = Number(group.dataset.revealDelay || 0);
    Array.from(group.children).forEach((child, i) => {
      if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', variant);
      child.style.setProperty('--reveal-delay', `${base + i * step}ms`);
    });
  });
  $$('[data-reveal][data-reveal-delay]').forEach((el) => {
    el.style.setProperty('--reveal-delay', `${el.dataset.revealDelay}ms`);
  });

  document.documentElement.classList.add('motion');

  const revealer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-visible', '');
      revealer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal]:not([data-visible])').forEach((el) => revealer.observe(el));

  const counter = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      counter.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  $$('[data-count]:not([data-counted])').forEach((el) => counter.observe(el));

  return () => {
    revealer.disconnect();
    counter.disconnect();
  };
}

/** Animate "2,483,921", "$8,432", "1.2M", "170+" … from zero, keeping prefix/suffix and format. */
function countUp(el, duration = 1600) {
  el.setAttribute('data-counted', '');
  const original = el.textContent.trim();
  const match = original.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  if (!match) return;
  const [, prefix, num, suffix] = match;
  const target = parseFloat(num.replace(/,/g, ''));
  const decimals = (num.split('.')[1] || '').length;
  const grouped = num.includes(',');
  const format = (v) => {
    const fixed = v.toFixed(decimals);
    return grouped ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : fixed;
  };

  el.style.minWidth = `${el.offsetWidth}px`; // stop layout jumping as digits change
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = prefix + format(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = original;
  };
  requestAnimationFrame(tick);
}
