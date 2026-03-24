
# Cloudflare Worker + Prisma (Accelerate) Quick Setup

Follow these steps to create a Cloudflare Worker project and connect Prisma (Prisma Accelerate).

STEP 1: Create Worker project

```bash
npm create cloudflare@latest my-app -- --ts
cd my-app
```

STEP 2: Install Prisma

```bash
npm install prisma @prisma/client @prisma/extension-accelerate
```

STEP 3: Init Prisma

```bash
npx prisma init
```

STEP 4: Get DB string (MOST IMPORTANT)

- Go to the Prisma Accelerate dashboard and copy the MAIN DATABASE URL which looks like:

```
prisma://accelerate.prisma-data.net/?api_key=XXXX
```

- Put that accelerate connection string in your local secrets and env:



2. For local development (or other tools), add it to `.env` or `.dev.vars` depending on your workflow. Example `.env`:

```env
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=XXXX"
```

STEP 5: Add Prisma extension and schema changes (if needed)

- Update your `prisma/schema.prisma` as usual and reference `env("DATABASE_URL")`.

STEP 6: Generate client

```bash
npx prisma generate
```

STEP 7: (Optional) Create migrations locally

```bash
npx prisma migrate dev --name init
```

STEP 8: Run locally

```bash
npx wrangler dev
```
1. Add to your Wrangler secrets (so the Worker can access it):

```bash
npx wrangler secret put DATABASE_URL
# paste your prisma://accelerate... string when prompted
```

STEP 9: Deploy

```bash
npx wrangler deploy
```

Notes:
- Use `npx wrangler secret put DATABASE_URL` to securely provide the Accelerate connection string to Cloudflare Workers.
- Keep your `DATABASE_URL` secret — do not commit it to source control.
- If you need to update the Accelerate API key, copy the new `prisma://...` URL from the dashboard and update your Wrangler secret and `.env` accordingly.

