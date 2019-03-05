var express = require('express');
var app = express();

var counter = 0;
var timestamp = new Date();
var fuck = false;

function checkupAlive() {
  if(((new Date) - timestamp) > 60000){
  	fuck = true;
  }else{
  	fuck = false;
  }
  setTimeout(checkupAlive, 10000);
}

setTimeout(checkupAlive, 10000);

app.get('/heartbeat', function (req, res) {
	console.log("Got a connection");
  timestamp = new Date();
});

app.get('/checkup', function (req, res) {
  res.send(fuck);
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});