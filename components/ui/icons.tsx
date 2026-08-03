import { cx } from "./primitives";

/**
 * One icon family. 24×24 grid, 1.4px stroke, round caps and joins, currentColor,
 * no fills. Every icon depicts its literal subject — nothing decorative.
 * No icon library: 40 marks, drawn here.
 */

function Svg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("size-5 shrink-0", className)}
    >
      {children}
    </svg>
  );
}

export type IconProps = { className?: string };
export type Icon = (p: IconProps) => React.ReactElement;

/* ── practices ──────────────────────────────────────────────────── */

export const HealthCare: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="4" y="4.5" width="16" height="16.5" rx="3" />
    <rect x="9" y="2.4" width="6" height="4.2" rx="1.6" />
    <path d="M7.4 14h2.1l1.4-3.1 2.1 6 1.4-2.9h2.2" />
  </Svg>
);

export const Ledger: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="4.5" y="3" width="15" height="18" rx="2.6" />
    <path d="M8.6 7.4h6.8M8.6 16.6v-3.2M12 16.6v-6.2M15.4 16.6v-4.4" />
  </Svg>
);

export const NodeMesh: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="2.7" />
    <circle cx="5" cy="5.6" r="1.9" />
    <circle cx="19" cy="5.6" r="1.9" />
    <circle cx="5" cy="18.4" r="1.9" />
    <circle cx="19" cy="18.4" r="1.9" />
    <path d="M6.4 7 10 10.1M17.6 7 14 10.1M6.4 17 10 13.9M17.6 17 14 13.9" />
  </Svg>
);

export const CheckGrid: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="3.6" y="3.6" width="7.2" height="7.2" rx="2.2" />
    <rect x="13.2" y="3.6" width="7.2" height="7.2" rx="2.2" />
    <rect x="3.6" y="13.2" width="7.2" height="7.2" rx="2.2" />
    <path d="m13.6 16.9 2 2 4.2-4.4" />
  </Svg>
);

export const Globe: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 3.4c2.4 2.4 3.6 5.3 3.6 8.6s-1.2 6.2-3.6 8.6c-2.4-2.4-3.6-5.3-3.6-8.6S9.6 5.8 12 3.4Z" />
    <path d="M3.6 12h16.8" />
  </Svg>
);

export const HexChain: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M12 2.9 19 7v8l-7 4.1L5 15V7l7-4.1Z" />
    <path d="M12 8.3 15.6 10.4v4.2L12 16.7 8.4 14.6v-4.2L12 8.3Z" opacity="0.45" />
  </Svg>
);

/* ── the old way ────────────────────────────────────────────────── */

export const SingleEye: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M2.8 12s3.5-5.6 9.2-5.6S21.2 12 21.2 12s-3.5 5.6-9.2 5.6S2.8 12 2.8 12Z" />
    <circle cx="12" cy="12" r="2.3" />
  </Svg>
);

export const BlankSheet: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="4.5" y="3" width="15" height="18" rx="2.6" strokeDasharray="3 3" />
    <path d="M9 12h6" opacity="0.5" />
  </Svg>
);

export const Demolish: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M4 20.4h16M6 20.4V9.2l5-3.4v14.6M11 20.4V9.6l7 2.4v8.4" />
    <path d="M13.6 3.2 11 5.8M15.4 6.4l2.4-2.4" />
  </Svg>
);

export const BrokenLine: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M3 16.5 6.8 10l2.6 3.6L11 11" />
    <path d="M14.4 15.2 16.6 11l4.4 5.5" />
    <path d="M12.3 13.6h.01" strokeWidth="2" />
  </Svg>
);

/* ── the new way ────────────────────────────────────────────────── */

/** Folded survey map with a contour line across it. */
export const MapContour: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M9 4.6 3.4 6.8v12.6L9 17.2l6 2.2 5.6-2.2V4.6L15 6.8 9 4.6Z" />
    <path d="M9 4.6v12.6M15 6.8v12.6" opacity="0.45" />
    <path d="M5.6 13.4c2-2.4 3.7-2.4 5.2-.6 1.5 1.8 3.4 1.4 5.6-1.2" opacity="0.9" />
  </Svg>
);

