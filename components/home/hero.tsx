import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import { ArrowRight, Btn, Container } from "../ui/primitives";

export function Hero() {
  return (
    <section className="relative isolate flex h-[94svh] min-h-[640px] flex-col justify-end overflow-hidden">
      <Figure
        slot="HOME-HERO"
        alt="Aerial view of a braided river delta at golden hour"
        px="16:10 · 2880×1800"
        sizes="100vw"
        priority
        scrim="bottom"
        fill
      />

      <Container className="relative pb-14 sm:pb-16">
        <Reveal delay={60}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[11.5px] font-medium text-white backdrop-blur-md hairline-light">
            <span className="size-1.5 rounded-full bg-clay" />
            IT services &amp; consulting since 1996
          </span>
        </Reveal>

        <Reveal delay={160} as="h1" className="mt-7 max-w-[15ch] text-[clamp(2.7rem,7.2vw,5.6rem)] leading-[0.95]">
          <span className="block text-white">Unlocking value</span>
          <span className="block text-white/60">through continuous innovation</span>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 border-t border-white/20 pt-6">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <p className="max-w-[44ch] text-[15px] leading-[1.65] text-white/70 sm:text-base">
                Healthcare payer systems, enterprise performance management and
                digital integration — delivered by practitioners who have done it
                before, for thirty years.
              </p>

              <div className="flex shrink-0 flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Btn href="/services" variant="light">
                  See what we do
                  <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Btn>
                <Btn
                  href="/contact"
                  className="border-0 bg-white/12 text-white backdrop-blur-md hairline-light hover:bg-white/22"
                >
                  Start a conversation
                </Btn>
              </div>
            </div>

            <div className="micro mt-7 flex items-center justify-between text-white/40">
              <span>Est. 1996</span>
              <span className="hidden sm:block">34+ enterprise clients</span>
              <span>Miamisburg, Ohio</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
