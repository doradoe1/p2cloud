const express = require ("express");
const app = express();
const port = 8080;
const path = require ('path');

app.use(express.static(__dirname));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname + `./index.html`))
});

app.listen(port, () => 
  console.log(`Server OUR Chicken up and running at ${port}`)
);

//const http = require('http');
//const fs = require('fs');
//http.createServer(function (req, res) {
 // fs.readFile('index.html', function(err, data) {
  //  res.writeHead(200, {'Content-Type': 'text/html'});
   // res.write(data);
    //res.end();
  //});
//}).listen(8080);