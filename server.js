//Dependencies//
var express = require('express');
var serverConfig = require('./server_config.js');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = serverConfig.serverPort;
app.listen(process.env.PORT || port, function(){
  console.log('Listening');
});
