var bandsObj = require('./info/bands.json');

var http = require('http');

var server = new http.Server();

server.listen(6130, '127.0.0.1');

console.log("6130");

server.on('/request', function(req, res){
    console.log(req.data);
    var band = JSON.stringify(bandsObj.bands[2]);
    res.writeHead(200, {"Context-Type": "text/plain"});
    res.write(band);
    res.end();
});