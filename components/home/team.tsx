import { Counter } from "../ui/counter";
import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import { ContourField } from "../art/valley";
import { ArrowRight, Btn, Container, Seal, cx } from "../ui/primitives";

/* ------------------------------------------------------------------
   8 · Who delivers it
------------------------------------------------------------------- */

const people = [
  { slot: "HOME-TEAM-1", role: "Solution architects" },
  { slot: "HOME-TEAM-2", role: "Test leads" },
  { slot: "HOME-TEAM-3", role: "EPM consultants" },
];

const platforms = [
  { name: "Facets™", state: "Delivered" },
  { name: "QNXT™", state: "Delivered" },
  { name: "HealthRules™", state: "Delivered" },
  { name: "AMISYS Advance™", state: "Delivered" },
];

export function WhoDelivers() {
  return (
    <section className="relative overflow-hidden kiln-wash py-20 text-white grain sm:py-28">
      <ContourField
        uid="cred-cf"
        tone="light"
        className="pointer-events-none absolute -top-1/4 -right-1/4 h-[150%] w-[110%] opacity-[0.14]"
      />

      <Container className="relative">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr_1fr]">
          {/* statement */}
          <Reveal className="lg:row-span-2">
            <div className="flex h-full flex-col justify-between rounded-slab bg-white/[0.04] p-7 hairline-light sm:p-8">
              <div>
                <h2 className="text-[clamp(1.9rem,3.4vw,2.5rem)]">
                  <span className="block text-white">Delivered by people</span>
                  <span className="block text-white/45">who have done it before.</span>
                </h2>
                <p className="mt-6 max-w-[38ch] text-[14.5px] leading-[1.7] text-white/55">
                  Trust comes with time. Over thirty years Indus Valley has become a
                  benchmark for quality IT consulting — because the same
                  practitioners keep showing up on the hard parts.
                </p>
              </div>

              <div className="mt-10">
                <Btn href="/company" variant="light">
                  About the company
                  <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Btn>
                <div className="mt-7 flex items-center gap-3">
                  <Seal className="size-7" tone="dark" />
                  <span className="text-[12.5px] text-white/45">
                    34+ enterprise clients worldwide
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* practitioners */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-slab bg-white/[0.04] p-6 hairline-light">
              <div className="grid grid-cols-3 gap-2">
                {people.map((p) => (
                  <div key={p.slot} className="relative overflow-hidden rounded-xl">
                    <Figure
                      slot={p.slot}
                      alt={`${p.role} at Indus Valley`}
                      ratio="3/4"
                      px="900×1200"
                      tone="kiln"
                      sizes="120px"
                      scrim="bottom"
                    />
                    <span className="absolute inset-x-0 bottom-0 p-2 text-[10px] leading-tight font-medium text-white/90">
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>
              <h3 className="mt-6 text-[17px] text-white">Senior practitioners</h3>
              <p className="mt-2 text-[13px] leading-snug text-white/50">
                Project management, business analysis, configuration design and
                custom development — staffed from within the practice.
              </p>
            </div>
          </Reveal>

          {/* years */}
          <Reveal delay={180}>
            <div className="flex h-full flex-col rounded-slab bg-white/[0.04] p-6 hairline-light">
              <Gauge />
              <h3 className="mt-6 text-[17px] text-white">Three decades in</h3>
              <p className="mt-2 text-[13px] leading-snug text-white/50">
                Continuous delivery since 1996, from one office in Miamisburg,
                Ohio to clients across the United States.
              </p>
            </div>
          </Reveal>

          {/* platforms */}
          <Reveal delay={140}>
            <div className="flex h-full flex-col rounded-slab bg-white/[0.04] p-6 hairline-light">
              <ul className="flex flex-col gap-1.5">
                {platforms.map((p, i) => (
                  <li
                    key={p.name}
                    className={cx(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-[13.5px]",
                      i === 0 ? "bg-white/10 text-white" : "bg-white/[0.05] text-white/65",
                    )}
                  >
                    {p.name}
                    <span className="micro text-white/35">{p.state}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-[17px] text-white">Platforms we deliver on</h3>
              <p className="mt-2 text-[13px] leading-snug text-white/50">
                Payer platforms supported from planning through go-live, upgrades
                and the testing that surrounds both.
              </p>
            </div>
          </Reveal>

          {/* long engagement */}
          <Reveal delay={220}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-slab ember-wash p-6 hairline-light">
              <div className="relative flex items-start justify-between">
                <span className="micro text-white/50">Long engagement</span>
                <Seal className="size-7" tone="dark" />
              </div>
              <div className="relative mt-10">
                <p className="text-[15px] leading-snug text-white">
                  Middleware strategy, B2B mappings over the standard EDI framework,
                  and custom webMethods rollouts.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Gauge() {
  const r = 52;
  const c = 2 * Math.PI * r;
  const arc = c * (240 / 360);
  return (
    <div className="relative mx-auto grid w-full max-w-[190px] place-items-center">
      <svg viewBox="0 0 140 110" fill="none" aria-hidden className="w-full">
        <g transform="rotate(150 70 62)">
          <circle
            cx="70"
            cy="62"
            r={r}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${arc} ${c}`}
          />
          <circle
            cx="70"
            cy="62"
            r={r}
            stroke="url(#gauge-g)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${arc * 0.86} ${c}`}
          />
        </g>
        <defs>
          <linearGradient id="gauge-g" x1="18" y1="20" x2="122" y2="100">
            <stop stopColor="#8BA4B4" />
            <stop offset="0.5" stopColor="#F7DCCB" />
            <stop offset="1" stopColor="#E2622B" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-1/2 flex -translate-y-[58%] flex-col items-center">
        <span className="text-[38px] leading-none font-medium tracking-[-0.05em] text-white tnum">
          <Counter to={30} />
        </span>
        <span className="micro mt-2 text-white/40">Years</span>
      </div>
    </div>
  );
}
