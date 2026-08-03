import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { IconGrid } from "@/components/sections/bits";
import { CtaBand } from "@/components/sections/cta-band";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import {
  Blueprint,
  Browser,
  Database,
  Graduation,
  HealthCare,
  HexChain,
  NodeMesh,
  ShieldCheck,
  TargetState,
} from "@/components/ui/icons";
import { Container, Headline } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Blockchain",
  description:
    "Through BlockRock Technologies, Indus Valley develops, maintains and evaluates blockchain products — strategy, prototyping, smart contracts, Hyperledger and dApps.",
};

const sectors = [
  {
    slot: "BLK-SECTOR-1",
    icon: HealthCare,
    title: "Healthcare",
    body: "Traceability and provenance where records cross organisational boundaries and nobody owns the whole chain.",
    alt: "Orderly healthcare records room in warm light",
  },
  {
    slot: "BLK-SECTOR-2",
    icon: Graduation,
    title: "Education",
    body: "Credentialing and verification that survives outside the institution that issued it.",
    alt: "Empty university lecture hall at golden hour",
  },
];

export default function BlockchainPage() {
  return (
    <>
      <PageHero
        slot="BLK-HERO"
        px="16:9 · 2400×1350"
        eyebrow="BlockRock Technologies"
        lead="Blockchain,"
        trail="without the hand-waving."
        sub="Blockchain is changing the way the world lives and works. Our clients are visionary enterprises who have understood it can be a tremendous asset — and who have also realised the extent of the complexity."
        alt="Interlocking frosted glass hexagonal plates"
      />

      {/* the argument */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <Reveal>
              <Headline
                lead="Highly technical,"
                trail="emerging, and constantly evolving."
                className="text-[clamp(1.8rem,3.9vw,2.7rem)]"
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col gap-5 text-[15px] leading-[1.75] text-muted">
                <p>
                  At our blockchain wing, BlockRock Technologies, we develop,
                  maintain and evaluate blockchain and cryptocurrency related
                  products — and advise clients to clarify their understanding of
                  the subject.
                </p>
                <p>
                  BlockRock helps you work in a smarter way, reducing risks and
                  improving traceability and security. Our enterprise consulting
                  solutions are powered by engineers with deep knowledge and
                  extensive experience delivering blockchain globally.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <IconGrid
        eyebrow="Business value we add"
        lead="Eight places"
        trail="this actually pays off."
        items={[
          { icon: TargetState, title: "Strategy assessment" },
          { icon: Blueprint, title: "Rapid prototyping" },
          { icon: NodeMesh, title: "Blockchain consulting" },
          { icon: Browser, title: "NFTs" },
          { icon: ShieldCheck, title: "Smart contracts", body: "Solidity, RUST & PACT" },
          { icon: Database, title: "Hyperledger" },
          { icon: HexChain, title: "Multichain & crosschain" },
          { icon: Browser, title: "dApp design and development" },
        ]}
      />

      {/* sectors */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">Two sectors</span>{" "}
              <span className="text-faint">where it earns its keep.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {sectors.map((s, i) => {
              const Ico = s.icon;
              return (
                <Reveal key={s.slot} delay={i * 110}>
                  <div className="group relative overflow-hidden rounded-slab">
                    <Figure
                      slot={s.slot}
                      alt={s.alt}
                      ratio="3/2"
                      px="1400×933"
                      sizes="(max-width: 768px) 100vw, 570px"
                      scrim="bottom"
                      className="transition-transform duration-900 ease-out-soft group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <span className="grid size-10 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md hairline-light">
                        <Ico />
                      </span>
                      <h3 className="mt-4 text-[21px] text-white">{s.title}</h3>
                      <p className="mt-2 max-w-[36ch] text-[13.5px] leading-[1.6] text-white/65">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
