import type { Metadata } from "next";
import { company, diceUrl } from "@/lib/site";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Btn, Container, Seal } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Current openings at Indus Valley Consultants are posted on Dice. Here is what we hire for, and where to send your resume so we reach you first when a seat opens.",
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
        sub="We hire across consulting, data engineering and integration throughout the year — openings go up on Dice, and we keep every resume we are sent."
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
                  <div className="mt-8 flex">
                    <Btn href={diceUrl} variant="clay">
                      Current openings on Dice
                      <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Btn>
                  </div>
                </div>

                <div className="rounded-2xl bg-cream p-6 hairline">
                  <Seal className="size-9" tone="light" />
                  <p className="mt-5 text-[14px] leading-[1.7] text-ink-soft">
                    Email your resume to{" "}
                    <a
                      className="font-medium text-clay underline underline-offset-4"
                      href={`mailto:${company.emails.jobs}`}
                    >
                      {company.emails.jobs}
                    </a>{" "}
                    along with a quick note on which practice interests you.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* open application */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-slab ember-wash px-6 py-14 text-center text-white grain sm:px-12 sm:py-16">
              <h2 className="relative mx-auto max-w-[20ch] text-[clamp(1.7rem,4vw,2.6rem)]">
                <span className="text-white">We keep every resume</span>{" "}
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
