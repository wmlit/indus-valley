# Indus Valley — Site Blueprint

Visual-first rebuild. Structure, layout, imagery, icons and motion for every page.
Reference sets the *bar* (density of craft, rhythm, restraint) — not the layout.

Status: **built**. All 13 pages ship, prerendered static. Every image is a slot
awaiting art — see §5 for the prompts and §9 for the manifest.

---

## 0. The one rule

Every section must have a **focal object** — a photograph, a 3D render, a live data
figure, or a diagram. Text sits *beside* the object, never floats alone on a gradient.
If a section is text on a background, it is not finished.

Three visual registers, alternating down every page so nothing repeats twice in a row:

| Register | What it is | Where it earns its place |
|---|---|---|
| **Photographic** | Real, warm, cinematic. Full-bleed or in a rounded slab. | Hero, section openers, human moments |
| **Rendered** | 3D objects — layered terrain, glass slabs, clay forms. | Abstract concepts: architecture, assessment, scale |
| **Instrumental** | Live SVG figures — scorecards, heatmaps, timelines, diagrams. | Anywhere we make a claim about rigour |

---

## 1. Design system (built)

**Palette** — named for the civilisation, not for a mood board.

```
ink        #100E0C   headlines, solid buttons
muted      #74695F   body
faint      #A79C92   second-tone headline, micro-labels
cream      #FAF7F3   page ground
chalk      #FFFFFF   cards
line       #E8E0D6   hairlines
clay       #E2622B   THE accent — one per viewport, never decorative
clay-deep  #B8431A   hover
kiln       #241811   dark sections
river      #8BA4B4   cool counterweight, data marks only
```

**Type** — Instrument Sans (display + body), JetBrains Mono (micro-labels, data).
Headlines `-0.035em`, `line-height 1.03`, weight 500. Two-tone rule: first clause in
`ink`, second in `faint`.

**Motion** — one easing curve `cubic-bezier(.2,.7,.2,1)`. Reveal on scroll (22px lift,
850ms, staggered 90ms). Marquee, drift, counters. All disabled under
`prefers-reduced-motion`.

**Radii** — 20px cards, 28px slabs, full-round pills. **Hairlines**, never borders.

---

## 2. Asset system

### 2.1 Image slots

Every image is a **slot** with a stable ID. In code:

```tsx
<Figure slot="HOME-HERO" ratio="16/10" alt="…" priority />
```

`components/ui/figure.tsx` resolves `public/img/<SLOT>.jpg` at build time. If the file
is absent it renders a designed placeholder — clay-wash panel, slot ID, target ratio
and pixel size in mono. **The site looks intentional before a single photo exists**,
and going live is a matter of dropping files into `public/img/`.

Deliver as `.jpg` (photos) / `.png` (renders on transparent). Next.js `<Image>` handles
sizing and WebP conversion.

### 2.2 Icon set

Custom-drawn, **one geometry**: 16/20/24px grid, 1.4px stroke, round caps and joins,
`currentColor`, no fills. Each icon is a literal picture of the thing named — no
decorative glyphs. Inventory in §6.

### 2.3 Video

One hero loop only. Everything else is static — motion comes from scroll, not autoplay.

---

## 3. Sitemap

```
/                              Home
│
├── /company                   Company — who we are, the 30 years
├── /vision-mission            Vision & Mission
├── /clients                   Clients & the work
│
├── /services                  Services overview  ← NEW (dropdown title had no page)
│   ├── /health-care           Health Care
│   ├── /epm-bi                Enterprise Performance Management & BI
│   ├── /digital-integration   Digital Integration
│   ├── /testing               Testing Services  ← NEW (was buried inside Health Care)
│   └── /blockchain            Blockchain / BlockRock  ← RESCUED (live page, unlinked)
│
├── /careers                   Careers — 6 open roles
├── /contact                   Get in touch
│
├── /not-found                 404
├── /sitemap.xml               generated
└── /robots.txt                generated
```

**13 pages.** Decisions behind it:

- `/services` index page created — the old Services dropdown title pointed at
  `about.html`, which does not exist. Site-wide broken link, fixed by having a real page.
- **Testing** gets its own page. It is a full practice with its own competencies, roles,
  industries and three delivery models, currently hidden two-thirds down Health Care.
- **Blockchain** is rescued from orphan status into `/services/blockchain`. It has
  complete copy and is reachable only by direct URL today.
- **Onsite–Offshore** is a *section*, not a page — it appears on `/services` and on
  `/services/digital-integration`. It was a homepage card pointing at another service.
