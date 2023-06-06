
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


/*************************LISTA DE CONVOCATORIAS ***********************************/
window.addEventListener("load", function () {
  buscarInfo();
});

// Buscar informacion en el localStorange
function buscarInfo() {
  const body = document.getElementById('tbody');
  // console.log(body)
  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

  // sino encuentro nada en el localstorage
  // busco desde el archivo
  if (convocatorias === null) {
    fetch('../json/convocatorias.json')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // seteo el localstorage
        localStorage.setItem('convocatorias', JSON.stringify(data));

        // completo la tabla 
        data.forEach(element => {
          const tr = document.createElement('tr');

          const id = document.createElement('td');
          const fecha = document.createElement('td');
          const rival = document.createElement('td');
          const capitan = document.createElement('td');
          const convocar = document.createElement('td');

          id.appendChild(document.createTextNode(element.id));
          fecha.appendChild(document.createTextNode(element.fecha));
          rival.appendChild(document.createTextNode(element.rival));
          capitan.appendChild(document.createTextNode(element.capitan));


          const editar = document.createElement('button');
          editar.setAttribute('id', element.id);
          editar.setAttribute('onclick', 'editarConvocatoria(this)');
          editar.setAttribute('class', 'boton2b');
          editar.appendChild(document.createTextNode('Editar'));

          const eliminar = document.createElement('button');
          eliminar.setAttribute('id', element.id);
          eliminar.setAttribute('onclick', 'eliminarConvocatoria(this)');
          eliminar.setAttribute('class', 'boton2b');
          eliminar.appendChild(document.createTextNode('Eliminar'));



          tr.appendChild(id);
          tr.appendChild(fecha);
          tr.appendChild(rival);
          tr.appendChild(capitan);
          tr.appendChild(convocar);

          body.appendChild(tr);
        });
      })
  }
  else {
    convocatorias.forEach(element => {
      const tr = document.createElement('tr');

      const id = document.createElement('td');
      const fecha = document.createElement('td');
      const rival = document.createElement('td');
      const capitan = document.createElement('td');
      const convocar = document.createElement('td');

      id.appendChild(document.createTextNode(element.id));
      fecha.appendChild(document.createTextNode(element.fecha));
      rival.appendChild(document.createTextNode(element.rival));
      capitan.appendChild(document.createTextNode(element.capitan));


      const editar = document.createElement('button');
      editar.setAttribute('id', element.id);
      editar.setAttribute('onclick', 'editarConvocatoria(this)');
      editar.setAttribute('class', 'boton2b');
      editar.appendChild(document.createTextNode('Editar'));

      const eliminar = document.createElement('button');
      eliminar.setAttribute('id', element.id);
      eliminar.setAttribute('onclick', 'eliminarConvocatoria(this)');
      eliminar.setAttribute('class', 'boton2b');
      eliminar.appendChild(document.createTextNode('Eliminar'));

      convocar.appendChild(eliminar);
      convocar.appendChild(editar);


      tr.appendChild(id);
      tr.appendChild(fecha);
      tr.appendChild(rival);
      tr.appendChild(capitan);
      tr.appendChild(convocar);

      body.appendChild(tr);
    });
  }
}

function eliminarConvocatoria(param) {
  let idEliminar = parseInt(param.getAttribute("id"));

  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

  const nuevo = convocatorias.filter(function (item) {
    return item.id !== idEliminar;
  });

  localStorage.setItem('convocatorias', JSON.stringify(nuevo));

  this.borrarBodyTabla();
  this.buscarInfo();
  window.location.href = 'listaconvocatorias.html';
}

function borrarBodyTabla() {
  const elemento = document.getElementById('tconv-body');
  while (elemento.firstChild) {
    elemento.firstChild.remove();
  }
}
function editarConvocatoria(param){
  let idEditar = parseInt(param.getAttribute("id"));
  localStorage.setItem('editame',JSON.stringify(idEditar));
  window.location.href = 'editarconvocatoria.html'
}
// /**EDITAR CONVOCATORIA************************************************/

// window.addEventListener("load", function () {
//   leerDatos();
// });

// function leerDatos() {
//   const idEditar = parseInt(localStorage.getItem('editame'));

//   const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

//   const convocatoria = convocatorias.find(item => item.id === idEditar);
//   document.getElementById('texfechaconv').value = convocatoria.fecha;
//   document.getElementById('texeqrival').value = convocatoria.rival;
//   document.getElementById('texcapitan').value = convocatoria.capitan;
// }

// const guardar = document.getElementById('g-ed-conv');
// guardar.addEventListener('click', guardarConvocatoria);

// const cancelar = document.getElementById('c-ed-conv');
// cancelar.addEventListener('click', cancelarEdicion);


// function editarConvocatoria(param) {
//   let idEditar = parseInt(param.getAttribute('id'));
//   localStorage.setItem('editame', JSON.stringify(idEditar));
//   window.location.href = 'editarconvocatoria.html';
// }

// function cancelarEdicion() {
//   window.location.href = 'convocatorias.html';
// }

// function guardarConvocatoria() {
//   const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

//   const idEditar = parseInt(localStorage.getItem('editame'));

//   // me quedo con los items menos el que quiero modificar
//   const convocatoriasNuevo = convocatorias.filter(function (item) {
//     return item.id !== idEditar;
//   });

//   const aux = {
//     'id': idEditar,
//     'fecha': document.getElementById('texfechaconv').value,
//     'rival': document.getElementById('texeqrival').value,
//     'capitan': document.getElementById('texcapitan').value
//   }
//   convocatoriasNuevo.push(aux);

//   const aux2 = convocatoriasNuevo.sort(function (a, b) {
//     if (a.id < b.id) {
//       return -1
//     }
//     return 0;
//   });

//   localStorage.setItem('convocatorias', JSON.stringify(aux2));
//   window.location.href = 'convocatorias.html';
// }

