const http = require('http');
var server = http.createServer(
        function(req,res){
            res.writeHead(200)
            res.write("welcome to server");
            res.send();
            res.end();        
        }
);
server.listen(3300);
