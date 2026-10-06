import { cx } from '../../../utils/cx.js';
import { map } from '../../../utils/assets.js';
import { project } from '../../../utils/geo.js';
import { Img } from '../../atoms/index.js';

// Same aspect ratio as public/assets/svgs/maps/world-dots.svg
const VB_W = 1000;
const VB_H = 400;

const toViewBox = ({ lon, lat }) => {
  const p = project(lon, lat);
  return [(p.x / 100) * VB_W, (p.y / 100) * VB_H];
};

/**
 * Dotted world map with glowing listener hotspots and arcs from a hub.
 * hub: { lon, lat }   hotspots: [{ lon, lat, size?: 1-3 }]
 */
export function WorldMap({ hub, hotspots = [], label = 'World map of listeners', className = '' }) {
  const [hx, hy] = hub ? toViewBox(hub) : [0, 0];

  // Arcs only to the bigger markets so the map stays readable
  const arcs = hub ? hotspots.filter((h) => (h.size || 1) >= 2).map((h, i) => {
    const [x, y] = toViewBox(h);
    const mx = (hx + x) / 2;
    const my = Math.min(hy, y) - Math.abs(x - hx) * 0.22 - 10;
    return (
      <path
        key={i}
        className="world-map__arc"
        style={{ animationDelay: `${(i * 0.35).toFixed(2)}s` }}
        d={`M${hx.toFixed(1)},${hy.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`}
      />
    );
  }) : [];

  const spots = hotspots.map((h, i) => {
    const [x, y] = toViewBox(h);
    const r = 3 + (h.size || 1) * 2;
    return (
      <g key={i} className="world-map__spot" style={{ animationDelay: `${(i * 0.4).toFixed(2)}s` }}>
        <circle cx={x.toFixed(1)} cy={y.toFixed(1)} r={r * 3.2} className="world-map__halo" />
        <circle cx={x.toFixed(1)} cy={y.toFixed(1)} r={r} className="world-map__core" />
      </g>
    );
  });

  return (
    <figure className={cx('world-map', className)} role="img" aria-label={label}>
      <Img src={map('world-dots')} alt="" width={VB_W} height={VB_H} className="world-map__dots" />
      <svg className="world-map__overlay" viewBox={`0 0 ${VB_W} ${VB_H}`} aria-hidden="true">
        <defs>
          <radialGradient id="world-map-halo"><stop offset="0" stopColor="#ff5a2a" stopOpacity=".75" /><stop offset="1" stopColor="#ef3a10" stopOpacity="0" /></radialGradient>
        </defs>
        <g className="world-map__arcs">{arcs}</g>
        {spots}
      </svg>
    </figure>
  );
}
