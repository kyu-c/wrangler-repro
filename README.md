# Wrangler Uncaught TypeError Issue Repro


## Context
* This repo is mainly a copy of the [Tanstack Start starter example](https://github.com/tanstack/router/tree/main/examples/react/start-basic).
* On top of the starter example:
  * Modified [app.config.ts](./app.config.ts) to add `cloudflare-pages` preset and added [wrangler.toml](./wrangler.toml).
  *  Added a dependency `@privy-io/react-auth`.

## Reproduction Steps

```bash
npm install 
npm run build
npx wrangler --cwd dist/ pages dev
```


## Error
```
⎔ Starting local server..
✘ [ERROR] service core:user:repro: Uncaught TypeError: The "superCtor.prototype" property must be of type object. Received undefined

    at null.<anonymous> (node:util:80:15) in inherits
    at null.<anonymous> (y47r2axn7v.js:61337:5) in .wrangler/tmp/pages-3PQkUN/chunks/nitro/nitro.mjs
    at null.<anonymous> (y47r2axn7v.js:5:56) in __init
    at null.<anonymous> (y47r2axn7v.js:78256:1)
```