- **Careers contradiction resolved**: there are **no current openings** (confirmed).
  `/careers` is an evergreen page — what it is like here, the tracks we hire for, and an
  open application to `jobs@indusvalley.com`. The six postings on the orphan
  `work-with-us.html` become the *tracks*, stripped of any "apply now" framing. That
  page is retired.
- **Dropped**: `leadership`, `partnerships`, `data-engineering`, `cloud-services` — all
  four are "Website under Maintenance" placeholders. Leadership returns when we have
  bios and portraits; data-engineering and cloud-services return when there is a
  practice to describe. Shipping empty pages costs more than not having them.
- Every page gets its **own `<title>` and description**. All 15 pages currently share
  the title "Indus Valley".

---

## 4. Page blueprints

Legend: 🖼 photo slot · 🧊 3D render slot · 📊 live SVG figure · ✳️ icon set

### 4.1 `/` Home — 11 sections

| # | Section | Layout | Visual |
|---|---|---|---|
| 1 | **Hero** | Full-bleed image, 92svh. Headline bottom-left, not centred. Dark scrim bottom 55%. Nav floats over. | 🖼 `HOME-HERO` + optional `HOME-HERO-VID` loop |
| 2 | **Client wall** | Thin band, real client logos, infinite marquee, greyscale → colour on hover | client logos (reuse existing assets) |
| 3 | **Three practices** | 3 tall cards, each an image with copy over the lower third. Hover lifts + zooms image 4%. | 🖼 `HOME-PRAC-HEALTH` `HOME-PRAC-EPM` `HOME-PRAC-INTEG` |
| 4 | **Proof strip** | 4 stats, hairline-divided, one sparkline | 📊 |
| 5 | **Old way / new way** | Two stacked slabs — light then kiln-dark. 4 steps each. | ✳️ 8 icons |
| 6 | **The assessment** | Full-width slab, render centred, 4 metric cards floating around it | 🧊 `HOME-ASSESS` + 📊 |
| 7 | **How it lands** | Split. Left: draggable before/after of an integration landscape. Right: copy + 3 checks. | 📊 diagram pair |
| 8 | **Capability index** | Accordion, 5 groups, 34 capabilities as chips | ✳️ |
| 9 | **Who delivers it** | Kiln-dark bento, 5 tiles: 3 portraits, a 30-years gauge, platforms list | 🖼 `HOME-TEAM-1..3` + 📊 |
| 10 | **Testimonial** | Full-width, quote at 28px, initials avatar. No stock portrait — the person is real. | — |
| 11 | **Closing CTA** | Kiln-dark band, clay texture, email + phone | 🖼 `TEXTURE-CLAY` |

**Fixes to what exists:** hero becomes image-led with a hard scrim (current version is
text on a wash — unreadable); the 5-card practice bento collapses to 3 image cards;
"engagement models" and "FAQ" move off Home to `/services` and `/contact`. Home goes
from 15 sections to 11 and every one gains a focal object.

### 4.2 `/company`

| Section | Layout | Visual |
|---|---|---|
| Page opener | Half-height image, title over it | 🖼 `COMPANY-HERO` |
| "Since 1996" | Editorial two-column, big drop statement | 🖼 `COMPANY-OFFICE` |
| Timeline | Horizontal scroll rail — 1996 / 2000s / 2010s / today, 4 nodes | 📊 ✳️ |
| Values ×3 | 3 cards, integrity · industry insight · client satisfaction | ✳️ 3 icons |
| Where we are | Miamisburg, map + building | 🖼 `COMPANY-BUILDING` |
| CTA | shared | — |

### 4.3 `/vision-mission`

| Section | Layout | Visual |
|---|---|---|
| Opener | Type-led, no image — one deliberately quiet page | — |
| Vision | Full-bleed horizon image, statement over it, 34px | 🖼 `VISION-HORIZON` |
| Mission | Kiln-dark slab, statement + 3 value chips | 🧊 `MISSION-FORM` |
| Proof | 4-stat strip | 📊 |

### 4.4 `/clients`

| Section | Layout | Visual |
|---|---|---|
| Opener | Title + count "34 enterprises" | — |
| Logo grid | 34 logos, 6-col, hairline cells, greyscale → colour, staggered reveal | client logos |
| Featured work ×3 | 3 wide cards: Carestream (middleware/EDI), a payer implementation, an EPM close | 🖼 `CLIENT-WORK-1..3` |
| Testimonial | Carestream quote, full width | — |
| Industries | 5 chips: healthcare, banking, telecom, retail, education | ✳️ |

