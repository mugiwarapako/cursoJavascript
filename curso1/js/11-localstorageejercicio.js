'use strict';

var formulario_add = document.querySelector("#formulario-peliculas");

formulario_add.addEventListener("submit", () =>{
    let text_pelicula = document.querySelector("#pelicula").value;

    if(text_pelicula.length > 0){
        localStorage.setItem(text_pelicula, text_pelicula);
    }

    let ul = document.querySelector("#listPeliculas");

    for(let i in localStorage){

        if(typeof localStorage[i] == 'string'){
            
            let li = document.createElement("li");

            li.append(localStorage[i]);
            ul.append(li);

        }

    }

});



var formulario_remove = document.querySelector("#formulario-borrar-peliculas");

formulario_remove.addEventListener("submit", () =>{

    let text_pelicula_remove = document.querySelector("#pelicula-borrar").value;

    console.log("**********************");
    
    if(text_pelicula_remove.length > 0){
        localStorage.removeItem(text_pelicula_remove);
    }

});