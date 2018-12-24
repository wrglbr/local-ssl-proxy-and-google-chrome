const path = require('path');

const { launch } = require('chrome-launcher');

const origins = [
  'https://www.wikipedia.org'
].join(',');

launch({
  chromeFlags: [
    '--allow-insecure-localhost',
    '--ignore-certificate-errors',
    `--unsafely-treat-insecure-origin-as-secure=${origins}`,
    `--proxy-pac-url=file://${path.resolve(__dirname, 'proxy.pac')}`
  ],
  userDataDir: path.resolve(__dirname, '.chrome')
});
