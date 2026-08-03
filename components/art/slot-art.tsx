import { cx } from "../ui/primitives";

/**
 * Generated artwork for image slots that have no photograph yet.
 *
 * This is not a "missing image" box — it is a finished abstract composition in
 * the brand palette, deterministic per slot so it never shifts between renders
 * and never repeats twice in a row down a page. When a real photo lands in
 * public/img/ it simply takes over.
 */

/** FNV-1a — spreads neighbouring slot names apart, so cards sitting side by
 *  side never draw the same composition. */
function seedOf(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

// All four stay inside the terracotta family. Cool tones are reserved for data
// marks — under a scrim they turn grey, and grey reads as a broken image.
const LIGHT_WASHES = [
  "linear-gradient(158deg,#FDF1E9 0%,#F0C4A5 42%,#E2622B 100%)",
  "linear-gradient(196deg,#F6E8DC 0%,#E0A87C 45%,#A8501F 100%)",
  "linear-gradient(152deg,#FAF0E6 0%,#E8B08A 44%,#C25A22 100%)",
  "linear-gradient(168deg,#F7DCCB 0%,#D97F4C 50%,#8E3612 100%)",
];

const DARK_WASHES = [
  "linear-gradient(156deg,#4A3527 0%,#33241A 48%,#1A1109 100%)",
  "linear-gradient(190deg,#3B2A1F 0%,#241811 52%,#160E07 100%)",
];

export function SlotArt({
  slot,
  tone = "clay",
  className,
}: {
  slot: string;
  tone?: "clay" | "kiln";
  className?: string;
}) {
  const seed = seedOf(slot);
  const dark = tone === "kiln";
  // wash and composition are drawn from different bits, so they vary independently
  const wash = dark
    ? DARK_WASHES[(seed >>> 8) % DARK_WASHES.length]
    : LIGHT_WASHES[(seed >>> 8) % LIGHT_WASHES.length];
  const variant = seed % 4;
  const stroke = dark ? "#ffffff" : "#100e0c";
  const uid = `sa-${seed.toString(36)}`;

  return (
    <div
      className={cx("absolute inset-0 overflow-hidden grain", className)}
      style={{ background: wash }}
    >
      <svg
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
        className="size-full"
      >
        <defs>
          <radialGradient id={`${uid}-fade`} cx="50%" cy="46%" r="62%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="66%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id={`${uid}-m`}>
            <rect width="400" height="300" fill={`url(#${uid}-fade)`} />
          </mask>
          <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={dark ? "#E2622B" : "#ffffff"} stopOpacity={dark ? "0.5" : "0.75"} />
            <stop offset="100%" stopColor={dark ? "#E2622B" : "#ffffff"} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* soft light source, placed by seed */}
        <ellipse
          cx={90 + (seed % 5) * 55}
          cy={60 + ((seed >> 3) % 4) * 50}
          rx="190"
          ry="150"
          fill={`url(#${uid}-glow)`}
        />

        <g mask={`url(#${uid}-m)`}>
          {variant === 0 && <Contours stroke={stroke} seed={seed} />}
          {variant === 1 && <Strata stroke={stroke} seed={seed} />}
          {variant === 2 && <Radial stroke={stroke} seed={seed} />}
          {variant === 3 && <Mesh stroke={stroke} seed={seed} />}
        </g>
      </svg>
    </div>
  );
}

/* ── variant 0 · topographic contours ───────────────────────────── */

function Contours({ stroke, seed }: { stroke: string; seed: number }) {
  const phase = (seed % 7) * 0.4;
  const rings = Array.from({ length: 13 }, (_, i) => {
    const r = 26 + i * 17;
    const pts: string[] = [];
    for (let k = 0; k <= 84; k++) {
      const t = (k / 84) * Math.PI * 2;
      const w =
        1 +
        (0.1 + i * 0.008) *
          (Math.sin(t * 3 + phase + i * 0.5) * 0.6 +
            Math.sin(t * 5 - phase * 1.6) * 0.3 +
            Math.sin(t * 2 + i * 0.3) * 0.4);
      pts.push(
        `${(200 + Math.cos(t) * r * w).toFixed(1)},${(152 + Math.sin(t) * r * w * 0.66).toFixed(1)}`,
      );
    }
    return `M${pts.join("L")}Z`;
  });

  return (
    <g>
      {rings.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={stroke}
          strokeOpacity={Math.max(0.05, 0.2 - i * 0.011)}
          strokeWidth={i === 0 ? 1.3 : 0.8}
        />
      ))}
      <path
        d="M-10 210c50-14 76 16 118 8s60-50 106-60 92 4 142-18"
        stroke={stroke}
        strokeOpacity="0.22"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  );
}

