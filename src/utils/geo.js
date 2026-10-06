/**
 * Equirectangular projection matching src/assets/svgs/maps/world-dots.svg.
 * Returns percentages so markers can be absolutely positioned over the map.
 */
const LAT_TOP = 84;
const LAT_BOTTOM = -58;

export function project(lon, lat) {
  return {
    x: ((lon + 180) / 360) * 100,
    y: ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * 100,
  };
}
