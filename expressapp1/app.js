var express = require('express'); //brings in express
var app = express();  //makes instance of express

var port = 5280;

app.listen(port, function(err){
    console.log('The server is running on port '+ port);
})