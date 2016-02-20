var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {  
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', function (req, res) {  
  var url = req.params.query;
  res.json(obj);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});