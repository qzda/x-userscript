# X/Twitter Userscript

## Features

- Support hidden Nav: Grok, Messages, and Communities

![](./image/demo1.png)

## Install

Requires the browser to have the [Tampermonkey](https://www.tampermonkey.net/index.php) plugin installed.

[Github](https://raw.githubusercontent.com/qzda/x-userscript/main/dist/x-userscript.user.js)

## Dev

This project is built using [Bun](https://bun.sh/).

```bash
bun i
bun dev
# $ NODE_ENV=dev bun run ./build.ts
# 🧹  Cleaned up dist directory.
# 🔥  Built user-script.
# 📦  Bundled     => dist/x-userscript.user.js
```

Add the `dist/x-userscript.user.js` file to Tampermonkey.
