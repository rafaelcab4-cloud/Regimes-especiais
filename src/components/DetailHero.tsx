import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Country } from "@/data/types";
import { STATUS_LABEL } from "@/data/status";
import FlagIcon from "./FlagIcon";

export default function DetailHero({ country }: { country: Country }) {
  return (
    <div className="detail-hero fadein">
      <div className="detail-hero-inner">
        <div>
          <FlagIcon
            code={country.flagCode}
            label={country.name}
            width={84}
            height={60}
            className="dh-flag"
          />
          <div className="dh-eyebrow">— Dossiê · {country.region}</div>
          <h1 className="dh-name">{country.name}</h1>
          <div className="dh-attract">
            <span className="stars">{country.attract}</span>
            <span className="alabel">{country.attractLabel}</span>
          </div>
        </div>
        <Link href="/" className="dh-back">
          <ArrowLeft size={13} aria-hidden /> Voltar à visão geral
        </Link>
      </div>
      <div className="dh-summary" style={{ maxWidth: 1480, margin: "24px auto 0" }}>
        <div className="dh-stat">
          <div className="l">— Regime fiscal principal</div>
          <div className="v">{country.sumFiscal}</div>
        </div>
        <div className="dh-stat">
          <div className="l">— Status fiscal</div>
          <div className="v">{STATUS_LABEL[country.sumFS]}</div>
        </div>
        <div className="dh-stat">
          <div className="l">— Programa imigratório</div>
          <div className="v">{country.sumVisa}</div>
        </div>
        <div className="dh-stat">
          <div className="l">— Status visto</div>
          <div className="v">{STATUS_LABEL[country.sumVS]}</div>
        </div>
      </div>
    </div>
  );
}
