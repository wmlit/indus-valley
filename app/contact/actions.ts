"use server";

import { company } from "@/lib/site";
import { deliverEnquiry } from "@/lib/mail";
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

  try {
    await deliverEnquiry(values);
  } catch (err) {
    /* Log the whole enquiry, not just the error — if delivery is broken the
       server log is the only remaining copy of the lead. */
    console.error("[contact] delivery FAILED", { ...values, err });
    return {
      ok: false,
      message: `We could not send that just now. Please email ${company.emails.general} directly, or call ${company.phones.main} — your message is below so you can copy it.`,
      errors: {},
      // hand back what they typed; losing it on top of a failed send is worse
      values,
    };
  }

  return {
    ok: true,
    message: `Thanks ${values.name.split(" ")[0]} — your note is with us. If it's urgent, call ${company.phones.main}.`,
    errors: {},
    values: emptyValues,
  };
}
