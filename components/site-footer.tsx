import Link from "next/link";
import { company, offices, services } from "@/lib/site";
import { ArrowRight, Container, Seal } from "./ui/primitives";
import { ContourField } from "./art/valley";

const quickLinks = [
  { label: "Company", href: "/company" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Get in touch", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden kiln-wash text-white grain">
      <ContourField
        tone="light"
        uid="footer-cf"
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[160%] w-[140%] -translate-x-1/2 opacity-[0.18]"
      />

      <Container className="relative">
        <div className="grid gap-12 pt-20 pb-14 sm:pt-24 md:grid-cols-[1.4fr_1fr_1fr_1.1fr] md:gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Seal className="size-8" tone="dark" />
              <span className="text-[17px] font-semibold tracking-[-0.02em]">
                Indus Valley
              </span>
            </div>
            <p className="mt-5 text-[14.5px] leading-[1.7] text-white/50">
              Every day at Indus Valley, we wake up with one sole focus — to provide
              our clients with the best IT solutions and help them optimize their
              operations.
            </p>
            <a
              href={`mailto:${company.emails.general}`}
              className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-medium text-white transition-colors hover:text-clay"
            >
              {company.emails.general}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <FooterCol title="Quick links">
            {quickLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.slice(0, 3).map((s) => (
              <FooterLink key={s.slug} href={s.href}>
                {s.title === "Enterprise Performance Management & BI" ? "EPM & BI" : s.title}
              </FooterLink>
            ))}
            <FooterLink href="/services/health-care#testing">Testing services</FooterLink>
          </FooterCol>

          <FooterCol title="Get in touch">
            <li className="text-[14px] text-white/50">
              <a className="transition-colors hover:text-white" href={`tel:${company.phones.main.replace(/[^\d]/g, "")}`}>
                {company.phones.main}
              </a>
            </li>
            <li className="text-[14px] text-white/50">
              <a className="transition-colors hover:text-white" href={`mailto:${company.emails.general}`}>
                {company.emails.general}
              </a>
            </li>
            <li className="text-[14px] text-white/50">
              Careers:{" "}
              <a className="transition-colors hover:text-white" href={`mailto:${company.emails.jobs}`}>
                {company.emails.jobs}
              </a>
            </li>
          </FooterCol>
        </div>

        {/* both offices */}
        <div className="grid gap-8 border-t border-white/10 py-10 sm:grid-cols-2 sm:gap-12">
          {offices.map((o) => (
            <div key={o.id}>
              <span className="micro text-white/35">
                {o.label} · {o.country}
              </span>
              <p className="mt-4 text-[14px] leading-[1.7] text-white/50">
                {o.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-[13px] text-white/35">Office hours {o.hours}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[12.5px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>©{new Date().getFullYear()} Indus Valley Consultant, Inc. All Rights Reserved.</p>
          <p className="micro text-white/25">
            Miamisburg · Hyderabad · Since {company.founded}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="micro text-white/35">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] text-white/50 transition-colors duration-200 hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
