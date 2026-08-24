import type { Metadata } from "next";
import { company, contacts, faqs } from "@/lib/site";
import { FaqSection, Split } from "@/components/sections/bits";
import { DeliveryModel } from "@/components/sections/engagements";
import { Offices } from "@/components/sections/offices";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { Clock, Envelope, Phone, Pin } from "@/components/ui/icons";
import { Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Talk to Indus Valley Consultants — Miamisburg, Ohio. info@indusvalley.com, 937-660-4748. Marketing, HR and finance contacts for every department.",
};

export default function ContactPage() {
  return (
    <>
      {/* opener + form, together above the fold */}
      <section className="bg-cream pt-32 pb-20 sm:pt-40 sm:pb-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <span className="micro text-clay">Get in touch</span>
              </Reveal>
              <Reveal delay={90} as="h1" className="mt-6 max-w-[13ch] text-[clamp(2.4rem,5.4vw,4rem)]">
                <span className="text-ink">We&apos;d love to</span>{" "}
                <span className="text-faint">hear from you.</span>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-6 max-w-[44ch] text-[15px] leading-[1.7] text-muted sm:text-base">
                  Tell us what you are running and what is in the way. We will tell
                  you honestly whether we are the right people for it.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <ul className="mt-9 flex flex-col gap-4">
                  <QuickRow icon={<Envelope className="size-4" />} href={`mailto:${company.emails.general}`}>
                    {company.emails.general}
                  </QuickRow>
                  <QuickRow
                    icon={<Phone className="size-4" />}
                    href={`tel:${company.phones.main.replace(/[^\d]/g, "")}`}
                  >
                    {company.phones.main}
                  </QuickRow>
                  <QuickRow icon={<Pin className="size-4" />}>{company.address}</QuickRow>
                  <QuickRow icon={<Clock className="size-4" />}>
                    Office hours {company.hours}
                  </QuickRow>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* departments */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">Catch us here,</span>{" "}
              <span className="text-faint">department by department.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-slab bg-line sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c, i) => (
              <Reveal key={c.dept} delay={i * 80} className="flex flex-col bg-chalk p-6 sm:p-7">
                <span className="micro text-faint">{c.dept}</span>
                <div className="mt-6 flex flex-col gap-3">
                  {c.email ? (
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-2.5 text-[14px] text-ink transition-colors hover:text-clay"
                    >
                      <Envelope className="size-4 text-clay" />
                      {c.email}
                    </a>
                  ) : null}
                  <a
                    href={`tel:${c.phone.replace(/[^\d]/g, "")}`}
                    className="flex items-center gap-2.5 text-[14px] text-ink transition-colors hover:text-clay"
                  >
                    <Phone className="size-4 text-clay" />
                    {c.phone}
                  </a>
                </div>
              </Reveal>
            ))}
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

      <Offices
        eyebrow="Catch us in person"
        lead="Two offices,"
        trail="eleven and a half hours apart."
        sub="The Ohio office owns the engagement. Hyderabad picks it up as the US day ends — between them the working day does not really stop."
      />

      <FaqSection items={faqs} lead="Before you write," trail="these come up a lot." />
    </>
  );
}

function QuickRow({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-chalk text-clay hairline">
        {icon}
      </span>
      <span className={cx("text-[14.5px] leading-snug", href ? "text-ink" : "text-muted")}>
        {children}
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-3.5 transition-colors hover:text-clay">
          {inner}
        </a>
      ) : (
        <span className="flex items-center gap-3.5">{inner}</span>
      )}
    </li>
  );
}
