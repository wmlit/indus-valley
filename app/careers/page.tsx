import type { Metadata } from "next";
import { company, diceUrl, hiringTracks, rolesNote } from "@/lib/site";
import { PageHero } from "@/components/sections/page-hero";
import { IconGrid } from "@/components/sections/bits";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { Blueprint, DocEdit, Envelope, Graduation, Pin } from "@/components/ui/icons";
import { ArrowRight, Btn, Container, Seal } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Current openings at Indus Valley Consultants are posted on Dice. Here is what we hire for, and where to send your CV so we reach you first when a seat opens.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        slot="CAREERS-HERO"
        px="16:9 · 2400×1350"
        eyebrow="Careers"
        lead="A part of"
        trail="our big family."
        sub="We hire across consulting, data engineering and integration throughout the year — openings go up on Dice, and we keep every CV we are sent."
        alt="Small team around a table in a modern office"
      />

      {/* the honest bit, first */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-slab bg-chalk p-8 hairline sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.9vw,2.6rem)]">
                    <span className="text-ink">Don&rsquo;t see the right role</span>{" "}
                    <span className="text-faint">listed?</span>
                  </h2>
                  <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.7] text-muted">
                    Check out our current openings on Dice — we post new positions
                    there as they open.
                  </p>
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-muted">
                    If nothing fits right now, send us your resume anyway. We review
                    resumes on file first when a new role comes up, so it&rsquo;s a
                    solid way to get ahead of the next opening.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Btn href={diceUrl} variant="clay">
                      Current openings on Dice
                      <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Btn>
                    <Btn href={`mailto:${company.emails.jobs}`} variant="light">
                      <Envelope className="size-4" />
                      Send us your resume
                    </Btn>
                  </div>
                </div>

                <div className="rounded-2xl bg-cream p-6 hairline">
                  <Seal className="size-9" tone="light" />
                  <p className="mt-5 text-[14px] leading-[1.7] text-ink-soft">
                    Write to{" "}
                    <a
                      className="font-medium text-clay underline underline-offset-4"
                      href={`mailto:${company.emails.jobs}`}
                    >
                      {company.emails.jobs}
                    </a>{" "}
                    with your CV and a line about which practice interests you.
                  </p>
                  <p className="mt-5 flex items-start gap-2.5 text-[13px] leading-snug text-muted">
                    <Pin className="mt-0.5 size-4 shrink-0 text-clay" />
                    {rolesNote}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <IconGrid
        eyebrow="Why here"
        lead="What you get"
        trail="beyond the engagement."
        sub="Trainings on new technologies, and opportunities to work on product designs, proposal preparation and other educational activities."
        cols={3}
        items={[
          {
            icon: Graduation,
            title: "Training on new technology",
            body: "Structured time on platforms and tooling you have not shipped with yet.",
          },
          {
            icon: Blueprint,
            title: "Product design work",
            body: "Contribute to product design rather than only executing someone else's spec.",
          },
          {
            icon: DocEdit,
            title: "Proposals and pre-sales",
            body: "Shape how the work is scoped, not just how it is delivered.",
          },
        ]}
      />

      {/* tracks */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[20ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">The tracks we hire into</span>{" "}
              <span className="text-faint">when a seat opens.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 max-w-[58ch] text-[15px] leading-[1.7] text-muted">
              These are not live postings. They are the shapes we recruit for, so
              you can judge whether your background fits before you write.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-10">
            <Accordion
              defaultOpen={null}
              items={hiringTracks.map((r) => ({
                title: r.title,
                meta: r.education,
                body: (
                  <div className="pt-1">
                    <p className="text-[13.5px] text-muted sm:hidden">{r.education}</p>
                    <ul className="mt-3 flex flex-wrap gap-2 sm:mt-0">
                      {r.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-chalk px-3.5 py-2 text-[13px] text-ink-soft hairline"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              }))}
            />
          </Reveal>
        </Container>
      </section>

      {/* open application */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-slab ember-wash px-6 py-14 text-center text-white grain sm:px-12 sm:py-16">
              <h2 className="relative mx-auto max-w-[20ch] text-[clamp(1.7rem,4vw,2.6rem)]">
                <span className="text-white">We keep every CV</span>{" "}
                <span className="text-white/45">we are sent.</span>
              </h2>
              <p className="relative mx-auto mt-5 max-w-[46ch] text-[14.5px] leading-[1.65] text-white/60">
                No form, no tracking system that swallows it. It goes to a person.
              </p>
              <div className="relative mt-8 flex justify-center">
                <Btn href={`mailto:${company.emails.jobs}`} variant="light">
                  {company.emails.jobs}
                  <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Btn>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
