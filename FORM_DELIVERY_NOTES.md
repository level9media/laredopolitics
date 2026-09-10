# Direct Form Delivery Notes

FormSubmit provides an AJAX endpoint at `https://formsubmit.co/ajax/your@email.com`. Its official example uses `POST`, `Content-Type: application/json`, `Accept: application/json`, and a JSON request body. This lets a visitor submit without leaving the website or opening an email application.

The recipient must activate the form from the confirmation email sent after the first submission. FormSubmit retains pending submissions for 30 days and delivers them after activation. Until activation, repeated submissions can generate repeated activation emails. Check Gmail spam if the activation email is not visible.

Sources:

- https://formsubmit.co/ajax-documentation
- https://formsubmit.co/help

## Activated and verified

Rob activated FormSubmit for the current Manus-hosted origin on September 9, 2026. A post-activation API request returned HTTP 200 with `{"message":"The form was submitted successfully.","success":"true"}`. Gmail verification confirmed receipt at `robertgray@gmail.com` for both `[Laredo Politics] FINAL SYSTEM DELIVERY TEST` and `[Laredo Politics] New Laredo Brief signup`.

The frontend contains no `mailto:` links. Advertiser inquiries, homepage newsletter signups, resource-page site-update signups, and correction/source submissions all use the same direct AJAX delivery client and do not open the visitor's email application. Successful submissions also push `form_submission_success` with a `form_type` into `dataLayer` for future GTM reporting.

When the public origin changes from the Manus preview hostname to `laredopolitics.com`, submit one test and complete another FormSubmit activation if prompted.

## Production-domain repair — September 9, 2026

The screenshot failure was caused by **FormSubmit activation being scoped to the previous Manus preview origin**. Production requests from `https://laredopolitics.com/` and `https://laredopolitics.com/advertise` generated new activation messages instead of delivering submissions.

Both production routes were activated through the FormSubmit confirmation links on September 9, 2026. The existing AJAX integration can now submit from the homepage and advertiser page without opening the visitor's email application. The destination remains `robertgray@gmail.com` and is not printed in the public interface.

A Web3Forms migration was evaluated as a domain-independent fallback. Its access-key onboarding is protected by CAPTCHA, so it was not substituted without the site owner completing that external onboarding step. The immediate production fix is the verified FormSubmit activation plus stronger client-side diagnostics and a published fallback route.

A live browser test from `https://laredopolitics.com/advertise` after activation returned HTTP **200** with `{"success":"true","message":"The form was submitted successfully."}`. The production advertiser form is therefore accepting direct AJAX submissions again without opening an email client.

## Encrypted-endpoint and cross-route verification — September 9, 2026

The token-like value found in FormSubmit email records is **not** a valid recipient alias: the production browser returned HTTP 200 with `success:false` and `Email address ... is not formatted correctly`. The implementation therefore continues to use the activated `robertgray@gmail.com` AJAX endpoint. The next verification is to submit from a non-homepage production path to confirm whether activation applies to the full `laredopolitics.com` host rather than one pathname.

The follow-up production test submitted from `/campaign-finance` to the shared AJAX endpoint and returned HTTP **200** with `success:true`. Activation is therefore valid across the `laredopolitics.com` host, not limited to the homepage or advertiser pathname. Homepage advertiser inquiries, newsletter signups, candidate questionnaires, corrections, and update signups can continue to share this endpoint.

After deploying the supplied rate sheet, the actual homepage advertiser form was filled and submitted through its React UI with the `small-square` package. The form displayed the success state, cleared its fields, and showed no error. This verifies the complete visitor path rather than only the underlying endpoint.
Gmail search confirmed receipt at `robertgray@gmail.com` with subject **[Laredo Politics] Advertising inquiry — SYSTEM TEST — DO NOT CONTACT** at 01:52 UTC on September 10, 2026.