### 4.5 `/services` (new index)

| Section | Layout | Visual |
|---|---|---|
| Opener | Headline + sub, no image | — |
| 4 practice cards | 2×2, each: image, icon, title, 3 bullets, link | 🖼 `SRV-CARD-1..4` |
| Onsite–offshore | Split: copy + the 12-week delivery timeline | 📊 |
| Engagement models | 3 cards: assessment / augmentation / managed service | ✳️ |
| FAQ | 6 questions, accordion | — |
| CTA | shared | — |

### 4.6 `/services/health-care`

| Section | Layout | Visual |
|---|---|---|
| Opener | Half-height image + title + platform chips | 🖼 `HC-HERO` |
| Practice intro | 2-col editorial | 🖼 `HC-PAYER` |
| Platforms ×3 | Facets / HealthRules / AMISYS — 3 cards, logo-lockup style | ✳️ |
| Implementation & upgrades | Split: copy + phase diagram | 📊 |
| Project planning | Split reversed | 🧊 `HC-PLANNING` |
| Practice areas | 8 chips in a hairline grid | ✳️ 8 icons |
| Delivery models ×3 | 3 cards | ✳️ |
| Cross-link | → Testing services | — |

### 4.7 `/services/epm-bi`

| Section | Layout | Visual |
|---|---|---|
| Opener | Half-height | 🖼 `EPM-HERO` |
| Intro | "More than two decades… concept to completion" | — |
| The 5 offerings | 5 cards, each with a **live figure**: consolidation tree, forecast curve, cost waterfall, reconciliation ticks, dashboard grid | 📊 ×5 |
| Close-cycle story | Split: copy + before/after close timeline | 📊 |
| Toolset | Hyperion, Oracle EPM, Dodeca, DB2, SQL Server | ✳️ |
| CTA | shared | — |

### 4.8 `/services/digital-integration`

| Section | Layout | Visual |
|---|---|---|
| Opener | Half-height | 🖼 `DI-HERO` |
| "Your digital journey" | Statement + the tangled→ordered compare slider | 📊 |
| 5 capabilities | Bento 3+2: architectural consulting, process optimisation, hybrid integration, B2B, EAI | ✳️ 5 icons + 🧊 `DI-MESH` |
| Onsite–offshore | Split + 24×7 support panel | 📊 |
| Cross-link | → Blockchain, → Testing | — |

⚠️ 5 links on this page currently point at `blog-details.html`, which does not exist.

### 4.9 `/services/testing` (new)

| Section | Layout | Visual |
|---|---|---|
| Opener | Half-height | 🖼 `TEST-HERO` |
| Intro | "Flexible, scalable, tailored" | — |
| 9 competencies | Hairline grid | ✳️ |
| 4 roles | 4 cards | ✳️ |
| 5 industries | Chips | ✳️ |
| 3 delivery models | Cards | — |
| Automation coverage | Live figure | 📊 |

### 4.10 `/services/blockchain`

| Section | Layout | Visual |
|---|---|---|
| Opener | Kiln-dark, half-height, BlockRock lockup | 🧊 `BLK-HERO` |
| Intro | The complexity argument | — |
| 8 value areas | Bento | ✳️ 8 icons |
| Sectors | Healthcare · Education | 🖼 `BLK-SECTOR-1..2` |
| CTA | shared | — |

### 4.11 `/careers`

| Section | Layout | Visual |
|---|---|---|
| Opener | Full-bleed team image. Honest headline — no fake urgency. | 🖼 `CAREERS-HERO` |
| No openings, stated plainly | A single calm panel: "No open positions right now." + what to do instead | ✳️ |
| Why here | 3 cards: trainings on new technologies, product design work, proposal work | ✳️ |
| **Tracks we hire for** | 6 expandable rows: engineering, senior engineering, BI analysis, senior BI, programmer analyst — education + skill chips. Framed as *what we look for*, not *apply now*. | ✳️ |
| Location note | Miamisburg + "various unanticipated locations throughout the U.S." | — |
| Open application | Band → jobs@indusvalley.com, "we keep every CV on file" | — |

### 4.12 `/contact`

| Section | Layout | Visual |
|---|---|---|
| Opener | Split: headline left, form right — form visible above the fold | — |
| Form | Name, email, company, interest (select), message. Server action + honeypot. | ✳️ |
| 4 departments | Hairline grid: Marketing & Sales, Main, HR, Finance | ✳️ |
| Office | Map + building photo + hours | 🖼 `CONTACT-OFFICE` |
| FAQ | 6 questions | — |

