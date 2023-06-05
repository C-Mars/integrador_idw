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
  console.log(body)
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
      editar.setAttribute('class', 'boton2');
      editar.appendChild(document.createTextNode('Editar'));

      const eliminar = document.createElement('button');
      eliminar.setAttribute('id', element.id);
      eliminar.setAttribute('onclick', 'eliminarConvocatoria(this)');
      eliminar.setAttribute('class', 'boton2');
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
}

function borrarBodyTabla() {
  const elemento = document.getElementById('tconv-body');
  while (elemento.firstChild) {
    elemento.firstChild.remove();
  }
}




/*********************NUEVA CONVOCATORIA***********************************************/
window.addEventListener("load", function () {
    buscarInfo();
  });

  const cancelar = document.getElementById('c-nuev-conv');
  cancelar.addEventListener('click', cancelarConvocatoria);
  
  function cancelarConvocatoria() {
    window.location.href = 'convocatorias.html';
  }
  
  const guardar = document.getElementById('g-nuev-conv');
  guardar.addEventListener('click', crearConvocatoria);
  
  function crearConvocatoria() {
    const jsonCovocatorias = localStorage.getItem('convocatorias');
    if(jsonCovocatorias !== null){
        const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
  
        maxId = convocatorias.reduce((max, obj) => obj.id > max ? obj.id : max, -Infinity);
        let i = 0;
  
        if (maxId !== -Infinity) {
          i = maxId + 1;
        }
  
        const convocatoria = {
          'id': i,
          'fecha': document.getElementById('texfechaconv').value,
          'rival': document.getElementById('texeqrival').value,
          'capitan': document.getElementById('texcapitan').value
        }
        convocatorias.push(convocatoria);
        localStorage.setItem('convocatorias', JSON.stringify(convocatorias));
  
        event.preventDefault();
        event.stopPropagation();
        window.location.href = 'convocatorias.html';
      }
  }