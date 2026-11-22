# JS Chatbot — educational chat interface demo

JS Chatbot is a small, responsive browser chat interface built with HTML, CSS, and vanilla JavaScript.

- **Live demo:** https://js-chatbot-adelio.netlify.app/
- **Source:** https://github.com/genZadelio/JS-Chatbot

## Demo safeguards

- No login, sign-up, API-key, credential, or personal-data form
- No embedded secret or API key
- Messages are processed locally and are never sent to an AI service
- No chat-history storage by this static client
- Educational interface only; no affiliation with Google or any AI provider

The GitHub Pages deployment should remain disabled while the shared `genzadelio.github.io` host is under Google Safe Browsing review.

## Run locally

From this directory:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

The repository root is the Netlify publish directory. `netlify.toml` applies security headers and a restrictive Content Security Policy. The page has no build step.
