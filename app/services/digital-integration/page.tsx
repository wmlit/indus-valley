import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Split } from "@/components/sections/bits";
import { DeliveryModel } from "@/components/sections/engagements";
import { CtaBand } from "@/components/sections/cta-band";
import { OrderedStack, TangledStack } from "@/components/art/valley";
import { Compare } from "@/components/ui/compare";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import {
  Blueprint,
  CloudLink,
  Drag,
  Exchange,
  Gauge,
  NodeMesh,
} from "@/components/ui/icons";
import { Container, SectionHeading, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Digital Integration",
  description:
    "End-to-end, future-ready enterprise application integration — architectural consulting, process optimisation, hybrid integration, B2B services and EAI.",
};

const capabilities = [
  {
    icon: Blueprint,
    title: "Architectural Consulting",
    body: "Our enterprise architecture consulting starts with an assessment of your existing architecture programme against a benchmark.",
    span: "lg:col-span-2",
  },
  {
    icon: Gauge,
    title: "Process Optimization",
    body: "Get more done with less. That is the challenge today.",
    span: "",
  },
  {
    icon: CloudLink,
    title: "Hybrid Integration",
    body: "The world is not fully cloud-native, but it must behave as if it were. A best-in-class platform with a flexible, hybrid approach is a recipe for success.",
    span: "",
  },
  {
    icon: Exchange,
    title: "B2B Integration Services",
    body: "If your business environment is changing, it is a good time to optimize your existing assets and improve efficiency.",
    span: "",
  },
  {
    icon: NodeMesh,
    title: "Enterprise Application Integration",
    body: "When your systems and software work seamlessly together it is the backbone of your organization. When there is a disconnect, it weakens the enterprise.",
    span: "",
  },
];

export default function DigitalIntegrationPage() {
  return (
    <>
      <PageHero
        slot="DI-HERO"
        px="21:9 · 2800×1200"
        eyebrow="Digital Integration"
        lead="Your digital journey"
        trail="relies on integrations."
        sub="With innovative tools, intelligent methodologies, tested templates, carefully designed organisational frameworks and thirty years of experience, Indus Valley is a trustworthy integration partner."
        chips={["Hybrid integration", "B2B services", "EAI", "24×7 support"]}
        alt="Warm-lit data centre aisle in soft focus"
      />

      {/* the argument, made visually */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The problem, drawn"
              lead="Point-to-point works,"
              trail="right up until it doesn't."
              sub="Every new connection is cheap on its own. Forty of them, each owned by someone who has since left, is the thing that stops a modernisation programme."
              className="mx-auto"
            />
          </Reveal>

          <Reveal delay={140} className="mx-auto mt-12 max-w-[860px]">
            <Compare
              className="aspect-[16/10]"
              caption="Integration landscape"
              beforeLabel="Point to point"
              afterLabel="Integrated"
              before={<TangledStack />}
              after={<OrderedStack />}
            />
            <span className="micro mt-4 flex items-center justify-center gap-2 text-faint">
              <Drag className="size-4" />
              Drag to compare
            </span>
          </Reveal>
        </Container>
      </section>

      {/* capability bento */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[20ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">Re-imagining enterprises</span>{" "}
              <span className="text-faint">in this connected era.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Ico = c.icon;
              const accent = i === 0;
              return (
                <Reveal key={c.title} delay={i * 90} className={c.span}>
                  <div
                    className={cx(
                      "flex h-full flex-col rounded-slab p-7 transition-all duration-500 ease-out-soft sm:p-8",
                      accent
                        ? "ember-wash text-white grain"
                        : "bg-chalk hairline hover:-translate-y-1 hover:shadow-float",
                    )}
                  >
                    <span
                      className={cx(
                        "relative grid size-11 place-items-center rounded-xl",
                        accent ? "bg-white/12 text-white" : "bg-cream text-clay hairline",
                      )}
                    >
                      <Ico />
                    </span>
                    <h3
                      className={cx(
                        "relative mt-8 text-[18px] tracking-[-0.03em]",
                        accent ? "text-white" : "text-ink",
                      )}
                    >
                      {c.title}
                    </h3>
                    <p
                      className={cx(
                        "relative mt-3 max-w-[46ch] text-[13.5px] leading-[1.7]",
                        accent ? "text-white/60" : "text-muted",
                      )}
                    >
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Split
        eyebrow="Our services"
        lead="24×7 support,"
        trail="and an onsite–offshore build."
        body="Partner with us for end-to-end, future-ready enterprise application integration solutions that bring you closer to your organization's goals at a faster pace."
        bullets={[
          "24×7 support and maintenance",
          "Onsite – offshore model implementations",
          "Senior architects who stay through cutover",
        ]}
        media={<DeliveryModel />}
        flip
        className="pb-20 sm:pb-24"
      />

      <section id="delivery" className="scroll-mt-28 bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <Figure
              slot="DI-MESH"
              alt="Tangled cables resolving into one braided cord"
              ratio="21/9"
              px="2800×1200"
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="rounded-slab"
            />
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
