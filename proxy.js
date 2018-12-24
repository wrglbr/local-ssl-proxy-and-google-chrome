const path = require('path');
const util = require('util');

const hoxy = require('hoxy');
const pem = require('pem');

pem.createCertificate({
  days: 1,
  selfSigned: true
}, function(err, keys) {
  if (err) {
    throw err;
  }

  const proxy = hoxy.createServer({
    certAuthority: {
      key: keys.serviceKey,
      cert: keys.certificate
    }
  });

  proxy.intercept({
    phase: 'request',
    hostname: 'www.wikipedia.org',
  }, function(req, resp, cycle) {
    return cycle.serve({
      docroot: path.resolve(__dirname, 'overrides', req.hostname),
      strategy: 'overlay'
    });
  });

  proxy.listen(8888);
});
