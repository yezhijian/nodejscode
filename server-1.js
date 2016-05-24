var http=require("http"), hostname="localhost", port=3000;

var server=http.createServer(function(req, res){
        console.log(req.headers);
        //res.setEncoding("utf8");
        res.writeHead(200,"winter is comming",{"Content-Type":"text/html","charset":"utf8"});
        res.write("<html><head><meta charset='UTF-8'></head>");
        res.end("<body><H1></H1><p>My first web response </p></body></body></html>");
});

server.listen(port, hostname, function(){
        console.log(`server now is listening at http://${hostname}:${port}, Winter is coming.`);
})