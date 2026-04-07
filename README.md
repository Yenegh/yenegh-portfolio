# David Portfolio Starter

A minimal Next.js starter tailored for a calm architecture portfolio.

## 1. Open in VS Code
Open the `portfolio-starter` folder in Visual Studio Code.

## 2. Install dependencies
Run this in the terminal:

```bash
npm install
```

## 3. Start the local site

```bash
npm run dev
```

Then open `http://localhost:3000`

## 4. Files you will edit most

- `data/projects.ts` → add or edit projects
- `app/page.tsx` → homepage text
- `app/archive/page.tsx` → archive intro text
- `app/projects/[slug]/page.tsx` → project page layout
- `public/images/...` → replace placeholder images with your own

## 5. Add a new project
Duplicate one of the project objects in `data/projects.ts` and change:

- `slug`
- `number`
- `title`
- `year`
- `category`
- `scale`
- `status`
- `summary`
- `scope`
- `tags`
- `body`
- `images`

## 6. Replace placeholder images
Put your own files inside a folder such as:

```text
public/images/panuku-housing/
```

Then update the `src` paths in `data/projects.ts`.

## 7. Good next additions
Once this is working, add:

- `/about`
- `/writing`
- filters on archive
- better typography
- a contact footer

## 8. Deploy later
This starter is best deployed on Vercel.
