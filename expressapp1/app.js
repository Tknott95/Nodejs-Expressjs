var express = require('express'); //brings in express
var app = express();  //makes instance of express

var port = 5280;

 app.get('/', function(req, res){    //what to do whn request comes in    ....  get will handle get rquest when comes in to '<link>'
    res.send("When other websites give you  yada yda yada ..");
 });  

 app.get('/routing', function(req, res){
     res.send('Aloha Routing');
 })  

 app.listen(port, function(err){
    console.log('The server is running on port '+ port);
 })