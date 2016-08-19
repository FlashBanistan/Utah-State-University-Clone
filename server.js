//Dependencies//
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = serverConfig.serverPort;
app.listen(process.env.PORT || port, function(){
  console.log('Listening');

