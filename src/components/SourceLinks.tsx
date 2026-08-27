import { SquareArrowOutUpRight } from "lucide-react";
import type { Source } from "@/data/types";

export default function SourceLinks({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <div className="src-row">
      {sources.map((s) => (
        <a
          key={s.u}
          className="src-link"
          href={s.u}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SquareArrowOutUpRight size={9} aria-hidden /> {s.t}
        </a>
      ))}
    </div>
  );
}
