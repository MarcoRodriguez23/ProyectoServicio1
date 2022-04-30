let tipo;
let unidad;
let pagina = 1;

document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
    
});

function iniciarApp(){
    carrousel();
    eventListeners();
    cambiarSeccion();
    fechaCita();
    horaCita();
    deshabilitarFechaAnterior();
    ocultarFieldsetsFormularioInmueble();
    formatoPrecios();
    enlacesInmuebles();
}
// funcion para poder utilizar el icono de menu movil y poder ver las opciones del navegador
// APROBADO
function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    if(mobileMenu){
      mobileMenu.addEventListener('click',navegacionResponsive);
    }
    
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                }
              ]
        });
    }
    const admin = document.getElementById('C-admin');
    if(admin){
        new Glider(admin,{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '#indicadores-admin',
            arrows: {
                prev: '#anterior-admin',
                next: '#siguiente-admin'},
            // responsive: [
            //     {
            //       // screens greater than >= 775px
            //       breakpoint: 740,
            //       settings: {
            //         // Set to `auto` and provide item width to adjust to viewport
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //       }
            //     },{
            //       // screens greater than >= 1024px
            //       breakpoint: 1024,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //       }
            //     }
            //   ]
        });
    }
    const servicios = document.getElementById('C-servicios');
    if(servicios){
        new Glider(servicios,{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '#indicadores4',
            arrows: {
                prev: '#anterior4',
                next: '#siguiente4'},
            responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 740,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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


// function formularioInmueble(){
//   const AumentoODisminucion = document.querySelectorAll('input[name="aumento-disminucion"]');
  
//   AumentoODisminucion.forEach(element => {
//       element.addEventListener('click',DescuentoAumento);
//   });
// }

// function DescuentoAumento(e){
// const tipoAAgregar = document.querySelector('#tipo-a-agregar');

// if(e.target.value === "Descuento"){
//     tipoAAgregar.innerHTML=`
//     <label>Descuento</label>
//     <div class="opciones"> 
//         <input name="tipo-a-agregar" type="radio" value="Porcentaje">
//         <label for="porcentaje">Porcentaje</label>
//         <input name="tipo-a-agregar" type="radio" value="Cantidad"> 
//         <label for="cantidad">Cantidad</label>  
//     </div>
//     `;
//     tipo="descuento";
// }
// else{
//     tipoAAgregar.innerHTML=`
//     <label>Aumento</label>
//     <div class="opciones"> 
//         <input name="tipo-a-agregar" type="radio" value="Porcentaje">
//         <label for="porcentaje">Porcentaje</label>
//         <input name="tipo-a-agregar" type="radio" value="Cantidad"> 
//         <label for="cantidad">Cantidad</label>  
//     </div>
//     `;
//     tipo="aumento";
// }

// const denominacion=document.querySelectorAll('input[name="tipo-a-agregar"]');
// console.log(denominacion);

// denominacion.forEach(element => {
//     element.addEventListener('click',CantidadPorcentaje);
// });
// }

// function CantidadPorcentaje(e){
// const denominacion = document.querySelector('#denominacion');
// denominacion.innerHTML="";
// if(e.target.value === "Cantidad"){
//     denominacion.innerHTML= `
//     <label>Cantidad</label>
//     <input type="number" placeholder="ejem: 1000" min="1" id="denominacion">
//     `;
//     unidad="cantidad";
// }
// else{
//     denominacion.innerHTML= `
//     <label>Porcentaje</label>
//     <input type="number" placeholder="Del 1 al 100" min="1" max="100" id="denominacion">
//     `;
//     unidad="porcentaje";
// }

// operacion();
// }

// function operacion(){
// const valorinicial = document.querySelector('#precio');
// const valorFinal = document.querySelector('input[name="valor-final"]');
// let inputDenominacion;
// console.log(tipo);
// console.log(unidad);
// console.log(valorinicial.value);
// if(tipo==="aumento"){
//     if(unidad==="cantidad"){
//         inputDenominacion =  document.querySelector('#denominacion').value;
//         console.log(inputDenominacion);
//     }
//     else{
//         inputDenominacion =  document.querySelector('#denominacion').value;
//         console.log(inputDenominacion);
//     }
// }
// if(tipo==="descuento"){
//     if(unidad==="cantidad"){
//         inputDenominacion =  document.querySelector('#denominacion').value;
//         console.log(inputDenominacion);
        
//     }
//     else{
//         inputDenominacion =  document.querySelector('#denominacion').value;
//         console.log(inputDenominacion);

//     }
// }

// } 



function cambiarSeccion() {
const enlaces = document.querySelectorAll('.tabs button');

enlaces.forEach( enlace => {
    enlace.addEventListener('click', e => {
        e.preventDefault();
        pagina = parseInt(e.target.dataset.paso);

        // Llamar la función de mostrar sección
        mostrarSeccion();

        // botonesPaginador();
    })
})
}

function mostrarSeccion() {

// Eliminar mostrar-seccion de la sección anterior
const seccionAnterior = document.querySelector('.mostrar-seccion');
if( seccionAnterior ) {
    seccionAnterior.classList.remove('mostrar-seccion');
}

const seccionActual = document.querySelector(`#paso-${pagina}`);
seccionActual.classList.add('mostrar-seccion');

// Eliminar la clase de actual en el tab anterior
const tabAnterior = document.querySelector('.tabs .actual');
if(tabAnterior) {
    tabAnterior.classList.remove('actual');
}

// Resalta el Tab Actual
const tab = document.querySelector(`[data-paso="${pagina}"]`);
tab.classList.add('actual');
}

// function cambiarValorCheckbox(){
//   const botones = document.querySelectorAll("input[type=checkbox]");

//   botones.forEach(element => {
//     element.setAttribute("value","1");
//     element.addEventListener('click',()=>{
      
//       if(element.checked){
//         element.setAttribute("value","1");
//       }
//       else{
//         element.setAttribute("value","0");
//       }
//     });
//   });

// }

function ConfirmDelete(){
  var respuesta = confirm("¿Esta seguro que desea eliminar el registro?");
  if (respuesta == true) {
    return true;
  }
  else{
    return false;
  }
}

function fechaCita() {
  const fechaInput = document.querySelector('#fecha');
  const campoFecha = document.querySelector('#campo-fecha');
  if(fechaInput){
    fechaInput.addEventListener('input', e => {
  
        const dia = new Date(e.target.value).getUTCDay();
        
        if([0, 6].includes(dia)) {
            e.preventDefault();
            fechaInput.value = '';
            mostrarAlerta('Fines de Semana no son permitidos', 'error',campoFecha);
        } 
        // else {
        //     cita.fecha = fechaInput.value;
  
        //     console.log(cita);
        // }
    })
  }
}

function deshabilitarFechaAnterior() {
  const inputFecha = document.querySelector('#fecha');
  if(inputFecha){
    const fechaAhora = new Date();
    const year = fechaAhora.getFullYear();
    const mes = fechaAhora.getMonth() + 1;


    if(mes < 10){
        var _mes = "0" + mes;
    }
    else{
      var _mes = mes;
    }

    const dia = fechaAhora.getDate() + 1;
    if(dia < 10){
      var _dia = "0" + dia;
      console.log(_dia);
    }
    else{
      var _dia = dia;
    }

    const fechaDeshabilitar = `${year}-${_mes}-${_dia}`;

    console.log(fechaDeshabilitar);
    inputFecha.setAttribute('min',fechaDeshabilitar);
  }

  
}

function horaCita() {
  const inputHora = document.querySelector('#hora');
  const campoHora = document.querySelector('#campo-hora');
  if(inputHora){
    inputHora.addEventListener('input', e => {
  
        const horaCita = e.target.value;
        const hora = horaCita.split(':');
  
        if(hora[0] < 10 || hora[0] > 18 ) {
            mostrarAlerta('Hora no válida', 'error',campoHora);
            setTimeout(() => {
                inputHora.value = '';
            }, 3000);
        } 
        // else {
        //     cita.hora = horaCita;
  
        //     console.log(cita);
        // }
    });
  }
}

function mostrarAlerta(mensaje, tipo, posicion) {

  // Si hay una alerta previa, entonces no crear otra
  const alertaPrevia = document.querySelector('.alerta');
  if(alertaPrevia) {
      return;
  }

  const alerta = document.createElement('DIV');
  alerta.textContent = mensaje;
  alerta.classList.add('alerta');

  if(tipo === 'error') {
      alerta.classList.add('error');
  }

  // Insertar en el HTML
  // const formulario = document.querySelector('.formulario');
  posicion.appendChild( alerta );

  // Eliminar la alerta después de 3 segundos
  setTimeout(() => {
      alerta.remove();
  }, 1800);
}


function ocultarFieldsetsFormularioInmueble(){
  const formularioCreate = document.querySelector('#formulario-propiedad-create');
  const formularioUpdate = document.querySelector('#formulario-propiedad-update');


  const fieldSetStatus = document.querySelector('#fieldSetStatus');
  const fieldSetRemodelacion = document.querySelector('#fieldSetRemodelacion');
  const fieldSetDescripcionPropiedad = document.querySelector('#fieldSetDescripcionPropiedad');
  const fieldSetPrecio = document.querySelector('#fieldSetPrecio');
  const fieldSetDepartamento = document.querySelector('#fieldSetDepartamento');
  const fieldSetComision = document.querySelector('#fieldSetComision');
  const fieldSetMueblesAmenidades = document.querySelector('#fieldSetMueblesAmenidades');
  const fieldSetPredio = document.querySelector('#fieldSetPredio');

  if(fieldSetStatus){
    fieldSetStatus.classList.add('ocultar');
  }
  if(fieldSetRemodelacion){
    fieldSetRemodelacion.classList.add('ocultar');
  }
  if(fieldSetDescripcionPropiedad){
    fieldSetDescripcionPropiedad.classList.add('ocultar');
  }
  if(fieldSetPrecio){
    fieldSetPrecio.classList.add('ocultar');
  }
  if(fieldSetDepartamento){
    fieldSetDepartamento.classList.add('ocultar');
  }
  if(fieldSetComision){
    fieldSetComision.classList.add('ocultar');
  }
  if(fieldSetMueblesAmenidades){
    fieldSetMueblesAmenidades.classList.add('ocultar');
  }
  if(fieldSetPredio){
    fieldSetPredio.classList.add('ocultar');
  }
  

  if(formularioUpdate || formularioCreate){
    const tipoPropiedad = document.querySelector('#tipoPropiedad');
    switch (tipoPropiedad.selectedIndex) {
      case 1:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.add('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 2:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.remove('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 3:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.add('ocultar');
        fieldSetDescripcionPropiedad.classList.add('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.add('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.add('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 4:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.add('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.remove('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.add('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 5:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.add('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 6:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.remove('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
    
      default:
        break;
    }
    tipoPropiedad.addEventListener('change',()=>{
      switch (tipoPropiedad.selectedIndex) {
        case 1:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.add('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 2:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.remove('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 3:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.add('ocultar');
        fieldSetDescripcionPropiedad.classList.add('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.add('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.add('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 4:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.add('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.remove('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.add('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 5:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.add('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      case 6:
        fieldSetStatus.classList.remove('ocultar');
        fieldSetRemodelacion.classList.remove('ocultar');
        fieldSetDescripcionPropiedad.classList.remove('ocultar');
        fieldSetPrecio.classList.remove('ocultar');
        fieldSetDepartamento.classList.remove('ocultar');
        fieldSetComision.classList.remove('ocultar');
        fieldSetMueblesAmenidades.classList.remove('ocultar');
        fieldSetPredio.classList.remove('ocultar');
      break;
      
        default:
          break;
      }
    });
  }
}

function formatoPrecios(){
  const precios = document.querySelectorAll(".precio");

  precios.forEach(element => {
    element.textContent = "$ "+parseInt(element.textContent).toLocaleString('en-US');
  });

}

var mostrar = true;

function enlacesInmuebles(){
  const spanInmuebles = document.querySelector('#span-inmuebles');
  const enlacesInmuebles = document.querySelector('#enlaces-inmuebles');

  if(spanInmuebles){
    spanInmuebles.addEventListener('click',()=>{
      if(mostrar){
        enlacesInmuebles.classList.add('mostrar-enlaces');
        mostrar = false;
      }
      else{
        enlacesInmuebles.classList.remove('mostrar-enlaces');
        mostrar = true;
      }
    });

  }
}