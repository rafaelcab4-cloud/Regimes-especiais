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

/** Etapa numerada de um processo de adesão ou candidatura. */
export interface ProcessStep {
  /** Título curto da etapa. */
  step: string;
  /** HTML inline permitido; "\n" representa quebra de linha. */
  detail: string;
  /** Prazo típico desta etapa, quando conhecido. */
  timing?: string;
}

/** Linha da tabela de custos e taxas. */
export interface CostItem {
  item: string;
  value: string;
  note?: string;
}

/** Bloco temático de aprofundamento dentro de um regime. */
export interface DetailSection {
  title: string;
  /** HTML inline permitido (<strong>, <em>); "\n" representa quebra de linha. */
  body: string;
}

export interface Regime {
  name: string;
  status: Status;
  /** Norma que institui o regime, citada de forma completa. */
  legalBasis?: string;
  /** HTML inline permitido (<strong>, <em>); "\n" representa quebra de linha. */
  desc: string;
  kv: KeyValue[];
  /** Checklist de critérios de elegibilidade. */
  requirements?: string[];
  /** Passo a passo do processo de adesão/candidatura. */
  process?: ProcessStep[];
  /** Custos, taxas e valores exigidos. */
  costs?: CostItem[];
  /** Blocos de aprofundamento (tributação detalhada, família, saída do regime...). */
  sections?: DetailSection[];
  /** Interação específica com a legislação brasileira. */
  brazilNote?: string;
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
