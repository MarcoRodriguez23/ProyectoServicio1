// // //variables globales
// let anunciosCarrusel=12;
// let arregloCantidades = [];

// document.addEventListener('DOMContentLoaded',function(){
//     iniciarApp();
// });

// function iniciarApp(){
//     ObtenerInfo();
//     eventListeners();
// }
// // funcion para poder utilizar el icono de menu movil y poder ver las opciones del navegador
// // APROBADO
// function eventListeners(){
//     const mobileMenu = document.querySelector('.mobile-menu');
//     mobileMenu.addEventListener('click',navegacionResponsive);
// }
// //funcion que permite ocultar o mostrar las opciones
// // APROBADO
// function navegacionResponsive(){
//     const navegacion = document.querySelector('.navegacion');
    
//     if(navegacion.classList.contains('mostrar')){
//         navegacion.classList.remove('mostrar');
//     }
//     else{
//         navegacion.classList.add('mostrar');
//     }
// }

// // //genera las clases necesarias para que se generen los carrouseles en el INDEX y las paginas individuales
// // // APROBADO
// function carrousel(){
//     new Glider(document.getElementById('C-inmuebles'),{
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: '#indicadores1',
//         arrows: {
//             prev: '#anterior1',
//             next: '#siguiente1'},
//         responsive: [
//             {
//               // screens greater than >= 775px
//               breakpoint: 740,
//               settings: {
//                 // Set to `auto` and provide item width to adjust to viewport
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//               }
//             },{
//               // screens greater than >= 1024px
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//               }
//             }
//           ]
            
//     });

//     new Glider(document.getElementById('C-departamentos'),{
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: '#indicadores2',
//         arrows: {
//             prev: '#anterior2',
//             next: '#siguiente2'},
//         responsive: [
//             {
//               // screens greater than >= 775px
//               breakpoint: 740,
//               settings: {
//                 // Set to `auto` and provide item width to adjust to viewport
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//               }
//             },{
//               // screens greater than >= 1024px
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//               }
//             }
//           ]
            
//     });

//     new Glider(document.getElementById('C-terrenos'),{
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: '#indicadores3',
//         arrows: {
//             prev: '#anterior3',
//             next: '#siguiente3'},
//         responsive: [
//             {
//               // screens greater than >= 775px
//               breakpoint: 740,
//               settings: {
//                 // Set to `auto` and provide item width to adjust to viewport
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//               }
//             },{
//               // screens greater than >= 1024px
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//               }
//             }
//           ]  
//     });

//     new Glider(document.getElementById('C-seleccion'),{
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: '#indicadores-seleccion',
//         arrows: {
//             prev: '#anterior-seleccion',
//             next: '#siguiente-seleccion'},
//         responsive: [
//             {
//               // screens greater than >= 775px
//               breakpoint: 740,
//               settings: {
//                 // Set to `auto` and provide item width to adjust to viewport
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//               }
//             },{
//               // screens greater than >= 1024px
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//               }
//             }
//           ]
            
//     });

// }
// // llena con imagenes los carrouseles del index
// // APROBADO
// function generadorImagenes(cantidades=[0,0,0]){
//     // console.log("inmuebles "+cantidades[0]);
//     // console.log("departamentos "+cantidades[1]);
//     // console.log("terrenos "+cantidades[2]);
//     const carrouselInmuebles = document.getElementById('C-inmuebles');
//     const carrouselDepartamentos = document.getElementById('C-departamentos');
//     const carrouselTerrenos = document.getElementById('C-terrenos');
//     let imagen = [];

//     if(carrouselInmuebles){
//         for(let i=0;i<cantidades[0];i++){
//             imagen[i] = document.createElement('IMG');
//             imagen[i].classList.add('carrousel-elemento');
//             imagen[i].src=`build/img/inmG/${i+1}/1.webp`;
//             imagen[i].alt=`imagen ${i+1}`;
//             imagen[i].loading="lazy";
//             carrouselInmuebles.appendChild(imagen[i]);
//         }
//     }
    
