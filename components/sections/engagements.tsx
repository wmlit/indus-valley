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
   Delivery model — the two offices, and the day they share

   This replaced a twelve-week assessment-to-cutover timeline. That
   graphic committed the firm to a delivery shape it does not want to
   sell, and the week numbers on it were illustrative rather than real.
   What is drawn here instead is a fact already published on the site:
   two offices, two working days, one continuous one.
------------------------------------------------------------------- */

const shifts = [
  {
    city: "Miamisburg, Ohio",
    role: "Engagements owned here",
    hours: "8AM – 6PM ET",
    /* the bar is the local working day on a local 24h rail */
    start: 33,
    span: 42,
    tone: "clay",
  },
  {
    city: "Hyderabad, India",
    role: "Build continues here",
    hours: "9AM – 7PM IST",
    start: 37,
    span: 42,
    tone: "line",
  },
];

export function DeliveryModel() {
  return (
    <div className="relative overflow-hidden rounded-slab kiln-wash p-6 text-white grain sm:p-8">
      <div className="relative">
        <span className="micro text-white/40">How delivery is staffed</span>
        <h3 className="mt-3 max-w-[22ch] text-[20px] text-white sm:text-[23px]">
          Two offices. One continuous working day.
        </h3>
      </div>

      <div className="relative mt-9 flex flex-col gap-7">
        {shifts.map((sft) => (
          <div key={sft.city}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[13.5px] text-white/85">{sft.city}</span>
              <span className="micro shrink-0 text-white/35">{sft.hours}</span>
            </div>
            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-white/8">
              <div
                style={{ marginLeft: `${sft.start}%`, width: `${sft.span}%` }}
                className={cx(
                  "h-full rounded-full",
                  sft.tone === "clay" ? "bg-clay" : "bg-white/45",
                )}
              />
            </div>
            <span className="mt-2 block text-[12.5px] text-white/40">{sft.role}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-9 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10">
        {[
          ["Onshore", "Accountable"],
          ["Offshore", "Blended"],
          ["Support", "24×7"],
        ].map(([k, v]) => (
          <div key={k} className="bg-kiln px-4 py-4">
            <span className="micro text-white/35">{k}</span>
            <p className="mt-2 text-[16px] font-medium tracking-[-0.02em] text-white">{v}</p>
          </div>
        ))}
      </div>

      <p className="relative mt-6 text-[12.5px] leading-snug text-white/40">
        Each bar is that office&rsquo;s own working day. Sequencing on any
        engagement comes out of the assessment, not a template.
      </p>
    </div>
  );
}
