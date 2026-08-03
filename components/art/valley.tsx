import { cx } from "../ui/primitives";

/* ------------------------------------------------------------------
   Deterministic topographic contours. Sine-perturbed polar curves —
   same output on the server and the client, so no hydration drift.
------------------------------------------------------------------- */

function contour(rx: number, ry: number, phase: number, wobble: number) {
  const steps = 96;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const w =
      1 +
      wobble *
        (Math.sin(t * 3 + phase) * 0.55 +
          Math.sin(t * 5 - phase * 1.7) * 0.28 +
          Math.sin(t * 2 + phase * 0.5) * 0.42);
    const x = 300 + Math.cos(t) * rx * w;
    const y = 210 + Math.sin(t) * ry * w * 0.62;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

const RINGS = Array.from({ length: 15 }, (_, i) => ({
  d: contour(38 + i * 19, 38 + i * 19, i * 0.62, 0.1 + i * 0.007),
  o: 0.5 - i * 0.026,
}));

export function ContourField({
  className,
  tone = "ink",
  uid = "cf",
}: {
  className?: string;
  tone?: "ink" | "light";
  uid?: string;
}) {
  const stroke = tone === "ink" ? "#100e0c" : "#ffffff";
  return (
    <svg
      viewBox="0 0 600 420"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <radialGradient id={`${uid}-fade`} cx="50%" cy="50%" r="52%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="62%" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={`${uid}-mask`}>
          <rect width="600" height="420" fill={`url(#${uid}-fade)`} />
        </mask>
      </defs>
      <g mask={`url(#${uid}-mask)`}>
        {RINGS.map((r, i) => (
          <path
            key={i}
            d={r.d}
            stroke={stroke}
            strokeOpacity={Math.max(0.04, r.o * 0.34)}
            strokeWidth={i === 0 ? 1.4 : 0.85}
          />
        ))}
        {/* the river */}
        <path
          d="M40 300c70-18 108 22 168 10s84-70 150-84 130 6 200-24"
          stroke="#E2622B"
          strokeOpacity="0.5"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M40 316c70-18 108 22 168 10s84-70 150-84 130 6 200-24"
          stroke="#E2622B"
          strokeOpacity="0.22"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------
   Small data marks used inside the "instrumented" cards
------------------------------------------------------------------- */

export function Sparkline({
  points,
  className,
  stroke = "#E2622B",
  uid = "sl",
}: {
  points: number[];
  className?: string;
  stroke?: string;
  uid?: string;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const step = 100 / (points.length - 1);
  const coords = points.map(
    (p, i) => [i * step, 34 - ((p - min) / span) * 30] as const,
  );
  const line = coords.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join("");
  const area = `${line}L100,40L0,40Z`;
  const last = coords[coords.length - 1];

  return (
    <svg viewBox="0 0 100 40" fill="none" aria-hidden className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${uid}-g)`} />
      <path d={line} stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx={last[0]} cy={last[1]} r="2" fill={stroke} />
    </svg>
  );
}

export function RangeBar({
  value,
  low,
  high,
  className,
}: {
  value: number;
  low: string;
  high: string;
  className?: string;
}) {
  return (
    <div className={cx("w-full", className)}>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-line">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-river-deep via-clay-soft to-clay"
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="micro mt-2 flex justify-between text-faint">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Abstract system diagrams used inside the comparison slider
------------------------------------------------------------------- */

export function TangledStack({ className }: { className?: string }) {
  const nodes = [
    [60, 60],
    [190, 44],
    [312, 74],
    [46, 156],
    [168, 150],
    [300, 168],
    [96, 246],
    [232, 250],
  ] as const;
  const edges = [
    [0, 1],
    [0, 4],
    [1, 5],
    [1, 3],
    [2, 4],
    [3, 5],
    [3, 7],
    [4, 6],
    [4, 7],
    [5, 6],
    [6, 7],
    [0, 7],
    [2, 6],
  ] as const;

  return (
    <div className={cx("relative size-full bg-[#efe9e2]", className)}>
      <svg viewBox="0 0 360 300" fill="none" aria-hidden className="size-full">
        {edges.map(([a, b], i) => (
          <path
            key={i}
            d={`M${nodes[a][0]},${nodes[a][1]}L${nodes[b][0]},${nodes[b][1]}`}
            stroke="#100e0c"
            strokeOpacity="0.24"
            strokeWidth="1"
            strokeDasharray={i % 3 === 0 ? "3 3" : undefined}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <rect
              x={x - 17}
              y={y - 11}
              width="34"
              height="22"
              rx="5"
              fill="#fff"
              stroke="#100e0c"
              strokeOpacity="0.14"
            />
            <rect x={x - 10} y={y - 3} width="20" height="2" rx="1" fill="#100e0c" fillOpacity="0.2" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function OrderedStack({ className }: { className?: string }) {
  const lanes = [
    { y: 62, label: "Source systems", n: 4 },
    { y: 130, label: "Integration layer", n: 1 },
    { y: 198, label: "Consumers", n: 3 },
  ];
  return (
    <div className={cx("relative size-full bg-[#fdf5ef]", className)}>
      <svg viewBox="0 0 360 300" fill="none" aria-hidden className="size-full">
        <path d="M180 78v34M180 148v34" stroke="#E2622B" strokeOpacity="0.5" strokeWidth="1.4" />
        {lanes.map((lane) =>
          Array.from({ length: lane.n }, (_, i) => {
            const w = lane.n === 1 ? 220 : 74;
            const gap = lane.n === 1 ? 0 : 12;
            const total = lane.n * w + (lane.n - 1) * gap;
            const x = 180 - total / 2 + i * (w + gap);
            return (
              <g key={`${lane.y}-${i}`}>
                <rect
                  x={x}
                  y={lane.y - 16}
                  width={w}
                  height="32"
                  rx="9"
                  fill={lane.n === 1 ? "#E2622B" : "#fff"}
                  stroke={lane.n === 1 ? "none" : "#100e0c"}
                  strokeOpacity="0.12"
                />
                <rect
                  x={x + 14}
                  y={lane.y - 2}
                  width={lane.n === 1 ? 60 : 34}
                  height="3"
                  rx="1.5"
                  fill={lane.n === 1 ? "#fff" : "#100e0c"}
                  fillOpacity={lane.n === 1 ? 0.7 : 0.22}
                />
              </g>
            );
          }),
        )}
        <g className="micro">
          {lanes.map((lane) => (
            <text
              key={lane.label}
              x="24"
              y={lane.y - 28}
              fill="#100e0c"
              fillOpacity="0.38"
              fontSize="8"
              letterSpacing="1.2"
              style={{ textTransform: "uppercase" }}
            >
              {lane.label}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
