/**
 * Created by Sufiyan on 8/31/2016.
 */
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var express      = require('express');
var logger       = require('morgan');
var path         = require('path');
var http         = require('http');
var passportHttp=require('passport-http');
var passport = require('passport')
    ,LocalStrategy=require('passport-local').Strategy;
var cors                = require('cors');

var port = process.env.PORT || '3000';
var app = express();
app.use( cors() );
app.use(logger('dev'));
app.use(express.static(path.resolve(__dirname, '../public/app/')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());


//require('./models')(app, bearer, moment, mongoose);

//************ Mongodb *********
require('./config')(app,mongoose,passport,LocalStrategy);
require('./models')(app,mongoose,passport,LocalStrategy);
require('./controllers')(app, mongoose,passport,LocalStrategy);
require('./routes.js')(app, mongoose,passport,LocalStrategy);



app.listen(port, function () {
    console.log("server is listening on port : ", port);
}).timeout = 25000;
