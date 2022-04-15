# My personal site

Here lives the source code for [willlaeri.com](https://willlaeri.com). It's just a [Next.js](https://nextjs.org/)
project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

First, make sure you are running the right version of Node.js locally. This step requires
[`nvm`](https://github.com/nvm-sh/nvm) if you don't have it installed already.

```bash
nvm use
```

Then, install package dependencies.

```bash
npm i
```

Finally, run the application in development mode locally.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

First, run the app locally in development mode.

```bash
npm run dev
```

In another terminal, you can run unit tests with [Jest](https://jestjs.io/)
and end-to-end testswith [Cypress](https://www.cypress.io/).

```bash
npm t
```

## Performance analysis

To run performance analysis on the app locally, first build the app for production.

```bash
npm run build && npm run start
```

Then, in another terminal you can run a [Lighthouse](https://developers.google.com/web/tools/lighthouse)
report on the running production build.

```bash
npm run analyze:local
```

You can also run the Lighthouse analysis against the website deployed to production.

```bash
npm run analyze:prod
```
