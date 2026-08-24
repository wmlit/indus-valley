import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { IconGrid, Split } from "@/components/sections/bits";
import { CtaBand } from "@/components/sections/cta-band";
import { Offices } from "@/components/sections/offices";
import { ProofStrip } from "@/components/home/proof";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import { Compass, Handshake, Scales } from "@/components/ui/icons";
import { Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1996, Indus Valley Consultants has helped organizations solve complex technology and talent challenges — high-quality IT solutions and resource staffing that optimize operations and produce measurable results.",
};

const milestones = [
  {
    year: "1996",
    title: "Founded in Ohio",
    body: "Indus Valley opens in Miamisburg with a single conviction: understand the need before proposing the solution.",
  },
  {
    year: "2000s",
    title: "The payer practice",
    body: "Healthcare consulting takes shape around Facets, QNXT, AMISYS Advance, and later HealthRules.",
  },
  {
    year: "2010s",
    title: "Integration & EPM",
    body: "Middleware, B2B mappings, and enterprise performance management grow into full practices.",
  },
  {
    year: "Today",
    title: "Thirty years in",
    body: "Three core practices, a testing discipline across all of them, and 34+ enterprise clients who continue to trust us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        slot="COMPANY-HERO"
        px="16:9 · 2400×1350"
        eyebrow="About us"
        lead="One focus."
        trail="Thirty years."
        sub="At Indus Valley, we help organizations solve complex technology and talent challenges. We deliver high-quality IT solutions and resource staffing that optimize operations and produce measurable results — the same focus we have held since 1996."
        alt="Calm modern consulting office in mid-morning light"
      />

      <Split
        eyebrow="How we work"
        lead="Built on understanding,"
        trail="not assumptions."
        body="We do not believe in impossible challenges. For three decades we have started every engagement the same way: by understanding the client's real need before proposing anything. When the right solution already exists, we implement it. When it does not, we build it. That approach has made us a trusted partner to enterprise clients who keep coming back."
        bullets={[
          "Senior practitioners, not a bench of juniors",
          "Onsite, offshore, or blended delivery — matched to the work",
          "Experts who consistently deliver beyond expectations",
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
        eyebrow="What guides us"
        lead="Three values."
        trail="Nothing else is needed."
        cols={3}
        items={[
          {
            icon: Scales,
            title: "Integrity",
            body: "We tell you what we find — including when the best answer is that you do not need us.",
          },
          {
            icon: Compass,
            title: "Industry insight",
            body: "Thirty years of pattern recognition across payer systems, finance, integration, and technology delivery.",
          },
          {
            icon: Handshake,
            title: "Client satisfaction",
            body: "Our longevity is the result of trust earned over hundreds of engagements.",
          },
        ]}
      />

      <ProofStrip />

      <Offices
        eyebrow="Where we work"
        lead="Two offices."
        trail="One continuous working day."
        sub="Senior practitioners sit with the business in Ohio. Delivery continues in Hyderabad after the U.S. day ends — making true 24×7 support a reality, not a slogan."
      />

      <CtaBand />
    </>
  );
}
