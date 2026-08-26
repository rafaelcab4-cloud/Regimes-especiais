export type Status = "ok" | "changed" | "ext" | "new" | "risk";

export type Region = "Europa" | "Américas" | "Oriente Médio" | "Ásia";

export type CountryId =
  | "ch"
  | "it"
  | "pt"
  | "es"
  | "gr"
  | "gb"
  | "ae"
  | "us"
  | "uy"
  | "hk";

export interface Source {
  t: string;
  u: string;
}

export interface KeyValue {
  l: string;
  v: string;
}

export interface Regime {
  name: string;
  status: Status;
  /** HTML inline permitido (<strong>, <em>); "\n" representa quebra de linha. */
  desc: string;
  kv: KeyValue[];
  impact?: string;
  warning?: string;
  sources: Source[];
}

export interface Country {
  id: CountryId;
  /** Código ISO 3166-1 alpha-2 em minúsculas, usado pela biblioteca flag-icons. */
  flagCode: string;
  name: string;
  region: Region;
  alert: boolean;
  sumFiscal: string;
  sumFS: Status;
  sumVisa: string;
  sumVS: Status;
  fiscal: Regime[];
  visa: Regime[];
}

export type AlertTone = "red" | "amber" | "blue";

export interface Alert {
  countryId: CountryId;
  tone: AlertTone;
  tag: string;
  title: string;
  body: string;
}

export interface SummaryRow {
  id: CountryId;
  fiscal: string;
  fs: Status;
  visa: string;
  vs: Status;
}
