import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { IconGrid, Split } from "@/components/sections/bits";
import { CtaBand } from "@/components/sections/cta-band";
import { Offices } from "@/components/sections/offices";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import { Compass, Handshake, Scales } from "@/components/ui/icons";
import { Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Since 1996, Indus Valley Consultants has devoted its expertise to understanding client needs — finding the best solution, or building one where none exists.",
};

const milestones = [
  {
    year: "1996",
    title: "Founded in Ohio",
    body: "Indus Valley opens in Miamisburg with a single conviction: understand the client's need before proposing anything.",
  },
  {
    year: "2000s",
    title: "The payer practice",
    body: "Healthcare consulting takes shape around Facets, and later HealthRules and AMISYS Advance.",
  },
  {
    year: "2010s",
    title: "Integration & EPM",
    body: "Middleware, B2B mappings and enterprise performance management grow into full practices of their own.",
  },
  {
    year: "Today",
    title: "Thirty years in",
    body: "Three practices, a testing discipline across all of them, and 34+ enterprise clients who keep calling back.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        slot="COMPANY-HERO"
        px="16:9 · 2400×1350"
        eyebrow="About us"
        lead="One focus,"
        trail="for thirty years."
        sub="Every day at Indus Valley we wake up with one sole focus — to provide our clients with the best IT solutions and help them optimize their operations."
        alt="Calm modern consulting office in mid-morning light"
      />

      <Split
        eyebrow="Since 1996"
        lead="We simply don't believe"
        trail="in impossible challenges."
        body="Since 1996 we have devoted our expertise to understanding client needs — to find them the best solution, or build one if none is available. We are especially adept at offering customised solutions for unique needs. And since trust comes with time, Indus Valley has grown to become the benchmark for quality IT consulting over the thirty years we have been in existence."
        bullets={[
          "Senior practitioners, not a bench of juniors",
          "Onsite, offshore or blended — whatever the work needs",
          "No matter what you need, our experts deliver over and above expectations",
        ]}
        media={
          <Figure
            slot="COMPANY-OFFICE"
            alt="Two colleagues in conversation at a whiteboard"
            ratio="3/2"
            px="1800×1200"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="rounded-slab"
          />
        }
        className="pt-20 sm:pt-24"
      />

      {/* timeline */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">How we got here,</span>{" "}
              <span className="text-faint">four turns in the road.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-slab bg-line sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal
                key={m.year}
                delay={i * 90}
                className={cx(
                  "relative flex flex-col p-6 sm:p-7",
                  i === milestones.length - 1 ? "ember-wash text-white" : "bg-chalk",
                )}
              >
                <span
                  className={cx(
                    "grid size-4 place-items-center rounded-full",
                    i === milestones.length - 1 ? "bg-white/15" : "bg-cream hairline",
                  )}
                >
                  <span
                    className={cx(
                      "size-1.5 rounded-full",
                      i === milestones.length - 1 ? "bg-clay" : "bg-faint",
                    )}
                  />
                </span>
                <span
                  className={cx(
                    "mt-5 text-[26px] leading-none font-medium tracking-[-0.04em] tnum",
                    i === milestones.length - 1 ? "text-white" : "text-ink",
                  )}
                >
                  {m.year}
                </span>
                <span
                  className={cx(
                    "mt-4 text-[15px] font-medium",
                    i === milestones.length - 1 ? "text-white" : "text-ink",
                  )}
                >
                  {m.title}
                </span>
                <span
                  className={cx(
                    "mt-2 text-[13px] leading-[1.6]",
                    i === milestones.length - 1 ? "text-white/55" : "text-muted",
                  )}
                >
                  {m.body}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <IconGrid
        eyebrow="What guides it"
        lead="Three values,"
        trail="and no fourth."
        sub="This mission is guided by our three core values. Everything else is a consequence of them."
        cols={3}
        items={[
          {
            icon: Scales,
            title: "Integrity",
            body: "We tell you what we find, including when the answer is that you do not need us.",
          },
          {
            icon: Compass,
            title: "Industry insight",
            body: "Thirty years of pattern recognition across payer systems, finance and integration.",
          },
          {
            icon: Handshake,
            title: "Client satisfaction",
            body: "Our vast experience is a testament to the client trust we have gained over the years.",
          },
        ]}
      />

      <Offices />

      <CtaBand />
    </>
  );
}
