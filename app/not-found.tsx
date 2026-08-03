import { ContourField } from "@/components/art/valley";
import { ArrowRight, Btn, Container, Seal } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[86svh] items-center overflow-hidden bg-cream">
      <ContourField
        uid="nf-cf"
        className="pointer-events-none absolute inset-0 size-full opacity-40"
      />
      <Container className="relative py-32 text-center">
        <div className="flex flex-col items-center">
          <Seal className="size-11" tone="light" />
          <span className="micro mt-8 text-clay">404</span>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(2.2rem,5.4vw,3.6rem)]">
            <span className="text-ink">This page isn&apos;t</span>{" "}
            <span className="text-faint">on the map.</span>
          </h1>
          <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.65] text-muted">
            The address may have changed, or the page may have been retired. The
            services, the company and the way to reach us are all still here.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Btn href="/" variant="solid">
              Back to home
              <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Btn>
            <Btn href="/services" variant="light">
              Browse services
            </Btn>
          </div>
        </div>
      </Container>
    </section>
  );
}
