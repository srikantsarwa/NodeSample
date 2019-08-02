var http = require("http");
const appInsights = require("applicationinsights");
appInsights.setup("28dbedcf-8d0f-4576-b859-aa387d7588b8");
appInsights.start();

var server = http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World Sample in Node JS\n' + 'Env variable selected is ' + process.env.TESTVAR);
 });

 var port = process.env.PORT || 1337;
 server.listen(port);
 
 console.log("Server running at http://localhost:%d", port);