---

## 5. Image prompts

Paste each prompt into your generator. **Prepend this style block to every one:**

> *Editorial photograph, cinematic natural light, warm neutral grade with terracotta
> accents and cool slate-blue shadows, subtle film grain, 35mm, shallow depth of field,
> calm and premium, generous negative space, muted palette, no text, no logos, no
> watermarks, no visible faces of identifiable public figures.*

For 🧊 renders swap the first clause for:

> *Octane-style 3D render, soft studio light, matte clay and frosted glass materials,
> warm terracotta and cream palette with cool slate-blue accents, subtle depth of field,
> on a clean cream background, no text.*

| Slot | Ratio · px | Prompt |
|---|---|---|
| `HOME-HERO` | 16:10 · 2880×1800 | Aerial drone view directly above a braided river delta at golden hour, sinuous water channels cutting through pale silt flats, the land reading as an abstract topographic pattern of ochre and terracotta sediment against cool slate-blue water, low sun raking across ridges, vast and quiet |
| `HOME-HERO-VID` | 16:9 · 1920×1080, 12s loop, no audio | Slow aerial push-in over a braided river delta at golden hour, water channels glinting, almost imperceptible drift, seamless loop, cinematic, colour-graded warm ochre and slate blue |
| `HOME-PRAC-HEALTH` | 4:5 · 1200×1500 | Close, quiet interior of a modern healthcare administration office, an out-of-focus clinician's hand over a tablet, warm daylight through a window, soft cream and terracotta tones, no readable screens |
| `HOME-PRAC-EPM` | 4:5 · 1200×1500 | Macro of a finance workspace at dusk — a desk lamp glow across a printed ledger and a laptop edge, warm shallow focus, deep espresso shadows, no readable text |
| `HOME-PRAC-INTEG` | 4:5 · 1200×1500 | Macro of fibre-optic cabling coiled in a warm-lit server room, terracotta and slate blue reflections, shallow focus, geometric and calm |
| `HOME-ASSESS` | 3:2 · 2400×1600 | 🧊 Stack of five translucent frosted-glass planes floating in layered parallel, each etched with faint topographic contour lines, a single terracotta plane glowing in the middle of the stack, soft shadows on cream |
| `HOME-TEAM-1..3` | 3:4 · 900×1200 | Environmental portrait of a consultant in a bright modern office, three-quarter turn, natural window light, warm neutral wardrobe, relaxed and competent, background softly out of focus *(generate 3 variations — different ages, builds and skin tones)* |
| `TEXTURE-CLAY` | 21:9 · 2800×1200 | Extreme macro of unglazed fired terracotta, fine grain and tool marks raking across the frame, warm side light, abstract |
| `COMPANY-HERO` | 16:9 · 2400×1350 | Wide interior of a calm modern consulting office, mid-morning, empty meeting table by a large window, warm cream walls, a single terracotta chair |
| `COMPANY-OFFICE` | 3:2 · 1800×1200 | Two colleagues mid-conversation at a whiteboard, seen from behind and to the side, natural light, warm tones, faces not the subject |
| `COMPANY-BUILDING` | 16:9 · 2000×1125 | Low-rise suburban American office building at golden hour, clean brick and glass, mature trees, midwestern light, no signage |
| `VISION-HORIZON` | 21:9 · 2800×1200 | Wide flat horizon at first light, a river valley receding into haze, layered bands of slate blue and warm ochre, almost abstract, deep calm |
| `MISSION-FORM` | 1:1 · 1600×1600 | 🧊 Single matte clay sphere resting in a shallow frosted-glass bowl, one warm terracotta light source, long soft shadow, cream background |
| `CLIENT-WORK-1..3` | 16:10 · 1800×1125 | Abstract enterprise-operations scene, warm-lit, human presence implied not shown — *1:* a logistics floor at dusk, *2:* a healthcare admin corridor, *3:* a finance floor at night through glass |
| `SRV-CARD-1..4` | 3:2 · 1400×933 | Reuse `HOME-PRAC-*` for 1–3; *4:* a world map of light trails across time zones, terracotta and slate blue, dark background |
| `HC-HERO` | 21:9 · 2800×1200 | Modern healthcare payer operations floor, soft daylight, rows of desks receding out of focus, warm cream and clay tones |
| `HC-PAYER` | 3:2 · 1600×1067 | Close, tactile shot of claim paperwork and a laptop on a warm wood desk, morning light, no readable text |
| `HC-PLANNING` | 4:3 · 1600×1200 | 🧊 Four nested clay blocks assembling into a single form, exploded axonometric, one block terracotta, soft shadows on cream |
| `EPM-HERO` | 21:9 · 2800×1200 | Corporate finance floor at blue hour seen through glass, warm interior lights against cool exterior, quiet and precise |
| `DI-HERO` | 21:9 · 2800×1200 | Warm-lit data centre aisle in soft focus, terracotta status lights, cool slate shadows, geometric perspective |
| `DI-MESH` | 1:1 · 1600×1600 | 🧊 Tangle of matte cables on the left resolving into one clean braided terracotta cord on the right, floating on cream, soft studio light |
| `TEST-HERO` | 21:9 · 2800×1200 | Macro grid of illuminated test indicators, most cool slate, a few warm terracotta, deep shallow focus, abstract |
| `BLK-HERO` | 16:9 · 2400×1350 | 🧊 Interlocking frosted-glass hexagonal plates in a chain, one terracotta, dark espresso background, dramatic side light |
| `BLK-SECTOR-1..2` | 3:2 · 1400×933 | *1:* healthcare records room, warm and orderly; *2:* a university lecture hall at golden hour, empty |
| `CAREERS-HERO` | 16:9 · 2400×1350 | Candid wide shot of a small team around a table mid-laugh, modern office, natural light, warm tones, genuine |
| `CONTACT-OFFICE` | 3:2 · 1800×1200 | Suburban Ohio office entrance in autumn afternoon light, glass doors, warm brick, welcoming |
| `OG-DEFAULT` | 1.91:1 · 1200×630 | Crop of `HOME-HERO` with the seal mark — generated in code via `opengraph-image.tsx`, no prompt needed |

