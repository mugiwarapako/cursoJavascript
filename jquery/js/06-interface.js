'use strict';

$(document).ready(function(){
    console.log("hola");

    //mover elemento por la pagina
    $('.elemento').draggable();

    //cambiar de tamaños
    $('.elemento').resizable();

    //puedes seleccionar varios elementos de una lista
    //$('.lista-seleccionable').selectable();

    //ordenar elementos
    $('.lista-seleccionable').sortable({

        update: function( event, ui){
            console.log("A cambiado la lista");
        }
    });

    //droppable  
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo en el area");
        }
    });


    //efectos

    $('#mostrar').click(function(){
        $('.caja-efecto').toggle('shake', 4000);
    });


    //Tooltip
    $(document).tooltip();

    //Dialog para hacer popup

    $('#lanzar-pupop').click(function(){
        $('#popup').dialog();
    });


    //DatePicker

    $('#calendario').datepicker();


    //Tabs
    $('#pestanas').tabs();

});