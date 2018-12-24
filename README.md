# local-ssl-proxy-and-google-chrome

local ssl proxy and [Google Chrome](https://www.google.com/intl/ja_ALL/chrome/) for development

## Setup

install dependencies.

```console
$ npm install
```

start proxy server.

```console
$ node proxy.js
```

start Google Chrome for development.

```console
$ node chrome.js
```

open `https://www.wikipedia.org` with the Google Chrome.

if you see Octocat logo in https://www.wikipedia.org, it is successful.

## Libraries

- [chrome-launcher](https://github.com/GoogleChrome/chrome-launcher)
- [hoxy](http://greim.github.io/hoxy/)
- [pem](https://github.com/Dexus/pem)

you can also use [http-proxy](https://github.com/nodejitsu/node-http-proxy) and [node-forge](https://github.com/digitalbazaar/forge), perhaps.

## See also

- [List of Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)
- [Command-line options for proxy settings](https://www.chromium.org/developers/design-documents/network-settings#TOC-Command-line-options-for-proxy-settings)
- [Proxy Auto-Configuration (PAC) file](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file)
- [PAC Functions](http://findproxyforurl.com/pac-functions/)

## License

The MIT license.
