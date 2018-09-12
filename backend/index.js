'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() =>{
        console.log("Conexion a la bas de datos establecida con exito!!");


        //Creacion del servidor

        app.listen(port, () =>{
            console.log("servidor corriendo correctamente en la url localhost:3700");
        });
        
    })
    .catch((error) =>{
        console.log(error);
    });