**Do not generate:** a portrait of Eric Zimmerman or any named client contact, and any
image resembling a real client's premises. Client logos should come from the existing
site's `assets/img/` — not regenerated.

---

## 6. Icon inventory

One family, drawn to the same grid. Each icon depicts the literal subject.

| Group | Icons |
|---|---|
| Practices | stethoscope-chart *(health care)* · ledger-bars *(EPM)* · node-mesh *(integration)* · check-grid *(testing)* · globe-clock *(onsite-offshore)* · hex-chain *(blockchain)* |
| Old way | single-eye *(fixate on one system)* · empty-clipboard *(no assessment)* · demolition *(unnecessary replacement)* · broken-line *(poor results)* |
| New way | map-contour *(read the landscape)* · target-state *(see the target)* · route *(tailored protocol)* · anchor-check *(results that hold)* |
| Health care | blueprint *(configuration design)* · magnifier-doc *(business analysis)* · exchange *(EDI)* · plug *(interfaces & extracts)* · gauge *(performance testing)* · robot-check *(automation)* · bar-report *(BI & reporting)* · calendar-arrow *(planning)* |
| Values | scales *(integrity)* · compass *(industry insight)* · handshake *(client satisfaction)* |
| Contact | envelope · phone · pin · clock |
| Utility | arrow-right · chevron · plus/minus · check-circle · drag-handle |

**33 icons.** Drawn in-repo as React components — no icon library, no dependency.

---

## 7. Build status

| | |
|---|---|
| ✅ | `Figure` slot system + designed placeholders + `public/img/` |
| ✅ | Icon set — 40 marks, one geometry, zero dependencies |
| ✅ | Home — 11 sections |
| ✅ | `/services` index + Health Care, EPM & BI, Digital Integration, Testing, Blockchain |
| ✅ | `/company`, `/vision-mission`, `/clients` |
| ✅ | `/careers` (no-openings state), `/contact` (server action + honeypot) |
| ✅ | Per-page metadata, `sitemap.xml`, `robots.txt`, 404 |
| ⬜ | Real images dropped into `public/img/` |
| ⬜ | Contact form transport — currently validates and logs; needs an SMTP/Resend/SES target |
| ⬜ | `opengraph-image.tsx` — waiting on `HOME-HERO` |
| ⬜ | Client logo files from the current site's `assets/img/` (wordmarks stand in) |

---

## 8. Open questions

1. ~~**Careers** — are the 6 roles current?~~ **Answered: no current openings.**
2. **Client logos** — can I pull the 34 logo files from the current site's `assets/img/`?
3. **Leadership page** — do bios and portraits exist, or does it stay off the map?
4. **Blockchain / BlockRock** — still an active offering, or retire it?
5. **Phone numbers** — footer shows the Main line while Marketing & Sales differs. One primary number for the header?
