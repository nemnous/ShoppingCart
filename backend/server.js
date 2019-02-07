var express = require('express');
var controller = require('controllers');

var app = express();
var cor = require('cors');

var corsOptions = {
    origin: "http://127.0.0.1",
    optionSuccessStatus:200,
}


app.use(express.static('./files'));

app.use(cor());

controller(app);

