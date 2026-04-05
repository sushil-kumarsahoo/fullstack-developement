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

## Docker

Build the image and run the container (PowerShell):

```powershell
#create docker image
docker build -t backend-app .
#run docker container
docker run -p 3000:3000 backend-app
# Run in background (detached):
docker run -d -p 3000:3000 backend-app
# pass env to docker
docker run -p 3000:3000 -e DATABASE_URL="postgresql://postgres:mypassword@host.docker.internal:5432/mydb" backend-app
```


## Environment Variables

This project requires a `DATABASE_URL` to connect to PostgreSQL.

### Option 1 — `.env` file (recommended for local dev)

Create a `.env` file in the root:

```env

DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### Option 2 — Terminal inline

**Mac/Linux:**
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname" node dist/index.js
```

**Windows:**
```powershell
$env:DATABASE_URL="postgresql://user:password@localhost:5432/dbname"; node dist/index.js
```

### Option 3 — Docker
```bash
docker run -p 3000:3000 -e DATABASE_URL="postgresql://user:password@host.docker.internal:5432/dbname" backend-app
```

### Option 4 — package.json script
Install cross-env first:
```bash
npm install cross-env
```
Then add to `package.json`:
```json
"start": "cross-env DATABASE_URL=postgresql://user:password@localhost:5432/dbname node dist/index.js"
```
```

If you need a `Dockerfile` or a minimal `index.ts`/`index.js` to test, I can add one.

