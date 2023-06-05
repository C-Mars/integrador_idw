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


// document.getElementById('nueva-conv').addEventListener('click', editarConvocatoria);

// function editarConvocatoria() {
//   window.location.href = 'crearconvocatoria.html'
// }




// EDITAR CONVOCATORIA************************************************************************
window.addEventListener("load", function () {
  leerDatos();
});

const guardarEd = document.getElementById('g-ed-conv');
guardarEd.addEventListener('click', guardarConvocatoriaEd);

const cancelarEd = document.getElementById('c-ed-conv');
cancelarEd.addEventListener('click', cancelarEdicion);


function cancelarEdicion(){
  window.location.href = 'convocatorias.html';
}

function guardarConvocatoriaEd(){
  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
  
  const idEditar = parseInt(localStorage.getItem('editame'));

  // me quedo con los items menos el que quiero modificar
  const convocatoriasNuevo = convocatorias.filter( function(item){
    return item.id !== idEditar;
  });
  
  const aux = {
    'id' : idEditar,
    'fecha' : document.getElementById('textfechaconv').value,
    'rival' : document.getElementById('texeqrival').value,
    'capitan' : document.getElementById('texcapitan').value
  }

  convocatoriasNuevo.push(aux);
  const aux2 = convocatoriasNuevo.sort( function(a,b){
    if(a.id < b.id){
      return -1
    }
    return 0;
  })

  localStorage.setItem('convocatorias', JSON.stringify(aux2));
  window.location.href = 'convocatorias.html';
}
function leerDatos(){
  const idEditar = parseInt(localStorage.getItem('editame'));

  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

  const convocatoria = convocatorias.find(item => item.id === idEditar );
  document.getElementById('texfechaconv').value = convocatoria.fecha;
  document.getElementById('texeqrival').value = convocatoria.rival;
  document.getElementById('texcapitan').value = convocatoria.capitan;
}