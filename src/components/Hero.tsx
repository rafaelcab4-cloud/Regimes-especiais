import { HERO_EYEBROW, HERO_STATS, HERO_SUBTITLE } from "@/data/overview";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-eyebrow">{HERO_EYEBROW}</div>
      <h1 className="hero-title serif">
        Regimes fiscais especiais e programas imigratórios para{" "}
        <em>HNWIs</em> em 10 jurisdições estratégicas.
      </h1>
      <p className="hero-sub">{HERO_SUBTITLE}</p>
      <div className="hero-meta">
        {HERO_STATS.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <div className="num">
              {stat.accent ? <em>{stat.value}</em> : stat.value}
            </div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
