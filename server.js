var express = require('express');
var app = express();// create our app w/ express
var bodyParser = require('body-parser');// pull information from HTML POST (express4)

app.use('/public',express.static('public'));
app.use(express.static(__dirname + '/client'));                 
app.use(express.static(__dirname + '/client/app'));             // set the static files location /client/app will be /app for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded // support encoded bodies
app.use(bodyParser.json());                                     // parse application/json // support json encoded bodies
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// Application
app.get('*', function(req, res) {
    res.sendfile('./client/index.html');
});

app.listen(8080);
console.log("App listening on port 8080!");