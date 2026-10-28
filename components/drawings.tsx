type DrawingProps = {
  className?: string;
  title?: string;
};

/** Original line drawing of a hand with a pen. Not traced from the reference. */
export function DrawingHand({ className }: DrawingProps) {
  return (
    <svg className={className} viewBox="0 0 300 170" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 78h62" />
        <rect x="66" y="64" width="46" height="26" rx="5" />
        <path d="M78 64v26M92 64v26M104 64v26" />
        <path d="M112 72c18-16 42-14 54 2 6 8 4 16-2 20" />
        <path d="M128 90c22-2 40 10 44 24" />
        <path d="M126 104c20 6 34 20 30 34" />
        <path d="M118 84c-2 22 6 46 28 62 22 16 52 14 74-2" />
        <path d="M160 140c16 14 46 28 92 30" />
        <path d="M196 128c18 16 48 28 90 30" />
      </g>
    </svg>
  );
}

/** Original standing line figure. A simple cloak, not the reference character. */
export function LineFigure({ className }: DrawingProps) {
  return (
    <svg className={className} viewBox="0 0 180 210" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="90" cy="34" r="16" />
        <path d="M90 50c-36 28-52 78-46 132" />
        <path d="M90 50c36 28 52 78 46 132" />
        <path d="M70 86c-26 6-40-8-46-26" />
        <path d="M112 88c24 8 40-2 48-22" />
      </g>
    </svg>
  );
}

/** Original interface wireframe used as a project stand-in. */
export function DeviceFrame({ className, title = "Project" }: DrawingProps) {
  return (
    <svg className={className} viewBox="0 0 520 320" fill="none" aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="18" y="18" width="484" height="284" rx="14" />
        <path d="M18 68h484" />
        <circle cx="44" cy="43" r="4" />
        <circle cx="62" cy="43" r="4" />
        <circle cx="80" cy="43" r="4" />
        <text
          x="104"
          y="50"
          fill="currentColor"
          stroke="none"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="18"
        >
          {title}
        </text>
        <rect x="40" y="92" width="120" height="180" rx="6" />
        <path d="M56 118h88M56 138h72M56 158h88" />
        <rect x="180" y="92" width="196" height="112" rx="6" />
        <path d="M198 118h160M198 138h132M198 168h40v20h-40z" />
        <rect x="394" y="92" width="84" height="180" rx="6" />
        <path d="M408 116h56M408 136h40M408 156h56" />
      </g>
    </svg>
  );
}

export function PhoneFrame({ className, title = "Project" }: DrawingProps) {
  return (
    <svg className={className} viewBox="0 0 240 420" fill="none" aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="28" y="16" width="184" height="388" rx="28" />
        <path d="M96 36h48" />
        <text
          x="48"
          y="86"
          fill="currentColor"
          stroke="none"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="18"
        >
          {title}
        </text>
        <path d="M48 104h144" />
        <rect x="48" y="124" width="144" height="92" rx="8" />
        <path d="M64 150h96M64 170h72" />
        <rect x="48" y="232" width="144" height="64" rx="8" />
        <path d="M64 256h112M64 274h80" />
        <rect x="48" y="312" width="144" height="48" rx="8" />
      </g>
    </svg>
  );
}
