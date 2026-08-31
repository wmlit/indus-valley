/**
 * Enquiry delivery.
 *
 * Talks to Resend's REST API over `fetch` rather than pulling in the `resend`
 * SDK — this project has four runtime dependencies and the job is one POST.
 * Moving to an SMTP relay later means rewriting `deliverEnquiry` and nothing
 * else; the server action only knows that it resolves or throws.
 */

const ENDPOINT = "https://api.resend.com/emails";
const TIMEOUT_MS = 10_000;

export type Enquiry = {
  name: string;
  email: string;
  org: string;
  interest: string;
  message: string;
};

/** Everything here is visitor input, so it must never reach HTML unescaped. */
function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Headers must stay on one line — a newline in `name` would otherwise ride along. */
function oneLine(s: string) {
  return s.replace(/[\r\n\t]+/g, " ").trim();
}

export async function deliverEnquiry(e: Enquiry): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is unset — cannot deliver enquiry");

  const to = process.env.CONTACT_TO || "info@indusvalley.com";
  /* From must be a domain Resend has verified. The visitor's address goes in
     reply_to instead: sending *as* them fails SPF and lands in spam. */
  const from = process.env.CONTACT_FROM || "Indus Valley website <website@indusvalley.com>";

  const rows: [string, string][] = [
    ["Name", e.name],
    ["Email", e.email],
    ["Company", e.org || "—"],
    ["Interest", e.interest || "—"],
  ];

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: oneLine(e.email),
      subject: oneLine(
        `Website enquiry — ${e.name}${e.interest ? ` · ${e.interest}` : ""}`,
      ),
      text: [...rows.map(([k, v]) => `${k}: ${v}`), "", e.message].join("\n"),
      html: [
        '<table cellpadding="0" cellspacing="0" style="font:14px/1.6 system-ui,sans-serif">',
        ...rows.map(
          ([k, v]) =>
            `<tr><td style="padding:2px 16px 2px 0;color:#6b625a">${k}</td>` +
            `<td style="padding:2px 0"><strong>${esc(v)}</strong></td></tr>`,
        ),
        "</table>",
        `<p style="font:14px/1.7 system-ui,sans-serif;white-space:pre-wrap">${esc(e.message)}</p>`,
      ].join(""),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 300)}`);
  }
}
