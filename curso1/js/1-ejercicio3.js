'use strict';

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/


var numero1;
var numero2;

do{
     
    numero1 = parseInt(prompt("Ingresa el primero numero", 0));
    numero2 = parseInt(prompt("Ingresa el segundo numero", 0));

}while(isNaN(numero1) || isNaN(numero2));


if(numero1 == numero2){

    alert("Numeros iguales");

}else if(numero1 > numero2){

    for(var i = numero1-1; i > numero2; i--){

        console.log(i);

    }

}else if(numero1 < numero2){

    for(var i = numero1+1; i < numero2; i++){

        console.log(i);

    }

}