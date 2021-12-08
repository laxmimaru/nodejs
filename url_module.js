const url = require('url');
address = "https://nodejs.org/docs/latest-v15.x/api/buffer.html#buffer_static_method_buffer_from_array";
url_det = url.parse(address,true);

console.log("hostname  = " + url_det.hostname);
console.log("search  = " + url_det.search);
console.log("pathname  = " + url_det.pathname);
