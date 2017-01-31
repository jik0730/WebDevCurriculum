var querystring = require("querystring");
var url = require('url');

function start(res) {
    console.log("Request handler 'start' was called.");
    
    var body = '<html>'+'<head>'+
               '<meta http-equiv="Content-Type" content="text/html; '+
               'charset=UTF-8" />'+
               '</head>'+'<body>'+
               '이름을 입력하세요.'+'<br>'+
               '<form action="/hello" method="post">'+
               '<input type="text" name="text"></input>'+
               '<input type="submit" value="입력" />'+
               '</form>'+'</body>'+'</html>';

    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(body);
    res.end();
}

function hello(res, postData) {
    console.log("Request handler 'hello' was called.");
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.write("안녕하세요. "+ querystring.parse(postData).text +"님");
    res.end();
}

function foo(res, req) {
    console.log("Request handler 'foo' was called.");
    res.writeHead(200, {"Content-Type" : "text/plain"});
    if (req.method == "GET") {
        var query = url.parse(req.url).query;
        var bar = querystring.parse(query)["bar"];
        console.log(query, bar);
        if (bar == undefined) {
            res.write("No query");
        } else {
            res.write(bar);
        }
    } else if (req.method == "POST") {
        var query = url.parse(req.url).query;
        var bar = querystring.parse(query)["bar"];
        console.log(query, bar);
        if (bar == undefined) {
            res.write("No query");
        } else {
            res.write(bar);
        }
    } else {
        res.write("No method");
    }
    
    res.end();
}

exports.start = start;
exports.hello = hello;
exports.foo = foo;
