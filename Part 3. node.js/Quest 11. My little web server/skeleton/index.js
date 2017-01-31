var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/hello"] = requestHandlers.hello;
handle["/foo"] = requestHandlers.foo;

server.start(router.route, handle);

