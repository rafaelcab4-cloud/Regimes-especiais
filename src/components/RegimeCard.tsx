import type { Regime } from "@/data/types";
import { StatusBadge } from "./StatusTag";
import SourceLinks from "./SourceLinks";
import { sanitizeRichText } from "@/lib/richText";

export default function RegimeCard({
  regime,
  index,
}: {
  regime: Regime;
  index: number;
}) {
  return (
    <article
      className="regime fadein"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="regime-top">
        <span className="regime-name">{regime.name}</span>
        <StatusBadge status={regime.status} />
      </div>
      <div
        className="regime-desc"
        dangerouslySetInnerHTML={{ __html: sanitizeRichText(regime.desc) }}
      />
      {regime.kv.length > 0 && (
        <div className="regime-grid">
          {regime.kv.map((item) => (
            <div className="kv" key={item.l}>
              <div className="kv-l">{item.l}</div>
              <div className="kv-v">{item.v}</div>
            </div>
          ))}
        </div>
      )}
      {regime.impact && (
        <div className="impact-box">
          <div className="l">— Impacto HNWI</div>
          <div className="t">{regime.impact}</div>
        </div>
      )}
      {regime.warning && (
        <div className="warn-box">
          <div className="l">— Atenção / Risco</div>
          <div className="t">{regime.warning}</div>
        </div>
      )}
      <SourceLinks sources={regime.sources} />
    </article>
  );
}
