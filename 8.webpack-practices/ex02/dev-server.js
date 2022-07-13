var http = require('http');
var path = require('path');
var express = require('express');

var port = 9090;

var application = express().use(express.static(path.join(__dirname, 'public')));
http
    .createServer(application)
    .on('listening', function(){
        console.log('http server running on ' + port);
    })
    .listen(port);