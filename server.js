
const express = require('express'), http = require('http'), path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/small-wonder'));

app.listen(process.env.PORT||4200);


// PathLocationStrategy

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/small-wonder/index.html'));
});


console.log('Console listening!');
