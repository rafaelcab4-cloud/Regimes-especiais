import type { Status } from "@/data/types";
import { STATUS_BADGE_CLASS, STATUS_LABEL, STATUS_PILL_CLASS } from "@/data/status";

export function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`pill ${STATUS_PILL_CLASS[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`regime-status ${STATUS_BADGE_CLASS[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}
