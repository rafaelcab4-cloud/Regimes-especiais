import Link from "next/link";
import { Search } from "lucide-react";
import { ALERTS } from "@/data/alerts";
import { COUNTRY_ORDER } from "@/data/countries";
import { EditionBadge } from "./EditionMeta";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand-search">
          <button className="icon-btn" title="Buscar" type="button">
            <Search size={13} aria-hidden />
            <span className="sr-only">Buscar</span>
          </button>
          <span className="topbar-meta">
            Edição <EditionBadge />
          </span>
        </div>
        <Link href="/" className="brand-mark">
          <div className="brand-title">Regimes Especiais</div>
          <div className="brand-sub">Monitor Global Fiscal &amp; Imigratório</div>
        </Link>
        <div className="topbar-actions">
          <span className="topbar-meta">
            {COUNTRY_ORDER.length} Jurisdições · <span>{ALERTS.length} Alertas</span>
          </span>
          <button className="menu-btn" title="Menu" type="button">
            <span aria-hidden />
            <span aria-hidden />
            <span aria-hidden />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
