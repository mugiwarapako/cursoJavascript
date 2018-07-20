'use strict';

// JSON    JavaScript Object Notation

window.addEventListener('load', () =>{
    var pelicula = {
        titulo: "Batman V Superman",
        year: 2017,
        pais: "Estados Unidos"
    }
    
    var peliculas = [
        {
            titulo: "La bella y la besia",
            year: 2000,
            pais:"Estados Unidos"
        },
    
        pelicula
    
    ];
    
    
    var caja_peliculas = document.querySelector("#peliculas");
    
    console.log(caja_peliculas);
    
    for(let i in peliculas){
    
        let p = document.createElement("p");
    
        p.append(peliculas[i].titulo + " - " + peliculas[i].year);
        caja_peliculas.append(p);
    
    }
});
