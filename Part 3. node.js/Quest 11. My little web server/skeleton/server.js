var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        // TODO: 이 곳을 채워넣으세요..!
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");

        req.setEncoding("utf8");
        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
                postDataChunk + "'.");
        });

        req.addListener("end", function() {
            route(pathname, handle, res, postData, req);
        });
    }
    http.createServer(onRequest).listen(8080);
    console.log("Server has started.");
}

exports.start = start;