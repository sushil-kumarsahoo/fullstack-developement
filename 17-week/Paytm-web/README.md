(PostCSS config for `apps/user-app`)

```javascript
export default {
	plugins: {
		"@tailwindcss/postcss": {},
	},
};
```

To install Tailwind and PostCSS in `apps/user-app` run:

```bash
cd apps/user-app
npm install tailwindcss @tailwindcss/postcss postcss

```

then add paths to global.css file for files in packages folder 
``` @import "tailwindcss";
@source "../../../packages/ui/src/**/*.{js,ts,jsx,tsx}";
```

then create a db folder inside packages folder 
add a package.json file and and change type to module

``` 
npx init -y 
```
change package.json to 
```
"name": "@repo/db",
```

then initialize typescript  and change types to node in ts config
```
npx tsc --init 
```
add this in tsconfig

```
"extends": "@repo/typescript-config/react-library.json"
```

then initialize prisma
```  
npx prism init  
```

then install prisma 
```
npm install prisma @prisma/client --save-dev

```

Run postgres inside a docker container

```
docker run --name postgres-db -e POSTGRES_USER=myuser1 -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=my-db -p 5432:5432 -d postgres

```
migrate the db and generate client

```
npx prisma migrate dev    # creates migration + generates client

npx prisma generate

```

to check the table was created or not after migration

```
docker exec -it docker-id /bin/bash

 psql -U username -d databasename

 \dt;

 ```

 ### Enter into terminal inside docker
 ```
 docker exec -it docker-id /bin/bash

 ``` 

 ### to check tables
 ```
 psql -U username -d databsename

  \dt

  
 ```

 ### add exports to json of db folder

 ```
 "exports": {
    ".": "./src/index.ts"
  }

  ```
  ### add this to json of your app 

  ```
  "@repo/db":"*"
  ```

 #### Use a Singleton Prisma Client
 
Prisma opens database connections. If every file creates a new instance, you may hit too many connections with PostgreSQL.


```
const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    accelerateUrl: undefined as any
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
```
then export through index.ts file in src folder

### to initialize an express app first to initialize package.json and tsconfig.json
``` 
npm init -y

npx tsc --init

```

## Git workflow

Follow these steps to create a feature branch, push it, open a PR, and clean up afterwards:

1. Start from latest `main`
```bash
git checkout main
git pull origin main
```

2. Create a new branch (example `add-payment`)
```bash
git checkout -b add-payment
```

3. Make changes and commit
```bash
git add .
git commit -m "your message"
```

4. Push branch to GitHub
```bash
git push origin add-payment
```

5. Create a Pull Request on GitHub and merge it there.

6. Update local `main` after merge
```bash
git checkout main
git pull origin main
```

7. Delete the feature branch (cleanup)

- Local delete:
```bash
git branch -d add-payment
```
- Remote delete:
```bash
git push origin --delete add-payment
```

Full flow: `main` → create branch → work → push → PR → merge → pull → delete branch


