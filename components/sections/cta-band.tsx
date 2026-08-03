import { company } from "@/lib/site";
import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import { Envelope, Phone } from "../ui/icons";
import { ArrowRight, Btn, Container, Seal } from "../ui/primitives";

/* ------------------------------------------------------------------
   Closing call to action — shared by every page
------------------------------------------------------------------- */

export function CtaBand() {
  return (
    <section className="bg-cream pb-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-slab px-6 py-16 text-center sm:px-12 sm:py-24">
            <Figure
              slot="TEXTURE-CLAY"
              alt="Macro texture of unglazed fired terracotta"
              px="21:9 · 2800×1200"
              sizes="(max-width: 1180px) 100vw, 1180px"
              tone="kiln"
              scrim="full"
              fill
              className="-z-10"
            />

            <div className="relative flex flex-col items-center">
              <Seal className="size-11" tone="dark" />
              <h2 className="mt-7 max-w-[20ch] text-[clamp(2rem,5vw,3.2rem)]">
                <span className="text-white">Let&apos;s discuss how we can</span>{" "}
                <span className="text-white/45">make your business better.</span>
              </h2>
              <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.65] text-white/65">
                Tell us what you are running and what is in the way. We will tell you
                honestly whether we are the right people for it.
              </p>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <Btn href={`mailto:${company.emails.general}`} variant="light">
                  <Envelope className="size-4" />
                  {company.emails.general}
                  <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Btn>
                <Btn
                  href={`tel:${company.phones.main.replace(/[^\d]/g, "")}`}
                  className="border-0 bg-white/12 text-white backdrop-blur-md hairline-light hover:bg-white/22"
                >
                  <Phone className="size-4" />
                  {company.phones.main}
                </Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
