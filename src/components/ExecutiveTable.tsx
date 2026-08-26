"use client";

import type { KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { SUMMARY_TABLE } from "@/data/summaryTable";
import { COUNTRIES } from "@/data/countries";
import type { SummaryRow } from "@/data/types";
import FlagIcon from "./FlagIcon";
import { StatusPill } from "./StatusTag";

function TableRow({ row }: { row: SummaryRow }) {
  const router = useRouter();
  const country = COUNTRIES[row.id];
  const href = `/pais/${row.id}`;

  function open() {
    router.push(href);
  }

  function onKeyDown(event: KeyboardEvent<HTMLTableRowElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  }

  return (
    <tr
      role="link"
      tabIndex={0}
      aria-label={`Abrir dossiê de ${country.name}`}
      onClick={open}
      onKeyDown={onKeyDown}
    >
      <td>
        <FlagIcon
          code={country.flagCode}
          label={country.name}
          width={22}
          height={16}
          className="t-flag"
        />
        <span className="t-name">{country.name}</span>
      </td>
      <td>{row.fiscal}</td>
      <td>
        <StatusPill status={row.fs} />
      </td>
      <td>{row.visa}</td>
      <td>
        <StatusPill status={row.vs} />
      </td>
    </tr>
  );
}

export default function ExecutiveTable() {
  return (
    <div className="section">
      <div className="section-head">
        <div>
          <div className="section-num">— 01</div>
          <div className="section-title">Tabela executiva comparativa</div>
        </div>
        <div className="section-meta">Clique em uma linha para abrir o dossiê</div>
      </div>
      <div className="tablewrap">
        <table>
          <thead>
            <tr>
              <th>País</th>
              <th>Regime fiscal principal</th>
              <th>Status fiscal</th>
              <th>Programa imigratório</th>
              <th>Status visto</th>
            </tr>
          </thead>
          <tbody>
            {SUMMARY_TABLE.map((row) => (
              <TableRow row={row} key={row.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
