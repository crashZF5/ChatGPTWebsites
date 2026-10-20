# Adeel Husain — cinematic portfolio

A responsive, dependency-free website prototype. Node.js 20+ is sufficient.

## Develop

```sh
npm run dev
```

The development server uses port 3000. Override with `PORT` if required. Run `npm run check` for JavaScript syntax validation. No build or dependency installation is required. The `public` folder can be deployed to a static hosting provider directly.

## Content to finalize

This is a client review prototype, not an official published portfolio. Replace the AI-generated portrait interpretation with the client's original, licensed photographs before launch. All three work categories currently use treatments of the same concept portrait; they are not production stills. Supply approved credits, showreel, interviews, writing, biography, representation details, and contact address. Dialogs explicitly identify unavailable content; no inquiries are submitted and no film credits or writing are fabricated.

Fonts use Google Fonts when available, with local serif/sans-serif fallbacks. Reduced-motion preferences are respected. No analytics or external video embeds are loaded.

## GitHub Pages

The Pages workflow deploys `public` on pushes to `main`. In repository Settings → Pages, select **GitHub Actions** as the build source. Asset URLs are relative so the site works under the repository subpath as well as on a custom domain.
