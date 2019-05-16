const express = require ("express");
const app = express();
const hostname = 'localhost';
const port = 8080;
const path = require ('path');


app.listen(port, hostname, () => {
  console.log(`Server OUR Chicken up and running at localhost:8080`);
});

app.use(express.static('C:/revature/revature-p2/'));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname + `/index.html`))
});

// execute a single shell command
//shell.exec('npm test --coverage', function(err){
 //   console.log('executed test');
//});