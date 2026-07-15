# Olive & Ember Mediterranean Kitchen

Standalone static website for **Olive & Ember Mediterranean Kitchen**, a Mediterranean catering brand focused on boxed meals and tray catering.

## Stack

- Vite
- React
- TypeScript
- Plain CSS
- Static GitHub Pages deployment
- FormSubmit contact form, no backend

## Project Structure

```text
oliveandember/
  .github/workflows/deploy.yml
  public/
  src/
    assets/
      images/
      styles/
    components/
    data/
    App.tsx
    main.tsx
  index.html
  package.json
  vite.config.ts
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Updating Content

Most menu content lives in:

```text
src/data/menu.ts
```

Edit that file to update:

- Menu categories
- Menu item names
- Descriptions
- Prices
- Featured category cards
- Tray catering packages
- Trust strip items

## Replacing Images

Images live in:

```text
src/assets/images/
```

Use lowercase, hyphenated filenames, for example:

```text
chicken-shawarma-bowl.jpg
tray-catering-spread.jpg
baklava.jpg
```

After adding a new image, import it in `src/data/menu.ts` and assign it to the menu item or section that should use it.

Keep images reasonably compressed before committing. For GitHub Pages, JPG images around 200-500 KB are usually much better than multi-megabyte PNG exports.

## Contact Form

The quote form uses FormSubmit:

```tsx
<form action="https://formsubmit.co/oandekitchen@gmail.com" method="POST">
```

To change the recipient email, update `formEmail` in:

```text
src/components/QuoteForm.tsx
```

FormSubmit may require first-time email confirmation when the form is first submitted.

## GitHub Pages Deployment

The site is configured for the GitHub repository name:

```text
olivenemberkitchen
```

That base path is set in:

```text
vite.config.ts
```

```ts
base: "/olivenemberkitchen/"
```

When code is pushed to `main`, GitHub Actions builds the site and deploys the `dist` folder to GitHub Pages.

Expected Pages URL format:

```text
https://asadamini.github.io/olivenemberkitchen/
```

## Pushing Changes

After making edits:

```bash
git status
npm run build
git add .
git commit -m "Update Olive and Ember site"
git push
```

The deploy workflow runs automatically after the push to `main`.

## Notes

- This project intentionally does not include Figma Make boilerplate.
- It does not include a backend.
- It is safe to host as a static site.
- Keep future backend/order integrations separate until the brand site needs them.
