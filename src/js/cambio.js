document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    carrousel();
    eventListeners();
}
// funcion para poder utilizar el icono de menu movil y poder ver las opciones del navegador
// APROBADO
function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click',navegacionResponsive);
}
//funcion que permite ocultar o mostrar las opciones
// APROBADO
function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }
    else{
        navegacion.classList.add('mostrar');
    }
}

// //genera las clases necesarias para que se generen los carrouseles en el INDEX y las paginas individuales
// // APROBADO
function carrousel(){
    const seleccion = document.getElementById('C-seleccion');
    const index = document.getElementById('index');
    if(seleccion){
        new Glider(seleccion,{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '#indicadores-seleccion',
            arrows: {
                prev: '#anterior-seleccion',
                next: '#siguiente-seleccion'},
            responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 740,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    }
    if(index){
        new Glider(document.getElementById('C-inmuebles'),{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '#indicadores1',
            arrows: {
                prev: '#anterior1',
                next: '#siguiente1'},
            responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 740,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  }
                }
              ]
                
        });
    
        new Glider(document.getElementById('C-departamentos'),{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '#indicadores2',
            arrows: {
                prev: '#anterior2',
                next: '#siguiente2'},
            responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 740,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  }
                }
              ]
                
        });
    
        new Glider(document.getElementById('C-terrenos'),{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '#indicadores3',
            arrows: {
                prev: '#anterior3',
                next: '#siguiente3'},
            responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 740,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  }
                }
              ]  
        });
    }
    
}