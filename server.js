'use strict';
//import modules
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require("cors");
var Bird = require('./api/models/birdDataModel');
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Birddb'); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/birdDataRoutes'); //importing route
routes(app); //register the route


app.listen(port, ()=> {
    console.log('bird data RESTful API server started on: ' + port);
});


