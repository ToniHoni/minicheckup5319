var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

var counter = 0;
var timestamp = new Date();
var works = true;

function checkupAlive() {
  if(((new Date()) - timestamp) > 600000){
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
  res.send({"works" : works, "lastActive" : timestamp});
});

app.listen(process.env.PORT || 5000, function () {
  console.log('App listening on port ' + process.env.PORT);
});