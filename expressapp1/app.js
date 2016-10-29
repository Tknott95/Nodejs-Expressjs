var express = require('express'); //brings in express
var app = express();  //makes instance of express

var port = 8000;

//static dir  for statics or imports 
 app.use(express.static('public'));  //tells public dir is static dir if resorces not found call the req
 app.use(express.static('src/views'));
 app.use(express.static('bower_components')); //now everything in this file is available to index.hmtl etc

 app.get('/', function(req, res){    //what to do whn request comes in    ....  get will handle get rquest when comes in to '<link>'
    res.send("When other websites give you  yada yda yada ..");
 });  

 app.get('/routing', function(req, res){
     res.send('Aloha Routing');
 })  

 app.listen(port, function(err){
    console.log('The server is running on port '+ port);
 })