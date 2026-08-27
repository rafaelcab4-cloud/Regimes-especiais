const LEGEND = [
  { cls: "ld-ok", label: "Mantido" },
  { cls: "ld-chg", label: "Alterado" },
  { cls: "ld-ext", label: "Extinto" },
  { cls: "ld-new", label: "Novo" },
  { cls: "ld-risk", label: "Atenção" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>Regimes Especiais © 2026 · Documento de uso interno</div>
        <div className="footer-legend">
          {LEGEND.map((item) => (
            <span className="leg-item" key={item.cls}>
              <span className={`leg-dot ${item.cls}`} aria-hidden /> {item.label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
