import type { Regime } from "@/data/types";
import { StatusBadge } from "./StatusTag";
import SourceLinks from "./SourceLinks";
import { sanitizeRichText } from "@/lib/richText";

/** Bloco de texto com heading próprio, usado pelas seções de aprofundamento. */
function RichBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rg-block">
      <h4 className="rg-block-title">{title}</h4>
      <div
        className="rg-block-body"
        dangerouslySetInnerHTML={{ __html: sanitizeRichText(body) }}
      />
    </section>
  );
}

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

      {regime.legalBasis && (
        <div className="regime-legal">
          <span className="rg-legal-label">Base legal</span> {regime.legalBasis}
        </div>
      )}

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

      {regime.requirements && regime.requirements.length > 0 && (
        <section className="rg-block">
          <h4 className="rg-block-title">Requisitos de elegibilidade</h4>
          <ul className="rg-checklist">
            {regime.requirements.map((req, i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{ __html: sanitizeRichText(req) }}
              />
            ))}
          </ul>
        </section>
      )}

      {regime.process && regime.process.length > 0 && (
        <section className="rg-block">
          <h4 className="rg-block-title">Processo, passo a passo</h4>
          <ol className="rg-steps">
            {regime.process.map((s, i) => (
              <li key={i}>
                <div className="rg-step-head">
                  <span className="rg-step-name">{s.step}</span>
                  {s.timing && <span className="rg-step-timing">{s.timing}</span>}
                </div>
                <div
                  className="rg-step-detail"
                  dangerouslySetInnerHTML={{ __html: sanitizeRichText(s.detail) }}
                />
              </li>
            ))}
          </ol>
        </section>
      )}

      {regime.costs && regime.costs.length > 0 && (
        <section className="rg-block">
          <h4 className="rg-block-title">Custos e valores</h4>
          <div className="rg-costs">
            {regime.costs.map((c, i) => (
              <div className="rg-cost-row" key={i}>
                <div className="rg-cost-item">{c.item}</div>
                <div className="rg-cost-value">{c.value}</div>
                {c.note && <div className="rg-cost-note">{c.note}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {regime.sections?.map((s) => (
        <RichBlock key={s.title} title={s.title} body={s.body} />
      ))}

      {regime.impact && (
        <div className="impact-box">
          <div className="l">— Impacto HNWI</div>
          <div className="t">{regime.impact}</div>
        </div>
      )}

      {regime.brazilNote && (
        <div className="brazil-box">
          <div className="l">— Interação com o Brasil</div>
          <div
            className="t"
            dangerouslySetInnerHTML={{
              __html: sanitizeRichText(regime.brazilNote),
            }}
          />
        </div>
      )}

      {regime.warning && (
        <div className="warn-box">
          <div className="l">— Atenção / Risco</div>
          <div
            className="t"
            dangerouslySetInnerHTML={{ __html: sanitizeRichText(regime.warning) }}
          />
        </div>
      )}

      <SourceLinks sources={regime.sources} />
    </article>
  );
}
