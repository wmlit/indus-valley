# Indus Valley — Asset Prompts

Everything to generate, in one place. 33 image slots, 4 video loops, 2 brand graphics.

**How slots work:** save the file as `public/img/<SLOT>.jpg` and it appears on the site.
No code change. Until the file exists, the slot draws generated terracotta artwork, so
nothing looks broken while you work through the list.

---

## 0. Before you start

### Generating in ChatGPT

ChatGPT only outputs three sizes: **1024×1024**, **1536×1024** (landscape), **1024×1536**
(portrait). Every prompt below names the size to ask for and the final crop.

1. Ask for the landscape/portrait/square size given in the row.
2. Crop to the target ratio.
3. For the wide heroes, upscale ~2× afterwards (any upscaler) — a 1536px-wide file on a
   2880px hero will look soft.

### Keeping 32 images looking like one set

Generate them in one long ChatGPT conversation. Paste this once at the top, then send the
prompts one at a time — the thread keeps the look consistent far better than pasting the
style into each prompt separately.

> **Style bible for this thread.** Every image I ask for is for one brand. Hold this look
> across all of them: editorial photography, cinematic natural light, warm neutral colour
> grade built on terracotta (#E2622B), ochre and warm cream (#FAF7F3), with cool
> slate-blue (#8BA4B4) only in the shadows. Subtle film grain. 35mm, shallow depth of
> field. Calm, premium, unhurried — never stocky, never glossy corporate. Generous
> negative space, especially at the bottom of the frame where text will sit. Never include
> text, logos, watermarks, signage or UI screens with readable content.

If a generation drifts, reply "warmer, closer to the style bible" rather than restarting.

### Rules — please don't break these

- **No portraits of named people.** Eric Zimmerman (the Carestream testimonial) is a real
  person; the site uses initials, not a face. Never generate a likeness for him.
- **No real client premises**, and no images that imply a specific named company.
- **Client logos are not generated.** Pull the 34 real logo files from the current site's
  `assets/img/` — the site is showing styled wordmarks as a stand-in.
- **Faces in `HOME-TEAM-*` must be clearly generic.** Three different people, varied age,
  build and skin tone. These represent roles, not individuals.

---

## 1. Home — 9 slots

### `HOME-HERO` · full-bleed hero · ask 1536×1024 → crop 16:10 → upscale to 2880×1800
> Aerial drone photograph looking straight down at a braided river delta at golden hour.
> Sinuous water channels cut through pale silt flats so the land reads as an abstract
> topographic pattern. Warm terracotta and ochre sediment against cool slate-blue water.
> Low raking sun picking out the ridges. Vast, quiet, unpeopled. Empty tonal space across
> the lower third of the frame.

*Why this one first: it carries the entire first impression, and the topography ties
directly to the company name.*

### `HOME-PRAC-HEALTH` · practice card · ask 1024×1536 → crop 4:5 → 1200×1500
> Quiet interior of a modern healthcare administration office. In the foreground, softly
> out of focus, a clinician's hand rests over a tablet on a pale desk. Warm daylight
> through a large window behind. Cream walls, a single terracotta accent in the room. No
> readable screen content, no signage. Vertical composition with calm space at the bottom.

### `HOME-PRAC-EPM` · practice card · ask 1024×1536 → crop 4:5 → 1200×1500
> Macro of a finance workspace at dusk. A desk lamp throws warm light across the edge of a
> printed ledger and the corner of a closed laptop. Deep espresso shadows falling away into
> the background. Extremely shallow focus, no readable text anywhere. Vertical, contemplative.

### `HOME-PRAC-INTEG` · practice card · ask 1024×1536 → crop 4:5 → 1200×1500
> Macro of neatly coiled fibre-optic cabling in a warm-lit server room. Terracotta and
> slate-blue light reflecting off the sheathing. Geometric, orderly and calm rather than
> chaotic. Shallow focus, dark falloff at the bottom of the frame. Vertical.

### `HOME-ASSESS` · assessment panel · ask 1536×1024 → crop 3:2 → 2400×1600
> **3D render.** Five translucent frosted-glass planes floating in a layered parallel
> stack, seen at a slight three-quarter angle. Each plane is faintly etched with
> topographic contour lines. One plane in the middle of the stack glows warm terracotta.
> Soft studio light, long soft shadows, matte clay and frosted-glass materials, clean warm
> cream background. Octane-style render, shallow depth of field. No text.

### `HOME-TEAM-1` · `HOME-TEAM-2` · `HOME-TEAM-3` · ask 1024×1536 → crop 3:4 → 900×1200
> Environmental portrait of a consultant standing in a bright modern office, turned three
> quarters to camera, relaxed and competent rather than posed. Natural window light, warm
> neutral wardrobe, background softly out of focus. Editorial, not corporate stock.
> Vertical.

Generate **three separate images** — vary age, build and skin tone each time. They render
small and side by side, so the difference between them needs to be legible at thumbnail size.

### `TEXTURE-CLAY` · closing band, appears on 11 pages · ask 1536×1024 → crop 21:9 → 2800×1200
> Extreme macro of unglazed fired terracotta. Fine grain, tool marks and throwing ridges
> raking diagonally across the frame. Warm hard side light from the left, deep shadow at the
> right. Abstract, no recognisable object. Very wide crop.

*High priority — this one image sits behind the call to action on almost every page.*

---

## 2. Company — 3 slots

### `COMPANY-HERO` · page opener · ask 1536×1024 → crop 16:9 → 2400×1350
> Wide interior of a calm modern consulting office in mid-morning. An empty meeting table
> beside a large window, warm cream walls, one terracotta chair as the only strong colour.
> Nobody in frame. Soft even daylight, generous empty space in the lower half.

### `COMPANY-OFFICE` · editorial split · ask 1536×1024 → crop 3:2 → 1800×1200
> Two colleagues mid-conversation at a whiteboard, photographed from behind and to one
> side so faces are not the subject. Natural light, warm tones, genuine working posture.
> Nothing readable on the whiteboard.

### `COMPANY-BUILDING-US` · offices section · ask 1536×1024 → crop 16:9 → 2000×1125
> A low-rise suburban American office building at golden hour. Clean brick and glass,
> mature trees, midwestern light, empty parking edge in the foreground. No signage of any
> kind. Understated and real.

### `COMPANY-BUILDING-HYD` · offices section · ask 1536×1024 → crop 16:9 → 2000×1125
> A modern mid-rise office building in an Indian city at golden hour. Warm brick and a
> tall glass curtain wall, palms and tropical planting either side, a covered drive-through
> entrance below. Low sun flaring through the trees. No signage.

Both appear together in the shared Offices section on /company and /contact — the US main
office and the Hyderabad delivery centre.

---

## 3. Vision & Mission — 2 slots

### `VISION-HORIZON` · full-bleed statement band · ask 1536×1024 → crop 21:9 → 2800×1200
> A wide flat horizon at first light. A river valley receding into layered haze — bands of
> cool slate blue in the distance resolving to warm ochre in the foreground. Almost
> abstract, minimal, deeply calm. Very wide crop, with clean space along the bottom edge
> for text.

### `MISSION-FORM` · dark slab · ask 1024×1024 → 1600×1600
> **3D render.** A single matte clay sphere resting in a shallow frosted-glass bowl. One
> warm terracotta light source from the upper left casting a long soft shadow to the
> right. Warm cream background. Quiet, deliberate, almost ceremonial. Octane-style render,
> shallow depth of field. No text.

---

## 4. Clients — 3 slots

All three: **ask 1536×1024 → crop 16:10 → 1800×1125.** Human presence implied, never shown
clearly. No company can be identifiable.

### `CLIENT-WORK-1` — middleware & B2B
> A logistics or distribution floor at dusk, shot wide and long. Racking receding into
> soft focus, warm overhead light against cool blue window light. Movement blurred, nobody
> identifiable, no branding anywhere.

### `CLIENT-WORK-2` — payer systems
> A healthcare administration corridor, warm and orderly, natural light falling across the
> floor from a window at the far end. Empty, quiet, no signage.

### `CLIENT-WORK-3` — EPM & BI
> A corporate finance floor at night seen from outside through glass. Warm interior lights
> against a cool blue exterior, reflections in the window, figures reduced to soft
> silhouettes. Nothing readable.

---

## 5. Services — 4 slots

### `SRV-CARD-1` · `SRV-CARD-2` · `SRV-CARD-3` · ask 1536×1024 → crop 3:2 → 1400×933
Re-shoot the three practice subjects in landscape — same scenes as `HOME-PRAC-HEALTH`,
`HOME-PRAC-EPM` and `HOME-PRAC-INTEG`, framed wide instead of tall. In the same ChatGPT
thread, just say *"the healthcare office again, landscape 3:2, wider framing"* and it will
hold the look.

*(Cropping the portrait versions also works, but a re-frame reads better.)*

### `SRV-CARD-4` — testing / global delivery · ask 1536×1024 → crop 3:2 → 1400×933
> A dark world map rendered as fine light trails arcing between continents across time
> zones. Terracotta and cool slate-blue light against a deep espresso background. Abstract,
> elegant, technical — no country labels, no text, no recognisable UI.

---

## 6. Service pages — 8 slots

### `HC-HERO` · Health Care opener · ask 1536×1024 → crop 21:9 → 2800×1200
> A modern healthcare payer operations floor in soft daylight. Rows of desks receding out
> of focus toward a window wall. Warm cream and clay tones. People present only as soft
> shapes, nobody identifiable, no readable screens. Very wide crop with calm space at the
> bottom.

### `HC-PAYER` · editorial split · ask 1536×1024 → crop 3:2 → 1600×1067
> Close tactile shot of claim paperwork and a laptop edge on a warm wood desk in morning
> light. Papers slightly fanned, a pen resting across them. Shallow focus. Absolutely no
> readable text on the documents.

### `EPM-HERO` · EPM & BI opener · ask 1536×1024 → crop 21:9 → 2800×1200
> A corporate finance floor at blue hour, seen through a glass wall. Warm interior lighting
> against cool exterior dusk, clean architectural lines, quiet and precise. Very wide crop.

### `DI-HERO` · Digital Integration opener · ask 1536×1024 → crop 21:9 → 2800×1200
> A warm-lit data centre aisle in soft focus, receding to a vanishing point. Terracotta
> status lights punctuating cool slate shadows. Strong one-point perspective, geometric and
> calm rather than sci-fi. Very wide crop.

### `DI-MESH` · full-width band · ask 1536×1024 → crop 21:9 → 2800×1200
> **3D render.** On the left of the frame, a chaotic tangle of matte cables. Moving right,
> they resolve into a single clean braided terracotta cord. Floating on a warm cream
> background with soft studio light and gentle shadow. The transition from chaos to order
> should read instantly. Very wide composition. No text.

### `TEST-HERO` · Testing opener · ask 1536×1024 → crop 21:9 → 2800×1200
> Macro of a grid of illuminated indicator lights. Most cool slate-blue, a handful warm
> terracotta scattered through. Extremely shallow depth of field so most of the grid falls
> into bokeh. Abstract and rhythmic. Very wide crop.

### `BLK-HERO` · Blockchain opener · ask 1536×1024 → crop 16:9 → 2400×1350
> **3D render.** Interlocking frosted-glass hexagonal plates forming a chain across the
> frame, one plate glowing warm terracotta. Deep espresso background, dramatic side light,
> visible edge refraction in the glass. Octane-style render. No text.

### `BLK-SECTOR-1` · `BLK-SECTOR-2` · ask 1536×1024 → crop 3:2 → 1400×933
> **1 (healthcare):** A healthcare records room, warm and orderly, rows of files receding
> into soft focus, afternoon light from one side. Nothing readable on the labels.
>
> **2 (education):** An empty university lecture hall at golden hour, low sun through tall
> windows striping the seating. Quiet, warm, nobody present.

---

## 7. Careers & Contact — 2 slots

### `CAREERS-HERO` · ask 1536×1024 → crop 16:9 → 2400×1350
> A candid wide shot of a small team of four around a table mid-conversation, one person
> laughing. Modern office, natural light, warm tones. Genuinely candid — not a posed stock
> team photo, not everyone facing camera. Varied ages and backgrounds.

### `CONTACT-OFFICE` · ask 1536×1024 → crop 3:2 → 1800×1200
> A suburban office entrance on an autumn afternoon. Glass doors, warm brick, a few fallen
> leaves, low golden light. Welcoming and ordinary. No signage.

---

## 8. Video — 4 loops

**None of these are wired into the site yet.** Say the word and I'll add a poster-backed
`<video>` to the hero. All: no audio, seamless loop, muted, H.264 MP4 + WebM.

Sora, Runway or Kling all work. Keep them under 12 seconds and under ~4 MB — a hero video
that takes three seconds to start is worse than a still.

### `HOME-HERO-VID` · 12s · 1920×1080 · the one that matters
> Slow aerial push-in over a braided river delta at golden hour. Water channels glinting as
> the light rakes across them, almost imperceptible forward drift, no cuts, no camera shake.
> Warm ochre and slate-blue grade. Seamless loop — the last frame must match the first.

Pair it with `HOME-HERO.jpg` as the poster frame so the still shows instantly and the video
fades in once buffered.

### `TEXTURE-CLAY-VID` · 8s · 1920×820 · closing band
> Extremely slow drift across a macro terracotta surface, light shifting almost
> imperceptibly across the grain as if the sun were moving. Nearly still. Seamless loop.

### `DI-MESH-VID` · 10s · 1920×820 · Digital Integration band
> 3D animation: a tangle of matte cables slowly resolving itself into a single braided
> terracotta cord, left to right. Smooth ease, soft studio light, warm cream background.
> Loops by reversing — chaos to order to chaos.

### `CAREERS-VID` · 10s · 1920×1080 · Careers opener
> Handheld-feel slow drift through a modern office in warm afternoon light. People present
> but soft and out of focus, nobody identifiable. Quiet and human. Seamless loop.

---

## 9. Brand graphics — 2 items

### `favicon` / app icon · 512×512 PNG
**Do not generate.** The seal mark is already drawn as SVG in
`components/ui/primitives.tsx` — the concentric arcs referencing carved Indus Valley
steatite seals. Export it at 512×512 on a `#241811` background and drop it in as
`app/icon.png`. Ask me and I'll wire it.

### Open Graph / social share card · 1200×630
**Do not generate.** Best produced in code from `HOME-HERO` plus the wordmark, so it stays
in sync automatically. Ask me and I'll add `app/opengraph-image.tsx`.

---

## 10. Already drawn — generate nothing

These exist in code and need no assets. Listed so you don't spend generations on them:

- **40 icons** — one 1.4px-stroke geometry, `components/ui/icons.tsx`
- **The seal / logo mark** — `components/ui/primitives.tsx`
- **All data figures** — assessment metric cards, dependency heatmap, delivery timeline,
  close-cycle bars, consolidation tree, forecast curve, cost waterfall, reconciliation
  ticks, dashboard grid, coverage meters
- **The drag-to-compare integration diagrams** — tangled vs ordered stack
- **Topographic contour fields** — hero, footer, dark sections
- **Slot placeholder artwork** — the generated terracotta compositions standing in for
  every image above

---

## 11. Suggested order

If you are generating in batches, this order gets the site presentable fastest:

1. `HOME-HERO` — the whole first impression
2. `TEXTURE-CLAY` — appears on 11 pages
3. `HOME-PRAC-HEALTH`, `HOME-PRAC-EPM`, `HOME-PRAC-INTEG` — the home page's main visual block
4. The five page openers — `HC-HERO`, `EPM-HERO`, `DI-HERO`, `CAREERS-HERO`, `COMPANY-HERO`
5. The two renders — `HOME-ASSESS`, `DI-MESH`
6. Everything else
7. Video last — the site is complete without it

Drop files in as you go. Each one takes over from its placeholder the next time the site builds.
