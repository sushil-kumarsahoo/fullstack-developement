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
