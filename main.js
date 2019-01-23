var http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 });

 var port = process.env.PORT || 1337;
 server.listen(port);
 
 console.log("Server running at http://localhost:%d", port);