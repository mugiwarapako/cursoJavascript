'use strict';

//LocalStorage


//comprobar que el localstorage (almacenamiento local) esta disponible

if(typeof localStorage !== 'undefined'){
    console.log("si");
}else{
    console.log("no");
}

//Guardar datos

localStorage.setItem("titulo","curso de javascript");


//recuperar datos
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


//Guardar Objeto

var usuario = {
    nombre: "Francisco",
    apellidos: "Diaz Castillo",
    email: "pakodiazcastillo@gmail.com"
}

localStorage.setItem("usuario" , JSON.stringify(usuario));


//recuperar objeto

var usuarioJS = JSON.parse(localStorage.getItem("usuario"));


console.log(usuarioJS);
document.querySelector("#peliculas").append("Nombre " + usuarioJS.nombre);



//borrar elementolocalstogare
localStorage.removeItem("usuario");


//limpiar localstorage

localStorage.clear();
