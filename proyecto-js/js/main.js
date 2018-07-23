$(document).ready(function(){

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



    //selector de tema

    var theme = $('#theme');

    $('#to-green').click(function(){
        console.log("verde");
        theme.attr("href", "css/green.css");
    });

    $('#to-red').click(function(){
        theme.attr("href", "css/red.css");
    });

    $('#to-blue').click(function(){
        theme.attr("href", "css/blue.css");
    });
});