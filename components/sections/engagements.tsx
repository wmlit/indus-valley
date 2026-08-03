import { engagementModels } from "@/lib/site";
import { Reveal } from "../ui/reveal";
import { CalendarArrow, Globe, Users } from "../ui/icons";
import { Container, SectionHeading, cx } from "../ui/primitives";

/* ------------------------------------------------------------------
   Engagement models
------------------------------------------------------------------- */

const icons = [CalendarArrow, Users, Globe];

export function Engagements({ className }: { className?: string }) {
  return (
    <section className={cx("bg-cream pb-20 sm:pb-24", className)}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engagement models"
            lead="Three ways to work with us,"
            trail="starting with two weeks."
            sub="Most clients begin with an executive assessment and only commit to delivery once the plan is on the table."
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {engagementModels.map((m, i) => {
            const Ico = icons[i];
            const first = i === 0;
            return (
              <Reveal key={m.title} delay={i * 100}>
                <div
                  className={cx(
                    "flex h-full flex-col rounded-slab p-7 sm:p-8",
                    first ? "ember-wash text-white grain" : "bg-chalk hairline",
                  )}
                >
                  <div className="relative flex items-start justify-between">
                    <span
                      className={cx(
                        "grid size-11 place-items-center rounded-xl",
                        first ? "bg-white/12 text-white" : "bg-cream text-clay hairline",
                      )}
                    >
                      <Ico />
                    </span>
                    {first ? (
                      <span className="micro rounded-full bg-clay px-2.5 py-1.5 text-white">
                        Start here
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className={cx(
                      "relative mt-8 text-[19px] tracking-[-0.03em]",
                      first ? "text-white" : "text-ink",
                    )}
                  >
                    {m.title}
                  </h3>
                  <p
                    className={cx(
                      "relative mt-3 text-[13.5px] leading-[1.7]",
                      first ? "text-white/60" : "text-muted",
                    )}
                  >
                    {m.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------
   Delivery timeline — the shape of a typical engagement
------------------------------------------------------------------- */

const phases = [
  { label: "Executive assessment", start: 0, span: 18, tone: "clay", note: "wk 1–2" },
  { label: "Design & configuration", start: 16, span: 42, tone: "ink", note: "wk 3–8" },
  { label: "Test, automate, cut over", start: 54, span: 32, tone: "ink", note: "wk 9–12" },
  { label: "Managed service", start: 84, span: 16, tone: "soft", note: "ongoing" },
];

export function DeliveryTimeline() {
  return (
    <div className="relative overflow-hidden rounded-slab kiln-wash p-6 text-white grain sm:p-8">
      <div className="relative">
        <span className="micro text-white/40">Typical shape of an engagement</span>
        <h3 className="mt-3 max-w-[22ch] text-[20px] text-white sm:text-[23px]">
          Twelve weeks from assessment to cutover.
        </h3>
      </div>

      <div className="relative mt-9 flex flex-col gap-4">
        {phases.map((p) => (
          <div key={p.label}>
            <div className="flex items-baseline justify-between">
              <span className="text-[13.5px] text-white/85">{p.label}</span>
              <span className="micro text-white/35">{p.note}</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/8">
              <div
                style={{ marginLeft: `${p.start}%`, width: `${p.span}%` }}
                className={cx(
                  "h-full rounded-full",
                  p.tone === "clay" && "bg-clay",
                  p.tone === "ink" && "bg-white/45",
                  p.tone === "soft" && "bg-white/20",
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-9 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10">
        {[
          ["Assessment", "1–2 wks"],
          ["Build", "6 wks"],
          ["Support", "24×7"],
        ].map(([k, v]) => (
          <div key={k} className="bg-kiln px-4 py-4">
            <span className="micro text-white/35">{k}</span>
            <p className="mt-2 text-[16px] font-medium tracking-[-0.02em] text-white">{v}</p>
          </div>
        ))}
      </div>

      <p className="relative mt-6 text-[12.5px] leading-snug text-white/40">
        Indicative. Real sequencing comes out of the assessment — some clients
        only ever need the first two weeks.
      </p>
    </div>
  );
}
