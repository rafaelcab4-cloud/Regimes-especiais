"use client";

import { currentMonthYear } from "@/lib/edition";

/**
 * Computed on every render (server at build time, client on hydration) so the
 * edition label always reflects the visitor's current date rather than the
 * date the static page was last generated. suppressHydrationWarning avoids a
 * false-positive mismatch warning for that intentional server/client drift.
 */
export function EditionBadge() {
  const { month, year } = currentMonthYear();
  return <span suppressHydrationWarning>{`${month} · ${year}`}</span>;
}

export function HeroEyebrow() {
  const { month, year } = currentMonthYear();
  return <span suppressHydrationWarning>{`${month} ${year} · Briefing executivo`}</span>;
}
