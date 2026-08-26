export interface HeroStat {
  value: string;
  label: string;
  accent: boolean;
}

export const HERO_EYEBROW = "Maio 2026 · Briefing executivo";

export const HERO_SUBTITLE =
  "Monitor analítico das principais janelas de planejamento patrimonial e mobilidade global. Inclui mudanças de alto impacto entre 2024–2026: abolição do Non-Dom britânico, encerramento do Golden Visa espanhol, reajuste da Flat Tax italiana e lançamento do Trump Gold Card americano.";

export const HERO_STATS: HeroStat[] = [
  { value: "10", label: "Jurisdições", accent: false },
  { value: "3", label: "Extinções", accent: true },
  { value: "4", label: "Alterações", accent: true },
  { value: "2", label: "Novos regimes", accent: true },
  { value: "4", label: "Alertas ativos", accent: true },
];
