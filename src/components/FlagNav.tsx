"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass } from "lucide-react";
import { COUNTRIES, COUNTRY_ORDER } from "@/data/countries";
import FlagIcon from "./FlagIcon";

export default function FlagNav() {
  const pathname = usePathname();
  const activeId = pathname?.startsWith("/pais/")
    ? pathname.split("/")[2]
    : null;
  const isOverview = !activeId;

  return (
    <nav className="flagnav" aria-label="Navegação por jurisdição">
      <div className="flagnav-inner">
        <Link
          href="/"
          className={`flag-tab home${isOverview ? " active" : ""}`}
          aria-current={isOverview ? "page" : undefined}
        >
          <span className="flag-icon-slot">
            <Compass size={18} aria-hidden />
          </span>
          <span className="label">
            Visão
            <br />
            Geral
          </span>
        </Link>
        {COUNTRY_ORDER.map((id) => {
          const country = COUNTRIES[id];
          const active = activeId === id;
          return (
            <Link
              key={id}
              href={`/pais/${id}`}
              className={`flag-tab${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {country.alert && <span className="alert-dot" aria-hidden />}
              <FlagIcon
                code={country.flagCode}
                label={country.name}
                width={30}
                height={22}
              />
              <span className="label">{country.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
