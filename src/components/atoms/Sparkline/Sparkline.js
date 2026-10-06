import { html, cx } from '../../../utils/html.js';

let uid = 0;

/**
 * Smoothed line chart drawn as inline SVG.
 * values: number[]   area: fill under the line   fluid: stretch to container width
 * smooth: false draws straight segments   min / max: fix the value range instead of fitting it
 */
export function Sparkline({ values = [], width = 120, height = 32, area = false, fluid = false, strokeWidth = 2.2, smooth = true, min: minValue, max: maxValue, className = '' } = {}) {
  if (values.length < 2) return '';
  const id = `spark-${++uid}`;
  const min = minValue ?? Math.min(...values);
  const max = maxValue ?? Math.max(...values);
  const pad = strokeWidth + 1;
  const pts = values.map((v, i) => [
    (i / (values.length - 1)) * width,
    pad + (1 - (v - min) / (max - min || 1)) * (height - pad * 2),
  ]);
  const line = smooth ? smoothPath(pts) : pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const fill = area ? html`<path class="sparkline__area" d="${line} L${width},${height} L0,${height} Z" fill="url(#${id})"/>` : '';

  return html`<svg class="${cx('sparkline', className)}" ${fluid ? 'width="100%"' : `width="${width}"`} height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
    ${area && html`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".45"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>`}
    ${fill}
    <path class="sparkline__line" pathLength="1" d="${line}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  </svg>`;
}

/** Catmull-Rom spline through the points, expressed as cubic Béziers. */
function smoothPath(pts) {
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}