/* ── variant 1 · sediment strata ────────────────────────────────── */

function Strata({ stroke, seed }: { stroke: string; seed: number }) {
  const off = (seed % 9) * 6;
  return (
    <g>
      {Array.from({ length: 11 }, (_, i) => {
        const y = 18 + i * 26;
        const a = 10 + ((i + seed) % 5) * 5;
        return (
          <path
            key={i}
            d={`M-10 ${y + off / 3}C 90 ${y - a}, 180 ${y + a}, 280 ${y - a / 2} S 380 ${y + a / 2}, 410 ${y}`}
            stroke={stroke}
            strokeOpacity={i % 3 === 0 ? 0.22 : 0.11}
            strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
            fill="none"
          />
        );
      })}
    </g>
  );
}

/* ── variant 2 · radial seal ────────────────────────────────────── */

function Radial({ stroke, seed }: { stroke: string; seed: number }) {
  const spokes = 24;
  const cx = 200;
  const cy = 150;
  return (
    <g>
      {Array.from({ length: 6 }, (_, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={30 + i * 26}
          stroke={stroke}
          strokeOpacity={0.2 - i * 0.022}
          strokeWidth={i === 2 ? 1.3 : 0.8}
        />
      ))}
      {Array.from({ length: spokes }, (_, i) => {
        const t = (i / spokes) * Math.PI * 2 + (seed % 12) * 0.1;
        const r0 = 34;
        const r1 = i % 4 === 0 ? 168 : 118;
        return (
          <path
            key={i}
            d={`M${cx + Math.cos(t) * r0} ${cy + Math.sin(t) * r0}L${cx + Math.cos(t) * r1} ${cy + Math.sin(t) * r1}`}
            stroke={stroke}
            strokeOpacity={i % 4 === 0 ? 0.18 : 0.09}
            strokeWidth="0.8"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="7" stroke={stroke} strokeOpacity="0.3" strokeWidth="1.2" />
    </g>
  );
}

/* ── variant 3 · node mesh ──────────────────────────────────────── */

function Mesh({ stroke, seed }: { stroke: string; seed: number }) {
  const cols = 7;
  const rows = 5;
  const nodes: [number, number][] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const jx = Math.sin((r * cols + c + seed) * 1.7) * 12;
      const jy = Math.cos((r * cols + c + seed) * 2.3) * 10;
      nodes.push([28 + c * 57 + jx, 30 + r * 60 + jy]);
    }
  }
  return (
    <g>
      {nodes.map(([x, y], i) => {
        const right = (i % cols) < cols - 1 ? nodes[i + 1] : null;
        const down = i + cols < nodes.length ? nodes[i + cols] : null;
        return (
          <g key={i}>
            {right ? (
              <path
                d={`M${x} ${y}L${right[0]} ${right[1]}`}
                stroke={stroke}
                strokeOpacity="0.13"
                strokeWidth="0.8"
              />
            ) : null}
            {down ? (
              <path
                d={`M${x} ${y}L${down[0]} ${down[1]}`}
                stroke={stroke}
                strokeOpacity="0.09"
                strokeWidth="0.8"
              />
            ) : null}
            <circle
              cx={x}
              cy={y}
              r={(i * 7 + seed) % 11 === 0 ? 3.4 : 1.5}
              fill={stroke}
              fillOpacity={(i * 7 + seed) % 11 === 0 ? 0.3 : 0.16}
            />
          </g>
        );
      })}
    </g>
  );
}
