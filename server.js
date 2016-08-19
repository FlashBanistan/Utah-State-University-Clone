//Dependencies//
var express = require('express');
var serverConfig = require('./server_config.js');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = serverConfig.serverPort;
app.listen(port, function(){
  console.log('Listening on port ', port);
});
