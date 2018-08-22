'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() =>{
        console.log("Conexion a la bas de datos establecida con exito!!");
    })
    .catch((error) =>{
        console.log(error);
    });