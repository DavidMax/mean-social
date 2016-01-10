var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('');

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.listen('3000', function(){
   console.log('Listening for Local Host 3000');
});