//     if(carrouselDepartamentos){
//         for(let i=0;i<cantidades[1];i++){
//             imagen[i] = document.createElement('IMG');
//             imagen[i].classList.add('carrousel-elemento');
//             imagen[i].src=`build/img/depG/${i+1}/1.webp`;
//             imagen[i].alt=`imagen ${i+1}`;
//             imagen[i].loading="lazy";
//             carrouselDepartamentos.appendChild(imagen[i]);
//         }
//     }
    
//     if(carrouselTerrenos){
//         for(let i=0;i<cantidades[2];i++){
//             imagen[i] = document.createElement('IMG');
//             imagen[i].classList.add('carrousel-elemento');
//             imagen[i].src=`build/img/terrG/${i+1}/1.webp`;
//             imagen[i].alt=`imagen ${i+1}`;
//             imagen[i].loading="lazy";
//             carrouselTerrenos.appendChild(imagen[i]);
//         }
//     }
    
// }
// //funcion que permite cargar las galerias y los carrouseles
// // APROBADO
// async function galeriasIndex(){
//     const index = document.querySelector('#index');
//     try {
//         if(index){
//             await Promise.all([generadorImagenes(),carrousel()]);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// //genera el contenido en la pagina departamentos.php
// // APROBADO
// async function ObtenerInfo(){
//     try {
//         const resultado = await fetch ('./departamentos.json');
//         const db = await resultado.json();
//         const {departamentos,inmuebles,terrenos} = db;
//         const divDepartamentos = document.querySelector('.anunciosD');
//         const divInmuebles = document.querySelector('.anunciosI');
//         const divTerrenos = document.querySelector('.anunciosT');
//         let anuncio,informacion,titulo,precio,picture,imagen;
        
//         if(divDepartamentos){
//             departamentos.forEach(element => {
//                 anuncio= document.createElement('DIV');
//                 informacion= document.createElement('DIV');
//                 titulo = document.createElement('H2');
//                 precio = document.createElement('P');
//                 picture = document.createElement('PICTURE');
//                 imagen = document.createElement('IMG');
                
//                 titulo.textContent = `${element.calle}, ${element.colonia}, ${element.delegacion}`;
//                 precio.textContent = `$ ${element.precio}`;
//                 imagen.src = `build/img/depG/${element.id}/1.webp`;
//                 imagen.alt = `departamento ${element.id}`;
//                 imagen.loading=`lazy`;
    
//                 anuncio.classList.add('anuncio');
//                 informacion.classList.add('info-anuncio');
//                 precio.classList.add('precio');
    
//                 informacion.appendChild(titulo);
//                 informacion.appendChild(precio);
//                 picture.appendChild(imagen);
    
//                 anuncio.appendChild(informacion);
//                 anuncio.appendChild(picture);
    
//                 divDepartamentos.appendChild(anuncio);
//                 anuncio.addEventListener('click',function(){
//                   mostrarImagen("dep",element);
//                 });

//             });
//         }
//         if(divInmuebles){
//             inmuebles.forEach(element => {
//                 anuncio= document.createElement('DIV');
//                 informacion= document.createElement('DIV');
//                 titulo = document.createElement('H2');
//                 precio = document.createElement('P');
//                 picture = document.createElement('PICTURE');
//                 imagen = document.createElement('IMG');
                
//                 titulo.textContent = `${element.calle}, ${element.colonia}, ${element.delegacion}`;
//                 precio.textContent = `$ ${element.precio}`;
//                 imagen.src = `build/img/inmG/${element.id}/1.webp`;
//                 imagen.alt = `Inmueble ${element.id}`;
//                 imagen.loading=`lazy`;
    
//                 anuncio.classList.add('anuncio');
//                 informacion.classList.add('info-anuncio');
//                 precio.classList.add('precio');
    
//                 informacion.appendChild(titulo);
//                 informacion.appendChild(precio);
//                 picture.appendChild(imagen);
    
//                 anuncio.appendChild(informacion);
//                 anuncio.appendChild(picture);
    
//                 divInmuebles.appendChild(anuncio);
//                 anuncio.addEventListener('click',function(){
//                   mostrarImagen("inm",element);
//                 });

