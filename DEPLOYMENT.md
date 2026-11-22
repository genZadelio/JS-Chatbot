# Deployment and trust policy

This project is published at **https://js-chatbot-adelio.netlify.app/**. GitHub Pages must remain disabled for this repository while the shared `genzadelio.github.io` host is under Google Safe Browsing review.

No hosting platform can guarantee that a URL will never be reviewed or flagged. These release rules reduce avoidable trust, credential, privacy, and deceptive-interface risks.

## Required release checklist

- Keep the visible educational-demo disclosure and the local-processing statement.
- Do not add sign-in, credential, API-key, or personal-data forms to the static demo.
- Keep chat messages local unless a reviewed server-side proxy is intentionally added; never embed an API secret in browser code.
- Do not present sample responses as live AI output or imply affiliation with an AI provider.
- Do not commit API keys, tokens, credentials, or other secrets.
- Keep the Netlify canonical URL and `og:url` aligned with the primary public deployment.
- Keep the restrictive `Content-Security-Policy`, including `form-action 'none'` and a narrow `connect-src`.
- Confirm the published page has the expected title, disclosure, and no unexpected forms before making it primary.
- If GitHub Pages is ever re-enabled, repeat the content review and Safe Browsing check first.

## Deployment

Netlify uses the repository root as its publish directory and reads `netlify.toml` for security headers. There is no build step.
