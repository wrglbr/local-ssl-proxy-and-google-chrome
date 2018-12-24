/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file
 */
function FindProxyForURL(url, host) {
  if (shExpMatch(host, 'www.wikipedia.org')) {
    return 'PROXY 127.0.0.1:8888';
  }

  return 'DIRECT';
}

// vim:ft=javascript:
