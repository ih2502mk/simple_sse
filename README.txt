Simple SSE
==========

Integrates SSE with drupal to enable asynchronous updates.

* SSE works only on modern browsers.
* Module assumes you use apache with mod_rewrite and mod_proxy (Although I'm not quite sure about mod_proxy)

Usage:

# Go to server_js, run `npm install`
# Run `node sse_server.js &` - this will spin up a node server on port 8080 on your localhost
# Update some nodes - there should be some console logs in the console.
