(Git ignore and TS include/exclude suggestions)

Add the following to `.gitignore`:

```gitignore
node_modules/
dist/
src/generated/
```

TypeScript `tsconfig.json` snippets — include and exclude settings:

```json
"include": [
	"src/**/*"
],
"exclude": [
	"node_modules",
	"dist",
	"prisma",
	"src/generated",
	"src/generated/**/*"
]
```

Notes:
- `dist/` is commonly added to `.gitignore` because it contains build artifacts.
- `src/generated/` is usually generated code (Prisma client, codegen), so it should be excluded from source control if you regenerate it during build.

Prisma: run migrations and generate client

```bash
# Apply migrations to your development database (creates migration files)
npx prisma migrate dev --name init

# Or give a custom name:
npx prisma migrate dev --name your_migration_name

# Generate the Prisma client (run after changing schema)
npx prisma generate
```