export const TargetState: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="8.4" />
    <circle cx="12" cy="12" r="4.4" opacity="0.6" />
    <circle cx="12" cy="12" r="1.2" />
  </Svg>
);

export const Route: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="5.6" cy="6.4" r="2.2" />
    <circle cx="18.4" cy="17.6" r="2.2" />
    <path d="M7.8 6.4h5.4a3.6 3.6 0 0 1 0 7.2h-2.4a3.6 3.6 0 0 0 0 7.2h.6" opacity="0.85" />
  </Svg>
);

export const ShieldCheck: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M12 2.8 19.4 6v6.1c0 4-3.1 7.5-7.4 9.1-4.3-1.6-7.4-5.1-7.4-9.1V6L12 2.8Z" />
    <path d="m8.9 12 2.2 2.2 4-4.3" />
  </Svg>
);

/* ── health care detail ─────────────────────────────────────────── */

export const Blueprint: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2.4" />
    <path d="M3.4 9.6h17.2M9.2 9.6v10M14.8 4.4v5.2" opacity="0.85" />
  </Svg>
);

export const DocSearch: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M13.4 3H7a2.4 2.4 0 0 0-2.4 2.4v13.2A2.4 2.4 0 0 0 7 21h10a2.4 2.4 0 0 0 2.4-2.4V9l-6-6Z" />
    <path d="M13.2 3.2V9h5.8" opacity="0.6" />
    <circle cx="11.4" cy="14.4" r="2.6" />
    <path d="m13.4 16.4 2 2" />
  </Svg>
);

export const Exchange: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M4 8.6h13.4l-3-3M20 15.4H6.6l3 3" />
  </Svg>
);

export const Plug: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M9 3.4v4.2M15 3.4v4.2" />
    <path d="M6.6 7.6h10.8v3.6a5.4 5.4 0 0 1-5.4 5.4 5.4 5.4 0 0 1-5.4-5.4V7.6Z" />
    <path d="M12 16.6v4" />
  </Svg>
);

export const Gauge: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M3.8 17.4a8.8 8.8 0 1 1 16.4 0" />
    <path d="m12 17.4 3.6-5.2" />
    <circle cx="12" cy="17.4" r="1.2" />
  </Svg>
);

export const AutoCheck: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M20.4 12a8.4 8.4 0 1 1-3.2-6.6" />
    <path d="m8.8 11.8 2.4 2.4 6-6.4" />
  </Svg>
);

export const BarReport: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="2.6" />
    <path d="M8 16.4v-3.2M12 16.4V8.6M16 16.4v-5" />
  </Svg>
);

export const CalendarArrow: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="3.6" y="5" width="16.8" height="15.4" rx="2.6" />
    <path d="M3.6 9.6h16.8M8 3.2v3.4M16 3.2v3.4" />
    <path d="M10 15.4h5m0 0-1.8-1.8M15 15.4l-1.8 1.8" />
  </Svg>
);

/* ── values ─────────────────────────────────────────────────────── */

export const Scales: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M12 4v16M7 20.4h10M4.6 7.6h14.8" />
    <path d="M4.6 7.6 2 13.4a2.9 2.9 0 0 0 5.2 0L4.6 7.6ZM19.4 7.6l-2.6 5.8a2.9 2.9 0 0 0 5.2 0l-2.6-5.8Z" />
    <circle cx="12" cy="5.4" r="1.2" />
  </Svg>
);

export const Compass: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="m15.4 8.6-2.2 4.6-4.6 2.2 2.2-4.6 4.6-2.2Z" />
  </Svg>
);

export const Handshake: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M3 10.4 6.6 7l3.2 2.4 2.2-1.6 2.2 1.6L17.4 7 21 10.4" />
    <path d="M6.6 7v7.8l4 2.8 2.8-2 2.6 1.6 1.4-1.8V7" />
  </Svg>
);

/* ── careers ────────────────────────────────────────────────────── */

