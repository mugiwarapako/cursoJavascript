'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//archivos de rutas
var projectRouters = require('./rutes/project');

//middlewares
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

//CORS


//rutas
app.use('/api', projectRouters);




//exportar modulo

module.exports = app;