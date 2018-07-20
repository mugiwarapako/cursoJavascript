'use strict';

var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hour = fecha.getHours();
var minutes = fecha.getMinutes();
var seconds = fecha.getSeconds();

var textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El día es: ${day}
    La hora es: ${hour}
    Los minutos son : ${minutes}
    Los segundos son : ${seconds}

`; 


console.log(textoHora);