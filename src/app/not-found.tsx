import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "80px 36px" }}>
      <div className="section-num">— 404</div>
      <h1 className="section-title" style={{ marginBottom: 18 }}>
        Página não encontrada
      </h1>
      <p className="hero-sub" style={{ margin: "0 auto 24px" }}>
        A jurisdição consultada não está no monitor. Volte para a visão geral.
      </p>
      <Link href="/" className="dh-back" style={{ color: "var(--ink)", borderColor: "var(--line)" }}>
        Voltar à visão geral
      </Link>
    </section>
  );
}
