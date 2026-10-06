/**
 * Asset path helpers. Paths resolve from the page's location (pages live in the
 * project root), so they work over http and when a page is opened from disk.
 */
const ASSETS = new URL('src/assets/', document.baseURI).href;

export const asset = (path) => ASSETS + path;
export const image = (file) => asset(`images/${file}`);
export const storeLogo = (name) => asset(`svgs/stores/${name}.svg`);
export const flag = (code) => asset(`svgs/flags/${code}.svg`);
export const brand = (name) => asset(`svgs/brand/${name}.svg`);
export const map = (name) => asset(`svgs/maps/${name}.svg`);
export const illustration = (name) => asset(`svgs/illustrations/${name}.svg`);
