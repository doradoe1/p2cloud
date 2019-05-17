const fs = require('fs');

console.log("Creating Resource. Please wait ...");

fs.readFile('/html/app.html', 'utf8', function(error, data) {
    if(err){
        console.log(err);
    }else{
    console.log(data.toString());
    }
});



