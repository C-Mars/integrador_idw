

// *************** Contacto ********************* //
// const formCintacto = document.querySelector('form-contacto')


/*********************************CONVOCATORIAS**************************************************/


// MENÚ DE NAVEGACIÓN******************************************************************************
document.getElementById('nueva-conv').addEventListener('click', crearConvocatoria);

function crearConvocatoria() {
  window.location.href = 'crearconvocatoria.html'
}

document.getElementById('lista-conv').addEventListener('click', listaConvocatoria);

function listaConvocatoria() {
  window.location.href = 'listaconvocatorias.html'
}

document.getElementById('busqueda-conv').addEventListener('click', busquedaConvocatoria);

function busquedaConvocatoria() {
  window.location.href = 'busquedaconvocatorias.html'
}



/*************************VALIDACIÓN ***********************************/
function validarUsuario(){
  const nomusuario = document.getElementById('textUsuario').value;
  const contrasenia = document.getElementById('texcontrasenia').value;

  if (nomusuario.legth == 0 || contrasenia.legth == 0){
    alert('El nombre de usuario o clave está vacío')
  } else{
    alert('Hola ' + nomusuario +'! Bienvenido/a')
  }
  
}
function crearCuenta(){
  alert('Para crear una cuenta debe tener la autorizacion de la AFA. Para más información ingrese a la página de contacto del sitio')
}