export const Graduation: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M2.6 8.6 12 4.2l9.4 4.4L12 13 2.6 8.6Z" />
    <path d="M6.6 10.6v5.2c0 1.6 2.4 3 5.4 3s5.4-1.4 5.4-3v-5.2M21.4 8.6v5.8" />
  </Svg>
);

export const DocEdit: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M19.4 11.4v7.2A2.4 2.4 0 0 1 17 21H7a2.4 2.4 0 0 1-2.4-2.4V5.4A2.4 2.4 0 0 1 7 3h6" />
    <path d="M18.2 3.6a1.9 1.9 0 0 1 2.7 2.7l-6.5 6.5-3.4.7.7-3.4 6.5-6.5Z" />
  </Svg>
);

export const Users: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="9.4" cy="8.6" r="3.4" />
    <path d="M3.4 19.6c0-3.1 2.7-5.6 6-5.6s6 2.5 6 5.6" />
    <path d="M16.2 5.6a3.4 3.4 0 0 1 0 6.6M17.6 14.6c2.1.7 3.6 2.6 3.6 5" opacity="0.6" />
  </Svg>
);

/* ── sectors & platforms ────────────────────────────────────────── */

export const Bank: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M3.4 9.4 12 4.2l8.6 5.2M4.8 20.4h14.4M6.4 9.8v9M10.4 9.8v9M13.6 9.8v9M17.6 9.8v9" />
  </Svg>
);

export const Signal: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="2" />
    <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 15.8a5.4 5.4 0 0 0 0-7.6" />
    <path d="M5.4 5.4a9.4 9.4 0 0 0 0 13.2M18.6 18.6a9.4 9.4 0 0 0 0-13.2" opacity="0.55" />
  </Svg>
);

export const Browser: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2.4" />
    <path d="M3.4 9h17.2" />
    <path d="M6.6 6.7h.01M9.2 6.7h.01" strokeWidth="1.8" />
  </Svg>
);

export const Database: Icon = ({ className }) => (
  <Svg className={className}>
    <ellipse cx="12" cy="6.2" rx="7.4" ry="3" />
    <path d="M4.6 6.2v11.6c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3V6.2" />
    <path d="M4.6 12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3" opacity="0.6" />
  </Svg>
);

export const CloudLink: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M7.2 18.4a4.2 4.2 0 0 1-.5-8.4 5.4 5.4 0 0 1 10.3-1.2 3.9 3.9 0 0 1 .7 7.7" />
    <path d="M10.4 14.4h3.2M12 12.8v3.2" opacity="0.7" />
  </Svg>
);

export const Clock: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.2 2" />
  </Svg>
);

/* ── contact ────────────────────────────────────────────────────── */

export const Envelope: Icon = ({ className }) => (
  <Svg className={className}>
    <rect x="3" y="5.2" width="18" height="13.6" rx="2.6" />
    <path d="m3.6 7.4 7.1 5a2.2 2.2 0 0 0 2.6 0l7.1-5" />
  </Svg>
);

export const Phone: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M8.2 3.6 10 7.4 8 9.6a12 12 0 0 0 6.4 6.4l2.2-2 3.8 1.8v3.2a1.6 1.6 0 0 1-1.8 1.6C10.9 20 4 13.1 3.2 5.4A1.6 1.6 0 0 1 4.8 3.6h3.4Z" />
  </Svg>
);

export const Pin: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M12 21.2s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

/* ── utility ────────────────────────────────────────────────────── */

export const ArrowUpRight: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M7.4 16.6 16.6 7.4M8.8 7.4h7.8v7.8" />
  </Svg>
);

export const Chevron: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="m6.6 9.4 5.4 5.2 5.4-5.2" />
  </Svg>
);

export const Plus: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M12 5.4v13.2M5.4 12h13.2" />
  </Svg>
);

export const CheckCircle: Icon = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="m8.4 12.2 2.4 2.4 4.8-5.2" />
  </Svg>
);

export const Drag: Icon = ({ className }) => (
  <Svg className={className}>
    <path d="M9 6.6 5.4 10.2 9 13.8M15 6.6l3.6 3.6L15 13.8" />
  </Svg>
);
