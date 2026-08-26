import type { Regime } from "@/data/types";
import RegimeCard from "./RegimeCard";

export default function RegimeColumn({
  number,
  title,
  subtitle,
  regimes,
}: {
  number: string;
  title: string;
  subtitle: string;
  regimes: Regime[];
}) {
  return (
    <div>
      <h2 className="col-head">
        <span className="num">{number}</span> <span className="serif">{title}</span>
      </h2>
      <div className="col-sub">{subtitle}</div>
      {regimes.map((regime, index) => (
        <RegimeCard regime={regime} index={index} key={regime.name} />
      ))}
    </div>
  );
}
