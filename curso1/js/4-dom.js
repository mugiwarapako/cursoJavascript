'use strict';


//DOM Document Object Model

function cambiaColor(color){
    caja.style.background = (color);
}

//conseguir elemento con un ID en concreto


//var caja = document.getElementById('micaja');
var caja = document.querySelector("#micaja");

caja.innerHTML = "se cambia el enunciado";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola 2";

console.log(caja);


//conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
var seleccion = document.querySelector("#miseccion");

var hr = document.createElement("hr");

seleccion.appendChild(hr);

for( let valor in todosLosDivs){

    if(typeof todosLosDivs[valor].textContent == 'string'){
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        seleccion.appendChild(parrafo);
    }
}
seleccion.appendChild(hr);


//Conseuir elementos por su clase css


var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');

for( let valor in divRojos){
    if(divRojos[valor].className == "rojo"){
        divRojos[valor].style.background = "red";
    }
}

for( let valor in divAmarillos){
    if(divAmarillos[valor].className == "amarillo"){
        divAmarillos[valor].style.background = "yellow";
    }
}



//Query Selector


var id = document.querySelector('#encabezado');
console.log(id);

var claseRojo = document.querySelector('div.rojo');
console.log(claseRojo);


