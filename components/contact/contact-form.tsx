"use client";

import { useActionState } from "react";
import { submitEnquiry } from "@/app/contact/actions";
import { emptyContactState } from "@/app/contact/contact-state";
import { ArrowRight, cx } from "../ui/primitives";
import { CheckCircle } from "../ui/icons";

const interests = [
  "Health Care — payer systems",
  "Enterprise Performance Management & BI",
  "Digital Integration",
  "Testing Services",
  "Blockchain",
  "Something else",
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, emptyContactState);

  if (state.ok) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-slab bg-chalk p-8 text-center hairline sm:p-12">
        <span className="grid size-14 place-items-center rounded-full bg-clay-wash text-clay">
          <CheckCircle className="size-7" />
        </span>
        <h2 className="mt-6 text-[22px] text-ink">Message sent.</h2>
        <p className="mt-3 max-w-[38ch] text-[14.5px] leading-[1.7] text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-slab bg-chalk p-7 hairline sm:p-9">
      <h2 className="text-[21px] tracking-[-0.03em] text-ink">
        Tell us what you&apos;re running
      </h2>
      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-muted">
        We read every message. Expect a reply from a person, not a sequence.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Your name"
            name="name"
            defaultValue={state.values.name}
            error={state.errors.name}
            autoComplete="name"
            required
          />
          <Field
            label="Work email"
            name="email"
            type="email"
            defaultValue={state.values.email}
            error={state.errors.email}
            autoComplete="email"
            required
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Organisation"
            name="org"
            defaultValue={state.values.org}
            autoComplete="organization"
          />
          <label className="flex flex-col gap-2">
            <span className="micro text-faint">What it's about</span>
            <select
              name="interest"
              defaultValue={state.values.interest}
              className="h-12 rounded-xl bg-cream px-4 text-[14.5px] text-ink hairline outline-none transition-colors focus:bg-clay-wash"
            >
              <option value="">Select a practice…</option>
              {interests.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="micro text-faint">Your message</span>
          <textarea
            name="message"
            rows={5}
            required
            defaultValue={state.values.message}
            placeholder="The systems involved, what's in the way, and any date you're working to."
            className={cx(
              "resize-y rounded-xl bg-cream px-4 py-3.5 text-[14.5px] leading-[1.6] text-ink outline-none transition-colors placeholder:text-faint focus:bg-clay-wash",
              state.errors.message ? "ring-1 ring-clay" : "hairline",
            )}
          />
          {state.errors.message ? (
            <span className="text-[12.5px] text-clay-deep">{state.errors.message}</span>
          ) : null}
        </label>

        {/* honeypot */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="absolute -left-[9999px] size-px opacity-0"
        />

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-clay px-6 text-sm font-medium text-white shadow-lift transition-all duration-300 hover:bg-clay-deep active:scale-[0.98] disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send message"}
            <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
          <p aria-live="polite" className="text-[12.5px] text-muted">
            Or email us directly — every address is listed below.
          </p>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  defaultValue,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  defaultValue?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="micro text-faint">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className={cx(
          "h-12 rounded-xl bg-cream px-4 text-[14.5px] text-ink outline-none transition-colors placeholder:text-faint focus:bg-clay-wash",
          error ? "ring-1 ring-clay" : "hairline",
        )}
      />
      {error ? <span className="text-[12.5px] text-clay-deep">{error}</span> : null}
    </label>
  );
}
