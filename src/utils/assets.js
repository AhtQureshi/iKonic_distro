/** Asset path helpers. Files live in public/assets/ and are served from /assets/. */
const ASSETS = '/assets/';

export const asset = (path) => ASSETS + path;
export const image = (file) => asset(`images/${file}`);
export const storeLogo = (name) => asset(`svgs/stores/${name}.svg`);
export const flag = (code) => asset(`svgs/flags/${code}.svg`);
export const brand = (name) => asset(`svgs/brand/${name}.svg`);
export const map = (name) => asset(`svgs/maps/${name}.svg`);
export const illustration = (name) => asset(`svgs/illustrations/${name}.svg`);
