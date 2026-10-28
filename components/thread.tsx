type ThreadProps = {
  progress: number;
};

const LENGTH = 1680;

/**
 * An original baseline that draws itself as the story scrolls.
 * It is decorative geometry, not a portrait or signature.
 */
export function Thread({ progress }: ThreadProps) {
  const drawn = Math.min(1, Math.max(0, progress));
  const offset = LENGTH * (1 - drawn);

  return (
    <svg
      className="thread"
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <path
        className="thread-path"
        d="M72 340 H260 C330 340 348 214 452 214 H610 C692 214 724 392 836 392 H1036 C1124 392 1148 168 1264 196 H1368"
        style={{
          strokeDasharray: LENGTH,
          strokeDashoffset: offset,
        }}
      />
      <circle className="thread-node" cx="452" cy="214" r="4.5" opacity={drawn > 0.22 ? 1 : 0} />
      <circle className="thread-node" cx="836" cy="392" r="4.5" opacity={drawn > 0.48 ? 1 : 0} />
      <circle className="thread-node" cx="1264" cy="196" r="4.5" opacity={drawn > 0.74 ? 1 : 0} />
    </svg>
  );
}
