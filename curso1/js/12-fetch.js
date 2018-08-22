'use strict';

//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

getUsuarios()
    .then(data => data.json())
    .then(data => {
        listadoUsuarios(data);  
        return getInfo();
    })
    .then(data => {
        console.log(data);
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        console.log(user);
        mostrarJanet(user.data);
        
    })
    .catch(error =>{
        console.log(error);
        alert("Error en las peticiones");
    });
    


    function getUsuarios(){
        return fetch('https://jsonplaceholder.typicode.com/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo(){

        var profesor ={
            nombre: 'Francisco',
            apellidos: 'Diaz Castillo',
            url: 'pakodiazcastillo@gmail.com'
        }

        return new Promise((resolve, reject) =>{
            var profesor_string = "";
            
            setTimeout(() =>{
                profesor_string = JSON.stringify(profesor);

                if(typeof profesor_string != 'string' || profesor_string == ''){
                    return reject('error 1');
                }
    
                return resolve(profesor_string);
            }, 3000);

        });

        
    }

    function listadoUsuarios(usuarios){
        usuarios.map((users, i) =>{
            
            let nombre = document.createElement('h5');
            nombre.innerHTML = users.id + ' ' + users.name;

            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = 'none';
        });
    }


    function mostrarJanet(user){

        let nombre = document.createElement('h5');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.id + ' ' + user.first_name + ' ' + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';
        
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector(" #janet .loading").style.display = 'none';
        
    }