//             });
//         }
//         if(divTerrenos){
//             terrenos.forEach(element => {
//                 anuncio= document.createElement('DIV');
//                 informacion= document.createElement('DIV');
//                 titulo = document.createElement('H2');
//                 precio = document.createElement('P');
//                 picture = document.createElement('PICTURE');
//                 imagen = document.createElement('IMG');
                
//                 titulo.textContent = `${element.calle}, ${element.colonia}, ${element.delegacion}`;
//                 precio.textContent = `$ ${element.precio}`;
//                 imagen.src = `build/img/terrG/${element.id}/1.webp`;
//                 imagen.alt = `Terreno ${element.id}`;
//                 imagen.loading=`lazy`;
    
//                 anuncio.classList.add('anuncio');
//                 informacion.classList.add('info-anuncio');
//                 precio.classList.add('precio');
    
//                 informacion.appendChild(titulo);
//                 informacion.appendChild(precio);
//                 picture.appendChild(imagen);
    
//                 anuncio.appendChild(informacion);
//                 anuncio.appendChild(picture);
    
//                 divTerrenos.appendChild(anuncio);
//                 anuncio.addEventListener('click',function(){
//                   mostrarImagen("terr",element);
//                 });

//             });
//         }
//         //enviamos la cantidad de inmuebles, departamentos y terrenos al generador de imagenes del index
//         arregloCantidades = [inmuebles.length,departamentos.length,terrenos.length];
//         generadorImagenes(arregloCantidades);

//         //como ya sabemos cuantas imagenes tendremos en el index, podemos llamar a la funcion para que se llene
//         galeriasIndex();
//     }  
//     catch (error) {
//         console.log(error);
//     }
// }
// // genera el carrousel de la imagen que seleeccionemos
// // APROBADO
// function imagenesSeleccion(tipo,id){
//     let imagen = [];
//     const seleccion = document.getElementById('C-seleccion');
//     for(let i=0;i<12;i++){
//         imagen[i] = document.createElement('IMG');
//         imagen[i].classList.add('carrousel-elemento');
//         imagen[i].src=`build/img/${tipo}G/${id}/${i+1}.webp`;
//         imagen[i].alt=`imagen ${i+1}`;
//         imagen[i].loading=`lazy`;
//         seleccion.appendChild(imagen[i]);
//     }

//     new Glider(document.getElementById('C-seleccion'),{
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: '#indicadores-seleccion',
//         arrows: {
//             prev: '#anterior-seleccion',
//             next: '#siguiente-seleccion'}
//     });
// }

// function mostrarImagen(tipo,arr){
//     //variables para generar codigo HTML
//     const body = document.querySelector('body');
//     const overlay = document.createElement('DIV');
//     const overlayS = document.createElement('DIV');
//     const overlayI = document.createElement('DIV');
//     const overlayD = document.createElement('DIV');
//     const carrousel = document.createElement('DIV');
//     const ContenedorIconos = document.createElement('DIV');
//     const iconosD = document.createElement('DIV');
//     const iconosI = document.createElement('DIV');
//     const ubicacion = document.createElement('A');

//     const cerrarOverlay = document.createElement('P');
//     const titulo = document.createElement('H3');
//     const precio = document.createElement('P');
//     const año = document.createElement('P');
//     const ihabitaciones = document.createElement('IMG');
//     const iservicioH = document.createElement('IMG');
//     const iservicioP = document.createElement('IMG');
//     const ibaños = document.createElement('IMG');
//     const iestacionamiento = document.createElement('IMG');
//     const imedidas = document.createElement('IMG');

//     const habitaciones = document.createElement('P');
//     const servicioH = document.createElement('P');
//     const servicioP = document.createElement('P');
//     const baños = document.createElement('P');
//     const estacionamiento = document.createElement('P');
//     const medidas = document.createElement('P');
    
