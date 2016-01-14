var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./server/controllers/authentication/authentication-controller');

mongoose.connect('mongodb://localhost:27017/mean-social');

app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res){
    // sendfile() is deprecated in favor of sendFile() in Express 4
    res.sendfile('index.html');
});

// Authentication
app.post('/api/user/signup', authenticationController.signup);

app.listen('3000', function(){
   console.log('Listening on port 3000');
});
