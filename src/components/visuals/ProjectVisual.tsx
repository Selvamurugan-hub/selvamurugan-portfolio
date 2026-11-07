import { useId, useMemo } from "react";
import type { VisualKind } from "@/types";

/**
 * Abstract, dependency-free SVG artwork — one motif per project.
 * These are illustrations, not screenshots: swap in real screenshots later
 * by adding an `image` field if you prefer.
 */

const VIOLET = "#8b5cf6";
const BLUE = "#38bdf8";

function Frame({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14131f" />
          <stop offset="1" stopColor="#0b0b12" />
        </linearGradient>
        <linearGradient id={`${id}-acc`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={VIOLET} />
          <stop offset="1" stopColor={BLUE} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.75" cy="0.2" r="0.8">
          <stop offset="0" stopColor={VIOLET} stopOpacity="0.35" />
          <stop offset="1" stopColor={VIOLET} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="220" fill={`url(#${id}-bg)`} />
      <rect width="400" height="220" fill={`url(#${id}-glow)`} />
      {children}
    </svg>
  );
}

/** Deterministic pseudo-random so SSR/StrictMode renders never differ. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function Signal({ id }: { id: string }) {
  const cells = useMemo(() => {
    const rand = seeded(7);
    const out: { x: number; y: number; o: number; hot: boolean }[] = [];
    for (let c = 0; c < 32; c++) {
      for (let r = 0; r < 7; r++) {
        const band = Math.exp(-Math.pow((r - 3 - Math.sin(c / 4) * 1.4) / 1.6, 2));
        const hot = c >= 21 && c <= 24 && r >= 1 && r <= 2;
        out.push({ x: 24 + c * 11, y: 112 + r * 12, o: hot ? 1 : 0.08 + band * 0.55 * (0.6 + rand() * 0.4), hot });
      }
    }
    return out;
  }, []);

  const wave = useMemo(() => {
    let d = "M24 62";
    for (let x = 0; x <= 352; x += 4) {
      const y = 62 + Math.sin(x / 11) * 14 * Math.sin(x / 70 + 0.6) + Math.sin(x / 3.1) * 3;
      d += ` L${24 + x} ${y.toFixed(1)}`;
    }
    return d;
  }, []);

  return (
    <Frame id={id}>
      <path d={wave} fill="none" stroke={`url(#${id}-acc)`} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="24" y1="62" x2="376" y2="62" stroke="#fff" strokeOpacity="0.08" strokeDasharray="3 5" />
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="9" height="10" rx="2" fill={c.hot ? BLUE : VIOLET} fillOpacity={c.o} />
      ))}
      <rect x="260" y="120" width="52" height="30" rx="5" fill="none" stroke={BLUE} strokeWidth="1.2" strokeDasharray="4 3" />
    </Frame>
  );
}

function Satellite({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <circle cx="130" cy="290" r="190" fill="#0f1626" stroke={BLUE} strokeOpacity="0.35" />
      <circle cx="130" cy="290" r="150" fill="none" stroke="#fff" strokeOpacity="0.06" />
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M${-30 + i * 42} 220 Q130 ${100 + i * 4} ${290 + i * 10} 220`} fill="none" stroke="#fff" strokeOpacity="0.05" />
      ))}
      <ellipse cx="270" cy="95" rx="120" ry="34" transform="rotate(-18 270 95)" fill="none" stroke={`url(#${id}-acc)`} strokeWidth="1.2" strokeDasharray="2 6" />
      <g transform="translate(345 66) rotate(-18)">
        <rect x="-9" y="-5" width="18" height="10" rx="2" fill="#e4e4e7" />
        <rect x="-26" y="-3" width="14" height="6" fill={BLUE} fillOpacity="0.8" />
        <rect x="12" y="-3" width="14" height="6" fill={BLUE} fillOpacity="0.8" />
      </g>
      <path d="M345 70 L150 168" stroke={BLUE} strokeOpacity="0.35" strokeDasharray="3 4" />
      <g stroke={VIOLET} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M112 142 v-12 h12" /><path d="M176 142 v-12 h-12" />
        <path d="M112 186 v12 h12" /><path d="M176 186 v12 h-12" />
      </g>
      <rect x="120" y="150" width="48" height="28" rx="3" fill={VIOLET} fillOpacity="0.18" />
    </Frame>
  );
}

function Cad({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <g stroke="#fff" strokeOpacity="0.06">
        {Array.from({ length: 21 }).map((_, i) => <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="220" />)}
        {Array.from({ length: 12 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} />)}
      </g>
      <g fill="none" stroke={`url(#${id}-acc)`} strokeWidth="2.4" strokeLinejoin="round">
        <path d="M80 40 H320 V180 H80 Z" />
        <path d="M80 110 H200 M200 40 V110 M200 150 V180 M260 110 H320 M260 110 V180" />
      </g>
      <g stroke={BLUE} strokeOpacity="0.8" strokeWidth="1">
        <path d="M80 26 H320 M80 21 v10 M320 21 v10" />
        <path d="M338 40 V180 M333 40 h10 M333 180 h10" />
      </g>
      <rect x="86" y="46" width="108" height="58" fill={VIOLET} fillOpacity="0.1" />
      <path d="M200 125 a14 14 0 0 1 14 -14" fill="none" stroke={BLUE} strokeWidth="1.4" />
      <rect x="196" y="100" width="8" height="8" fill="#0b0b12" stroke="#fff" strokeOpacity="0.8" />
    </Frame>
  );
}

function Review({ id }: { id: string }) {
  const rows = [
    [0, 90, VIOLET], [1, 150, "#71717a"], [1, 110, "#71717a"], [2, 170, BLUE], [2, 70, "#71717a"],
    [1, 130, "#71717a"], [0, 60, VIOLET], [1, 120, "#71717a"],
  ] as const;
  return (
    <Frame id={id}>
      <rect x="40" y="28" width="320" height="164" rx="12" fill="#0b0b12" stroke="#fff" strokeOpacity="0.1" />
      <circle cx="58" cy="44" r="3.5" fill="#f87171" /><circle cx="70" cy="44" r="3.5" fill="#fbbf24" /><circle cx="82" cy="44" r="3.5" fill="#4ade80" />
      {rows.map(([indent, w, color], i) => (
        <rect key={i} x={60 + indent * 16} y={64 + i * 16} width={w} height="6" rx="3" fill={color} fillOpacity={color === "#71717a" ? 0.45 : 0.85} />
      ))}
      <rect x="52" y="112" width="296" height="18" rx="4" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeOpacity="0.5" />
      <g transform="translate(300 134)">
        <rect width="86" height="40" rx="10" fill="#14131f" stroke={`url(#${id}-acc)`} />
        <path d="M14 21 l6 6 l12 -12" fill="none" stroke={BLUE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="42" y="14" width="30" height="5" rx="2.5" fill="#fff" fillOpacity="0.5" />
        <rect x="42" y="24" width="20" height="5" rx="2.5" fill="#fff" fillOpacity="0.25" />
      </g>
    </Frame>
  );
}

function Travel({ id }: { id: string }) {
  const nodes = [[64, 150], [140, 80], [230, 128], [320, 62]] as const;
  return (
    <Frame id={id}>
      <g fill="none" stroke="#fff" strokeOpacity="0.05">
        <path d="M0 40 Q100 70 200 30 T400 60" /><path d="M0 120 Q120 90 220 150 T400 110" /><path d="M0 190 Q140 170 260 200 T400 175" />
      </g>
      <path d="M64 150 C90 70 120 60 140 80 S200 150 230 128 S300 40 320 62" fill="none" stroke={`url(#${id}-acc)`} strokeWidth="2.2" strokeDasharray="1 7" strokeLinecap="round" />
      {nodes.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="16" fill={i % 2 ? BLUE : VIOLET} fillOpacity="0.15" />
          <circle r="7" fill="#0b0b12" stroke={i % 2 ? BLUE : VIOLET} strokeWidth="2" />
          <circle r="2.5" fill="#fff" />
        </g>
      ))}
      <g transform="translate(300 150)">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse key={i} rx="5" ry="15" fill={i % 2 ? BLUE : VIOLET} fillOpacity="0.55" transform={`rotate(${i * 72}) translate(0 -14)`} />
        ))}
        <circle r="4" fill="#fff" fillOpacity="0.85" />
      </g>
    </Frame>
  );
}

function ImageGen({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <rect x="110" y="32" width="180" height="156" rx="14" fill="#0b0b12" stroke="#fff" strokeOpacity="0.12" />
      <clipPath id={`${id}-clip`}><rect x="116" y="38" width="168" height="144" rx="10" /></clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="116" y="38" width="168" height="144" fill="#14131f" />
        <circle cx="170" cy="96" r="52" fill={VIOLET} fillOpacity="0.55" />
        <circle cx="236" cy="128" r="58" fill={BLUE} fillOpacity="0.4" />
        <circle cx="205" cy="70" r="30" fill="#c4b5fd" fillOpacity="0.35" />
        <path d="M116 168 Q170 120 220 150 T284 132 V182 H116 Z" fill="#0b0b12" fillOpacity="0.7" />
      </g>
      <g fill="#fff">
        <path d="M322 54 l4 12 l12 4 l-12 4 l-4 12 l-4 -12 l-12 -4 l12 -4 Z" fillOpacity="0.9" />
        <path d="M78 150 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" fillOpacity="0.55" />
      </g>
      <g fill={BLUE} fillOpacity="0.6">
        {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (
          <rect key={`${r}${c}`} x={310 + c * 9} y={140 + r * 9} width="6" height="6" rx="1.5" fillOpacity={0.2 + ((r + c) % 4) * 0.2} />
        )))}
      </g>
    </Frame>
  );
}

const map = { signal: Signal, satellite: Satellite, cad: Cad, review: Review, travel: Travel, imagegen: ImageGen } as const;

export function ProjectVisual({ kind }: { kind: VisualKind }) {
  const uid = useId().replace(/:/g, "");
  const Visual = map[kind];
  return <Visual id={`pv-${kind}-${uid}`} />;
}
