type IconProps = {
  className?: string;
};

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className ?? "line-icon"} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}

export function IconArrowDown({ className }: IconProps) {
  return (
    <svg className={className ?? "line-icon"} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg className={className ?? "line-icon"} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconPlus({ className }: IconProps) {
  return (
    <svg className={className ?? "line-icon"} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className ?? "line-icon"} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
