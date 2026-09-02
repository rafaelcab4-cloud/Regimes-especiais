import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import type { Regime } from "@/data/types";
import { StatusBadge } from "./StatusTag";
import { sanitizeRichText } from "@/lib/richText";

/**
 * Bloco de aprofundamento, fechado por padrão. Usa <details>/<summary> —
 * navegável por teclado e por leitor de tela sem JS adicional, e localizável
 * pelo "buscar na página" do navegador mesmo fechado (Chrome/Firefox/Safari
 * expandem automaticamente o <details> que contém o trecho encontrado).
 */
function Accordion({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <details className="rg-block">
      <summary>
        <span className="rg-block-title">
          <ChevronRight size={11} className="rg-acc-caret" aria-hidden />
          {title}
        </span>
        {meta && <span className="rg-acc-meta">{meta}</span>}
      </summary>
      <div className="rg-block-content">{children}</div>
    </details>
  );
}

function pt(n: number, singular: string, plural: string) {
  return `${n} ${n === 1 ? singular : plural}`;
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
          <span className="rg-legal-label">Base legal</span>{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: sanitizeRichText(regime.legalBasis),
            }}
          />
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

      {regime.warning && (
        <div className="warn-box">
          <div className="l">— Atenção / Risco</div>
          <div
            className="t"
            dangerouslySetInnerHTML={{ __html: sanitizeRichText(regime.warning) }}
          />
        </div>
      )}

      {regime.requirements && regime.requirements.length > 0 && (
        <Accordion
          title="Requisitos de elegibilidade"
          meta={pt(regime.requirements.length, "item", "itens")}
        >
          <ul className="rg-checklist">
            {regime.requirements.map((req, i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{ __html: sanitizeRichText(req) }}
              />
            ))}
          </ul>
        </Accordion>
      )}

      {regime.process && regime.process.length > 0 && (
        <Accordion
          title="Processo, passo a passo"
          meta={pt(regime.process.length, "etapa", "etapas")}
        >
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
        </Accordion>
      )}

      {regime.costs && regime.costs.length > 0 && (
        <Accordion
          title="Custos e valores"
          meta={pt(regime.costs.length, "item", "itens")}
        >
          <div className="rg-costs">
            {regime.costs.map((c, i) => (
              <div className="rg-cost-row" key={i}>
                <div className="rg-cost-item">{c.item}</div>
                <div className="rg-cost-value">{c.value}</div>
                {c.note && <div className="rg-cost-note">{c.note}</div>}
              </div>
            ))}
          </div>
        </Accordion>
      )}

      {regime.sections?.map((s) => (
        <Accordion key={s.title} title={s.title}>
          <div
            className="rg-block-body"
            dangerouslySetInnerHTML={{ __html: sanitizeRichText(s.body) }}
          />
        </Accordion>
      ))}

      {regime.impact && (
        <Accordion title="Impacto HNWI">
          <div className="impact-box">
            <div className="t">{regime.impact}</div>
          </div>
        </Accordion>
      )}

      {regime.brazilNote && (
        <Accordion title="Interação com o Brasil">
          <div className="brazil-box">
            <div
              className="t"
              dangerouslySetInnerHTML={{
                __html: sanitizeRichText(regime.brazilNote),
              }}
            />
          </div>
        </Accordion>
      )}

      {regime.sources.length > 0 && (
        <Accordion title="Fontes" meta={pt(regime.sources.length, "link", "links")}>
          <div className="src-row">
            {regime.sources.map((s) => (
              <a
                key={s.u}
                className="src-link"
                href={s.u}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareArrowOutUpRight size={9} aria-hidden /> {s.t}
              </a>
            ))}
          </div>
        </Accordion>
      )}
    </article>
  );
}
