import type { Status } from "./types";

export const STATUS_LABEL: Record<Status, string> = {
  ok: "Mantido",
  changed: "Alterado",
  ext: "Extinto",
  new: "Novo",
  risk: "Atenção",
};

export const STATUS_BADGE_CLASS: Record<Status, string> = {
  ok: "s-ok",
  changed: "s-changed",
  ext: "s-ext",
  new: "s-new",
  risk: "s-risk",
};

export const STATUS_PILL_CLASS: Record<Status, string> = {
  ok: "p-ok",
  changed: "p-chg",
  ext: "p-ext",
  new: "p-new",
  risk: "p-risk",
};
