# Nx monorepo Angular + React

### How to install dependencies
`npm install --legacy-peer-deps`


### How to run individually
```text
npx nx serve angular-14-crud-example
```

```text
npx nx serve react-app
```

### How to build individually
```text
npx nx build angular-14-crud-example
```

```text
npx nx build react-app
```


### How to include react into Angular
1. Change `isProduction` to **true** in `apps/react-app/src/main.tsx`
2. Run `npx nx build react-app` (you should see `dist/apps/react-app/assets/index-....js`)
3. Check import path in `apps/angular-14-crud-example/src/app/app.component.ts` to `import '../../../../dist/apps
/react-app/assets/index-...';` file must be same you built react-app (`dist/apps/react-app/assets/index-....js`)
4. Run `npx nx serve angular-14-crud-example`
