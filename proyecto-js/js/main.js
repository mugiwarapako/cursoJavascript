$(document).ready(function(){

    if(window.location.href.indexOf('index') >-1){
        //slider
        $(function(){
            $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            adaptiveHeight: true
            });
        });

        var prublicar = 'Publicado el dia ';
        //post
        var posts = [
            {
                title:'Prueba de titulo 1',
                date: prublicar + moment().format('dddd D MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada risus sed fermentum condimentum. Maecenas vitae augue a velit tristique tristique vel et ex. Suspendisse potenti. Aliquam ullamcorper semper dolor sed molestie.In eu ligula arcu. Maecenas facilisis sem sed tortor sodales luctus. Mauris tempor condimentum risus eu pharetra. Sed lacinia massa ut luctus placerat. Maecenas a enim at metus pharetra euismod. Nunc a mattis libero. Proin tristique tortor sed ultricies ultricies. Quisque sollicitudin, nisi et convallis faucibus, eros orci tempus mi, nec scelerisque est leo sit amet magna. Pellentesque dictum aliquam lorem, feugiat lobortis eros malesuada pretium. '
            },
            {
                title:'Prueba de titulo 2',
                date: prublicar + moment().format('dddd D MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada risus sed fermentum condimentum. Maecenas vitae augue a velit tristique tristique vel et ex. Suspendisse potenti. Aliquam ullamcorper semper dolor sed molestie.In eu ligula arcu. Maecenas facilisis sem sed tortor sodales luctus. Mauris tempor condimentum risus eu pharetra. Sed lacinia massa ut luctus placerat. Maecenas a enim at metus pharetra euismod. Nunc a mattis libero. Proin tristique tortor sed ultricies ultricies. Quisque sollicitudin, nisi et convallis faucibus, eros orci tempus mi, nec scelerisque est leo sit amet magna. Pellentesque dictum aliquam lorem, feugiat lobortis eros malesuada pretium. '
            },
            {
                title:'Prueba de titulo 3',
                date: prublicar + moment().format('dddd D MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada risus sed fermentum condimentum. Maecenas vitae augue a velit tristique tristique vel et ex. Suspendisse potenti. Aliquam ullamcorper semper dolor sed molestie.In eu ligula arcu. Maecenas facilisis sem sed tortor sodales luctus. Mauris tempor condimentum risus eu pharetra. Sed lacinia massa ut luctus placerat. Maecenas a enim at metus pharetra euismod. Nunc a mattis libero. Proin tristique tortor sed ultricies ultricies. Quisque sollicitudin, nisi et convallis faucibus, eros orci tempus mi, nec scelerisque est leo sit amet magna. Pellentesque dictum aliquam lorem, feugiat lobortis eros malesuada pretium. '
            },
            {
                title:'Prueba de titulo 4',
                date: prublicar + moment().format('dddd D MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada risus sed fermentum condimentum. Maecenas vitae augue a velit tristique tristique vel et ex. Suspendisse potenti. Aliquam ullamcorper semper dolor sed molestie.In eu ligula arcu. Maecenas facilisis sem sed tortor sodales luctus. Mauris tempor condimentum risus eu pharetra. Sed lacinia massa ut luctus placerat. Maecenas a enim at metus pharetra euismod. Nunc a mattis libero. Proin tristique tortor sed ultricies ultricies. Quisque sollicitudin, nisi et convallis faucibus, eros orci tempus mi, nec scelerisque est leo sit amet magna. Pellentesque dictum aliquam lorem, feugiat lobortis eros malesuada pretium. '
            },
            {
                title:'Prueba de titulo 5',
                date: prublicar + moment().format('dddd D MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada risus sed fermentum condimentum. Maecenas vitae augue a velit tristique tristique vel et ex. Suspendisse potenti. Aliquam ullamcorper semper dolor sed molestie.In eu ligula arcu. Maecenas facilisis sem sed tortor sodales luctus. Mauris tempor condimentum risus eu pharetra. Sed lacinia massa ut luctus placerat. Maecenas a enim at metus pharetra euismod. Nunc a mattis libero. Proin tristique tortor sed ultricies ultricies. Quisque sollicitudin, nisi et convallis faucibus, eros orci tempus mi, nec scelerisque est leo sit amet magna. Pellentesque dictum aliquam lorem, feugiat lobortis eros malesuada pretium. '
            }
        ]


        posts.forEach(function(item, index){
            post = `
                <article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${item.date}</span>
                            <p>
                                ${item.content}
                            </p>
                            <a href="#" class="button-more">Leer Mas </a>
                    </article>
            `;

            $('#posts').append(post);
        });
    }

    if(localStorage.getItem('theme') == undefined || localStorage.getItem('theme') == null){
        localStorage.setItem("theme", "css/green.css");
    }


    //selector de tema

    var theme = $('#theme');

    theme.attr("href", localStorage.getItem('theme'));

    $('#to-green').click(function(){
        localStorage.setItem("theme", "css/green.css");
        theme.attr("href", localStorage.getItem('theme'));
    });

    $('#to-red').click(function(){
        localStorage.setItem("theme", "css/red.css");
        theme.attr("href", localStorage.getItem('theme'));
    });

    $('#to-blue').click(function(){
        localStorage.setItem("theme", "css/blue.css");
        theme.attr("href", localStorage.getItem('theme'));
    });


    //scroll arriba de la web

    $('.subir').click(function(e){

        e.preventDefault();

        $('html, body').animate({
            scrollTop  :0
        },500 );

        return false;
    });


    //login falso

    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null || form_name != undefined){
        var about_p = $('#about p');
        about_p.html("<br /><strong>Bienvenido" +form_name+ "</strong>");
        about_p.append('<br /><a href="#" id="logout">Cerrar sesión</a>');
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon
    if(window.location.href.indexOf('about') > 0){
        $('#acordeon').accordion();

    }

    if(window.location.href.indexOf('reloj') > -1){
        
        //cada segundo hacer algo con el setInterval
        setInterval(function(){
            var reloj = moment().format('hh:mm:ss');

            $('#reloj').html(reloj);
        },1000);

    }

    if(window.location.href.indexOf('contact') > -1){
        
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePsition:'top',
            scrollToTopOnError: true,
            onError : function($form) {
                console.log('Validation of form failed!');
              },
              onSuccess : function($form) {
                console.log('The form  is valid!');
                return false; // Will stop the submission of the form
              },
          });

    }

   
    
});