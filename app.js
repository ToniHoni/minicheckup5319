var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

var counter = 0;
var timestamp = new Date();
var works = true;

function checkupAlive() {
  if(((new Date) - timestamp) > 60000){
  	works = false;
  }else{
  	works = true;
  }
  setTimeout(checkupAlive, 10000);
}

setTimeout(checkupAlive, 10000);

app.get('/heartbeat', function (req, res) {
	console.log("Got a connection");
  timestamp = new Date();
  res.send();
});

app.get('/checkup', function (req, res) {
  res.send(works);
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});