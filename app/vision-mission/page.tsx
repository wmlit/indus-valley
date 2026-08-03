import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProofStrip } from "@/components/home/proof";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import { Compass, Handshake, Scales } from "@/components/ui/icons";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "The far-sighted vision Indus Valley was founded on, and the mission that drives it — integrity, industry insight and client satisfaction.",
};

const values = [
  { icon: Scales, label: "Integrity" },
  { icon: Compass, label: "Industry insight" },
  { icon: Handshake, label: "Client satisfaction" },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Mission"
        lead="What we are"
        trail="building toward."
        sub="Two statements. Both have been true since 1996, and both are still the reason people call us back."
      />

      {/* vision — full bleed */}
      <section className="relative isolate flex min-h-[520px] items-end overflow-hidden sm:min-h-[620px]">
        <Figure
          slot="VISION-HORIZON"
          alt="Wide river valley horizon at first light"
          px="21:9 · 2800×1200"
          sizes="100vw"
          scrim="bottom"
          fill
        />
        <Container className="relative py-14 sm:py-20">
          <Reveal>
            <span className="micro text-white/60">Vision</span>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-[26ch] text-[clamp(1.6rem,3.6vw,2.5rem)] leading-[1.2] tracking-[-0.03em] text-white">
              The foundation of Indus Valley rests on the far-sighted vision
              established at its inception.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[52ch] text-[15px] leading-[1.7] text-white/65">
              Thirty years later, we take pride in being the most reliable IT
              services and consulting partner to clients worldwide. Moving
              forward, our goal is to further enhance our services to provide
              unmatched offerings to all our clients.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* mission — kiln slab */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="relative grid overflow-hidden rounded-slab kiln-wash text-white grain lg:grid-cols-[1.25fr_1fr]">
              <div className="relative p-8 sm:p-12">
                <span className="micro text-white/45">Mission</span>
                <p className="mt-6 max-w-[24ch] text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.2] tracking-[-0.03em] text-white">
                  A commitment to overcoming challenges through tailored
                  solutions, optimized for results.
                </p>
                <p className="mt-7 max-w-[52ch] text-[14.5px] leading-[1.7] text-white/55">
                  When anyone asks us what drives us, the answer is always simple.
                  Today we pride ourselves on our vast experience in the industry
                  — a testament to the client trust we have gained over the years.
                </p>

                <ul className="mt-10 flex flex-wrap gap-2">
                  {values.map(({ icon: Ico, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded-full bg-white/10 py-2.5 pr-4 pl-3 text-[13.5px] font-medium text-white hairline-light"
                    >
                      <Ico className="size-4 text-clay" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <Figure
                slot="MISSION-FORM"
                alt="Matte clay sphere resting in a frosted glass bowl"
                ratio="1/1"
                px="1600×1600"
                tone="kiln"
                sizes="(max-width: 1024px) 100vw, 460px"
                className="relative"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <ProofStrip />
      <CtaBand />
    </>
  );
}
