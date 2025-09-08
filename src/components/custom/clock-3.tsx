import { useEffect, useMemo, useState } from "react";
import "./clock-3.css";

const DIGIT_TABLE: boolean[][] = [
   [true,  true,  true,  true,  true,  true,  false],
   [false, true,  true,  false, false, false, false],
   [true,  true,  false, true,  true,  false, true ],
   [true,  true,  true,  true,  false, false, true ],
   [false, true,  true,  false, false, true,  true ],
   [true,  false, true,  true,  false, true,  true ],
   [true,  false, true,  true,  true,  true,  true ],
   [true,  true,  true,  false, false, false, false],
   [true,  true,  true,  true,  true,  true,  true ],
   [true,  true,  true,  true,  false, true,  true ],
];

type DigitProps = { value: number };

function SevenSegDigit({ value }: DigitProps) {
  const seg = DIGIT_TABLE[value];

  return (
    <svg
      className="digit-svg"
      viewBox="0 0 100 180"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`digit ${value}`}
    >
      <defs>
        <linearGradient id="gradOn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--segment-on)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--segment-on)" stopOpacity="0.85" />
        </linearGradient>

        <filter id="outerGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="blur1" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="outerGlowStrong" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.6" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="outerGlowSmall" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur3" />
          <feMerge>
            <feMergeNode in="blur3" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect className={`seg ${seg[0] ? "on" : ""}`} x="15" y="8" width="70" height="12" rx="6" ry="6" />
      <rect className={`seg ${seg[1] ? "on" : ""}`} x="83" y="20" width="12" height="65" rx="6" ry="6" />
      <rect className={`seg ${seg[2] ? "on" : ""}`} x="83" y="95" width="12" height="65" rx="6" ry="6" />
      <rect className={`seg ${seg[3] ? "on" : ""}`} x="15" y="168" width="70" height="12" rx="6" ry="6" />
      <rect className={`seg ${seg[4] ? "on" : ""}`} x="5" y="95" width="12" height="65" rx="6" ry="6" />
      <rect className={`seg ${seg[5] ? "on" : ""}`} x="5" y="20" width="12" height="65" rx="6" ry="6" />
      <rect className={`seg ${seg[6] ? "on" : ""}`} x="15" y="90" width="70" height="12" rx="6" ry="6" />
    </svg>
  );
}

function Colon({ on }: { on: boolean }) {
  return (
    <svg
      className="colon-svg"
      viewBox="0 0 20 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="outerGlowSmall" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur3" />
          <feMerge>
            <feMergeNode in="blur3" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle className={`colon-dot ${on ? "" : "dim"}`} cx="10" cy="40" r="4.2" />
      <circle className={`colon-dot ${on ? "" : "dim"}`} cx="10" cy="80" r="4.2" />
    </svg>
  );
}

function split2(n: number): [number, number] {
  return [Math.floor(n / 10), n % 10];
}


export default function Clock3() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { hT, hO, mT, mO, sT, sO } = useMemo(() => {
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const [hT, hO] = split2(h);
    const [mT, mO] = split2(m);
    const [sT, sO] = split2(s);
    return { hT, hO, mT, mO, sT, sO };
  }, [now]);

  const colonOn = (now.getSeconds() % 2) === 0;

  return (
    <div className="clock-3-wrap">
      <div className="clock-3">
        <div className="clock-3-inner" role="timer" aria-live="polite">
          <SevenSegDigit value={hT} />
          <SevenSegDigit value={hO} />
          <Colon on={colonOn} />
          <SevenSegDigit value={mT} />
          <SevenSegDigit value={mO} />
          <Colon on={colonOn} />
          <SevenSegDigit value={sT} />
          <SevenSegDigit value={sO} />
        </div>
      </div>
    </div>
  );
}
