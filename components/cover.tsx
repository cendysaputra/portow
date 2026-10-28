import type { ReactNode } from "react";
import type { Motif } from "@/content/site";

type CoverProps = {
  motif: Motif;
  title: string;
};

const paths: Record<Motif, ReactNode> = {
  frames: (
    <>
      <rect x="78" y="70" width="430" height="300" />
      <rect x="250" y="190" width="500" height="310" />
      <path d="M78 220 H508" />
    </>
  ),
  orbit: (
    <>
      <circle cx="430" cy="300" r="150" />
      <circle cx="430" cy="300" r="46" />
      <path d="M120 300 H760" />
      <path d="M430 90 V510" />
    </>
  ),
  dots: (
    <>
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 8 }, (_, column) => (
          <circle
            key={`${row}-${column}`}
            cx={140 + column * 78}
            cy={120 + row * 78}
            r={row === 2 && column === 3 ? 16 : 5}
            fill="#171717"
            stroke="none"
          />
        )),
      )}
    </>
  ),
  band: (
    <>
      <path d="M0 180 H860" />
      <path d="M0 250 H860" />
      <path d="M180 180 V250" />
      <path d="M420 180 V250" />
      <path d="M640 180 V250" />
      <rect x="180" y="320" width="420" height="150" />
    </>
  ),
  bars: (
    <>
      <path d="M150 460 V180" />
      <path d="M280 460 V250" />
      <path d="M410 460 V140" />
      <path d="M540 460 V220" />
      <path d="M670 460 V300" />
      <path d="M110 460 H760" />
    </>
  ),
  bracket: (
    <>
      <path d="M160 120 H300 V420 H160" />
      <path d="M700 120 H560 V420 H700" />
      <path d="M340 270 H520" />
      <circle cx="430" cy="270" r="8" fill="#171717" stroke="none" />
    </>
  ),
};

export function Cover({ motif, title }: CoverProps) {
  return (
    <svg
      className="cover"
      viewBox="0 0 860 600"
      role="img"
      aria-label={`${title} cover placeholder`}
    >
      <rect width="860" height="600" fill="#f4f4f1" />
      <g fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {paths[motif]}
      </g>
    </svg>
  );
}
