CharacterData: UTF_8
var http = require('http');
http.createServer(function(req,res){
    res.write("Hello World! Velkominn í Node");
    res.end();
})
.listen(8080);