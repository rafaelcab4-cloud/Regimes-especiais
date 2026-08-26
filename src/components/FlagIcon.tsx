interface FlagIconProps {
  code: string;
  label: string;
  width: number;
  height: number;
  className?: string;
}

export default function FlagIcon({
  code,
  label,
  width,
  height,
  className,
}: FlagIconProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`flag-icon fi fi-${code}${className ? ` ${className}` : ""}`}
      style={{ width, height }}
    />
  );
}
