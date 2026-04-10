# Publish your package to npm

Follow these steps to publish a TypeScript package to npm.

- **Login:** run `npm login` and enter your npm credentials.

- **Set package name:** in `package.json` update the `name` field to your username and package, for example:

```
"name": "your-username/your-package-name"
```

- **Build / prepare dist:** compile/transpile your TypeScript into a `dist/` folder containing the `.js` and `.d.ts` files. Ensure `package.json` points to the compiled entry:

```
"main": "dist/index.js",
"types": "dist/index.d.ts",
"files": ["dist"]
```

- **Publish publicly:**

```
npm publish --access=public
```

- **Create a local tarball:** to inspect the package that will be published, run:

```
npm pack
```

- **What to publish:** only publish the compiled distribution and metadata. Include the `dist` folder, `package.json`, `tsconfig.json`, and `package-lock.json` (or `npm-shrinkwrap.json`). Do not publish your `.ts` source files. Use a `.npmignore` or the `files` field to exclude `.ts` files.

Example `.npmignore` (to avoid publishing TypeScript sources):

```
src/
*.ts
*.map
```

That's it — after `npm publish` your package will be available on the npm registry.

