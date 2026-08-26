const MONTHS_PT = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function currentMonthYear(date: Date = new Date()): { month: string; year: number } {
  return { month: MONTHS_PT[date.getMonth()], year: date.getFullYear() };
}
