const FORM_ENDPOINT = "https://formsubmit.co/ajax/robertgray@gmail.com";

export type DirectFormType = "advertiser_inquiry" | "newsletter_signup" | "site_update_signup" | "correction_submission";

type FormPayload = Record<string, string>;

function trackSuccess(formType: DirectFormType) {
  const trackedWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  trackedWindow.dataLayer = trackedWindow.dataLayer || [];
  trackedWindow.dataLayer.push({ event: "form_submission_success", form_type: formType });
}

export async function submitDirectForm(formType: DirectFormType, payload: FormPayload) {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `[Laredo Politics] ${payload.subject || formType.replaceAll("_", " ")}`,
      _template: "table",
      form_type: formType,
      page_url: window.location.href,
      submitted_at: new Date().toISOString(),
      ...payload,
    }),
  });

  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = await response.json();
  } catch {
    // The HTTP status still provides a reliable fallback signal.
  }

  if (!response.ok || result.success === false || result.success === "false") {
    throw new Error(result.message || "The form could not be delivered.");
  }

  trackSuccess(formType);
  return result;
}
