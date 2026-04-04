## Project setup

Run these commands to create a minimal Express + Prisma project inside a `myapp` folder:

```bash
mkdir myapp
cd myapp
npm init -y
npm install express dotenv @prisma/client@latest @prisma/adapter-pg pg
npm install -D prisma@latest typescript @types/express @types/pg @types/node tsx
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
npm run build
node dist/index.js
```

Add these to your project README or use them as a quick-start script.

