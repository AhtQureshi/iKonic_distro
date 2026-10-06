import { cx, rich } from '../../../utils/cx.js';
import { compare } from '../../../data/pricing.js';
import { Icon } from '../../atoms/index.js';

const cell = (value) => {
  if (value === true) return <span className="pricing-compare__yes" aria-label="Included">✓</span>;
  if (value === false) return <span className="pricing-compare__no" aria-label="Not included">–</span>;
  return <span className="pricing-compare__num">{value}</span>;
};

/** Feature-by-plan comparison table; the `highlight` column is tinted red. Scrolls sideways on small screens. */
export function PricingCompare({ content = compare }) {
  const hi = (i) => i === content.highlight && 'pricing-compare__hi';
  return (
    <section className="pricing-compare">
      <div className="container">
        <div className="pricing-compare__card" data-reveal="up">
          <div className="pricing-compare__scroll">
            <table className="pricing-compare__table">
              <thead>
                <tr>
                  <th scope="col">{content.label}</th>
                  {content.columns.map((c, i) => <th scope="col" className={cx(hi(i))} key={c}>{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row"><span className="pricing-compare__icon"><Icon name={row.icon} size={13} /></span><span {...rich(row.label)} /></th>
                    {row.values.map((v, i) => <td className={cx(hi(i))} key={i}>{cell(v)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
