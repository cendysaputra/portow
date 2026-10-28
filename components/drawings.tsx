type DrawingProps = {
  className?: string;
  title?: string;
};

/** Original line drawing of a hand with a pen. Not traced from the reference. */
export function DrawingHand({ className }: DrawingProps) {
  return (
    <svg className={className} viewBox="0 0 360 220" fill="none" aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 112h70" />
        <path d="M76 98h48c6 0 10 4 10 10v8c0 6-4 10-10 10H76z" />
        <path d="M88 98v28M104 98v28M120 98v28" />
        <path d="M134 108c12-20 34-24 46-8 6 8 4 20-4 26" />
        <path d="M166 118c16-8 36 0 42 16 4 10-2 20-14 22" />
        <path d="M186 136c14 4 26 16 24 30" />
        <path d="M148 132c-6 18-2 40 16 52 18 12 42 10 60-2 18-12 26-34 18-52" />
        <path d="M178 176c20 22 54 48 104 58" />
        <path d="M214 166c24 26 62 44 112 46" />
      </g>
    </svg>
  );
}

/** Original standing line figure. A simple body, not the reference character. */
export function LineFigure({ className }: DrawingProps) {
  return (
    <svg className={className} viewBox="0 0 180 210" fill="none" aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="90" cy="36" r="18" />
        <path d="M90 54c-22 36-46 78-50 132" />
        <path d="M90 54c24 38 48 80 52 132" />
        <path d="M74 88c-28 8-48-6-56-28" />
        <path d="M108 92c26 10 44 2 54-18" />
        <path d="M58 186H36M124 188h24" />
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
