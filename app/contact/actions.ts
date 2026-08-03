"use server";

import { company } from "@/lib/site";
import { emptyValues, type ContactState } from "./contact-state";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    org: String(formData.get("org") ?? "").trim(),
    interest: String(formData.get("interest") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // honeypot — bots fill every field they find
  if (String(formData.get("company_website") ?? "")) {
    return {
      ok: true,
      message: "Thanks — we'll be in touch.",
      errors: {},
      values: emptyValues,
    };
  }

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL.test(values.email)) errors.email = "That email address doesn't look right.";
  if (values.message.length < 10)
    errors.message = "A sentence or two about what you're running would help.";

  if (Object.keys(errors).length) {
    return { ok: false, message: "", errors, values };
  }

  // TODO: wire to a transport (SMTP relay, Resend, SES) or the CRM inbox.
  // Until then the enquiry is logged server-side and the page also shows the
  // direct mailto route, so nothing is silently dropped.
  console.info("[contact] enquiry received", {
    ...values,
    routeTo: company.emails.general,
  });

  return {
    ok: true,
    message: `Thanks ${values.name.split(" ")[0]} — your note is with us. If it's urgent, call ${company.phones.main}.`,
    errors: {},
    values: emptyValues,
  };
}
