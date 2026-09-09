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
