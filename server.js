var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/mean-social');

app.get('/', function(req, res){
    // sendfile() is deprecated in favor of sendFile() in Express 4
    res.sendfile('index.html');
});

app.listen('3000', function(){
   console.log('Listening on port 3000');
});
