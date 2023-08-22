# Autoverify for Gmail

## Goal

- Detect when a OTP/verification code is sent to a user's Gmail
  - `querySelector` for `input` elem with telltale `id`/`class`/`data-testId`
  - Inspect the `label` or `aria-label` of inputs
- Find the email and extract the code
  - Option 🅰️: using Gmail API (requires Oauth & full account permissions)
  - Option 🅱️: using client-side JS in a Chrome extension (open Gmail tab, click on email, ...)
- Autofill it into the website and submit the form
- Delete or archive the email

