/**
 * Shared shape for the enquiry form. Kept out of `actions.ts` because a
 * "use server" module may only export async functions — anything else
 * arrives on the client as undefined.
 */

export type ContactState = {
  ok: boolean;
  message: string;
  errors: Partial<Record<"name" | "email" | "message", string>>;
  values: {
    name: string;
    email: string;
    org: string;
    interest: string;
    message: string;
  };
};

export const emptyValues: ContactState["values"] = {
  name: "",
  email: "",
  org: "",
  interest: "",
  message: "",
};

export const emptyContactState: ContactState = {
  ok: false,
  message: "",
  errors: {},
  values: emptyValues,
};
