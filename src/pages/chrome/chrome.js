// Shared site header + footer for the standalone pages (distribution.html, pricing.html, …).
// A page marks the slots with <div data-site-header="pricing"></div> (value = active nav id)
// and <div data-site-footer></div>. Each renders in a shadow root with dist/chrome.css,
// so the page's own CSS and the component CSS can't affect each other.
import { Footer, Header, setupHeader } from '../../components/containers/index.js';

function mount(slot, markup) {
  const root = slot.attachShadow({ mode: 'open' });
  // Hidden until the stylesheet loads, so the unstyled markup never flashes.
  root.innerHTML = `<link rel="stylesheet" href="dist/chrome.css"><div style="visibility:hidden">${markup}</div>`;
  const wrap = root.lastElementChild;
  root.firstElementChild.addEventListener('load', () => wrap.removeAttribute('style'));
  return root;
}

const headerSlot = document.querySelector('[data-site-header]');
if (headerSlot) {
  setupHeader(mount(headerSlot, Header({ active: headerSlot.dataset.siteHeader || undefined })));
}

const footerSlot = document.querySelector('[data-site-footer]');
if (footerSlot) mount(footerSlot, Footer());
