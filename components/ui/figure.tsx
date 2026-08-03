import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { SlotArt } from "../art/slot-art";
import { SlotVideo } from "./slot-video";
import { cx } from "./primitives";

/**
 * Media slots.
 *
 * Every photograph on the site is referenced by a stable slot ID. Drop
 * `public/img/<SLOT>.jpg` and it appears — no code change. Add
 * `public/img/<SLOT>-VID.mp4` alongside it and the slot becomes a muted,
 * looping background video with the still as its poster.
 *
 * Resolution order: video → still → generated artwork. Every step is a real
 * finished visual, so the page never has a hole in it.
 *
 * Prompts for every slot: docs/image-prompts.md
 */

const IMG_DIR = path.join(process.cwd(), "public", "img");
const EXTS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const VIDEO_EXTS = [".mp4", ".webm"];

function resolve(slot: string): string | null {
  for (const ext of EXTS) {
    if (fs.existsSync(path.join(IMG_DIR, slot + ext))) return `/img/${slot}${ext}`;
  }
  return null;
}

function resolveVideo(slot: string): string | null {
  for (const ext of VIDEO_EXTS) {
    if (fs.existsSync(path.join(IMG_DIR, `${slot}-VID${ext}`)))
      return `/img/${slot}-VID${ext}`;
  }
  return null;
}

export type FigureProps = {
  slot: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "16/10". Omit when the parent sets the height. */
  ratio?: string;
  /** Shown on the placeholder so the brief is visible in situ. */
  px?: string;
  priority?: boolean;
  sizes?: string;
  /**
   * Stretch to the nearest positioned ancestor instead of sitting in flow.
   * Use this rather than passing `absolute inset-0` — the wrapper's own
   * `relative` would win the cascade and the figure would collapse.
   */
  fill?: boolean;
  className?: string;
  /** Darkens the image so text can sit over it. */
  scrim?: "none" | "bottom" | "full";
  tone?: "clay" | "kiln";
  /** Set false to ignore a `<SLOT>-VID` file and keep the still. */
  video?: boolean;
};

export function Figure({
  slot,
  alt,
  ratio,
  px,
  priority,
  sizes = "100vw",
  fill,
  className,
  scrim = "none",
  tone = "clay",
  video = true,
}: FigureProps) {
  const src = resolve(slot);
  const videoSrc = video ? resolveVideo(slot) : null;

  return (
    <div
      className={cx(
        "overflow-hidden bg-cream-deep",
        fill ? "absolute inset-0 size-full" : "relative",
        className,
      )}
      style={ratio && !fill ? { aspectRatio: ratio } : undefined}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <Placeholder slot={slot} px={px} ratio={ratio} tone={tone} />
      )}

      {/* Layered over the still rather than replacing it, so the poster frame
          is already painted when the video starts. */}
      {videoSrc ? <SlotVideo src={videoSrc} poster={src ?? undefined} /> : null}

      {/* Photographs need a heavy scrim to hold white text. Generated artwork
          is already dark and low-contrast, so it takes a lighter one — the full
          strength would flatten it to grey. */}
      {scrim !== "none" ? (
        <div
          aria-hidden
          className={cx(
            "pointer-events-none absolute inset-0",
            scrim === "bottom"
              ? src
                ? "bg-linear-to-t from-ink/92 via-ink/58 to-ink/15"
                : "bg-linear-to-t from-ink/88 via-ink/40 to-transparent"
              : src
                ? "bg-ink/55"
                : "bg-ink/35",
          )}
        />
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * The empty state is finished artwork, not a grey box: a generated
 * composition in the brand palette, deterministic per slot. The slot ID is
 * surfaced only in development, so a build with no photographs at all still
 * reads as a designed site rather than one with holes in it.
 */
function Placeholder({
  slot,
  px,
  ratio,
  tone,
}: {
  slot: string;
  px?: string;
  ratio?: string;
  tone: "clay" | "kiln";
}) {
  const showTag = process.env.NODE_ENV !== "production";

  return (
    <>
      <SlotArt slot={slot} tone={tone} />
      {showTag ? (
        <span
          className={cx(
            "micro absolute bottom-3 left-3 z-10 rounded-full px-2.5 py-1.5 backdrop-blur-sm",
            tone === "kiln" ? "bg-white/12 text-white/70" : "bg-ink/45 text-white/80",
          )}
        >
          {[slot, ratio?.replace("/", ":"), px].filter(Boolean).join(" · ")}
        </span>
      ) : null}
    </>
  );
}