//     //asignando valores 
//     cerrarOverlay.textContent = "X";
//     titulo.textContent = `${arr.calle}, ${arr.colonia}, ${arr.delegacion}`;
//     precio.textContent = `$ ${arr.precio}`;
//     if(tipo === 'dep' || tipo === 'inm'){
//         año.textContent = `Año de construcción: ${arr.año}`;
//         habitaciones.innerHTML = `<span>Habitaciones:</span> ${arr.habitaciones}`;
//         servicioH.innerHTML = `<span>Habitaciones de servicio:</span> ${arr.servicioH}`;
//         servicioP.innerHTML = `<span>Patios de servicio:</span> ${arr.servicioP}`;
//         baños.innerHTML = `<span>Baños: ${arr.baños}</span>`;
//         estacionamiento.innerHTML = `<span>Espacios de estacionamiento:</span> ${arr.estacionamientos}`;
//     }else{
//         año.textContent = `Año: ${arr.año}`;
//     }
//     ihabitaciones.src = "";
//     iservicioH.src = "";
//     iservicioP.src = "";
//     ibaños.src = "";
//     iestacionamiento.src = "";
//     imedidas.src = "";
//     medidas.innerHTML = `<span>${arr.mt2}</span> mt2`;
//     carrousel.innerHTML = `
//     <div class="carrousel-contenedor">
//             <button aria-label="Anterior" class="carrousel__anterior" id="anterior-seleccion">
//                 <img src="build/img/flecha-izquierda.png" alt="">
//             </button>
//             <div class="carrousel-items" id="C-seleccion">
//                 <!-- <aqui se van a ir agregando las imagenes -->
//             </div>
//             <button aria-label="Siguiente" class="carrousel__siguiente" id="siguiente-seleccion">
//                 <img src="build/img/flecha-correcta.png" alt="">
//             </button>
//             <div class="carrousel-indicadores" role="tablist" id="indicadores-seleccion"></div>
//         </div>
//     `;
//     ubicacion.textContent ="Conozca la ubicación";
//     ubicacion.href = `${arr.ubicacion}`;
//     ubicacion.target = "_blank";

//     //agregando el HTML al sitio
//     overlayI.appendChild(cerrarOverlay);
//     overlayI.appendChild(carrousel);
//     overlayD.appendChild(titulo);
//     overlayD.appendChild(precio);
//     overlayD.appendChild(año);
//     if(tipo === 'dep' || tipo === 'inm'){
//         iconosD.appendChild(habitaciones);
//         iconosD.appendChild(servicioH);
//         iconosD.appendChild(servicioP);
//         iconosI.appendChild(baños);
//         iconosI.appendChild(estacionamiento);
//         ContenedorIconos.appendChild(iconosD);
//     }
//     iconosI.appendChild(medidas);
//     ContenedorIconos.appendChild(iconosI);
//     overlayD.appendChild(ContenedorIconos);
//     overlayD.appendChild(ubicacion);
//     overlayS.appendChild(overlayI);
//     overlayS.appendChild(overlayD);
//     overlay.appendChild(overlayS);
//     body.appendChild(overlay);

//     //agregando las clases necesarias
//     cerrarOverlay.classList.add("boton-cerrar");
//     overlay.classList.add('overlay');
//     overlayS.classList.add('overlay-parteSuperior');
//     overlayI.classList.add('overlay-parteSuperiorIzquierda');
//     overlayD.classList.add('overlay-parteSuperiorDerecha');
//     precio.classList.add('precio');
//     body.classList.add('fijar-body');
//     ContenedorIconos.classList.add('contenedorIconos');
//     iconosD.classList.add('iconos');
//     iconosI.classList.add('iconos');
//     carrousel.classList.add('carrousel');
//     carrousel.classList.add('contenedor');
//     ubicacion.classList.add('boton');

//     // overlay.onclick = function(){
//     //     const body = document.querySelector('body');
//     //     body.classList.remove('fijar-body');
//     //     overlay.remove();
//     // }

//     cerrarOverlay.onclick = function(){
//         const body = document.querySelector('body');
//         body.classList.remove('fijar-body');
//         overlay.remove();
//     }
//     imagenesSeleccion(tipo,arr.id);
// }
