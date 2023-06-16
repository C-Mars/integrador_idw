// MENÚ DE NAVEGACIÓN******************************************************************************
document.getElementById('nueva-conv').addEventListener('click', crearConvocatoria);

function crearConvocatoria() {
  window.location.href = 'crearconvocatoria.html';
};

document.getElementById('lista-conv').addEventListener('click', listaConvocatoria);

function listaConvocatoria() {
  window.location.href = 'listaconvocatorias.html';
};

document.getElementById('busqueda-conv').addEventListener('click', busquedaConvocatoria);

function busquedaConvocatoria() {
  window.location.href = 'busquedaconvocatorias.html';
};




/**BUSCAR INFO************************************************************* */


document.getElementById('buscar-rango').addEventListener('click', rangoBusquedaConvocatoria);



function rangoBusquedaConvocatoria() {
  leerConv();
  const body = document.getElementById('tbody');
  
  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

  const inicioFecha = document.getElementById('fechaconvinicio').value;

  const finFecha = document.getElementById('fechaconvfin').value;

  if(new Date(inicioFecha)>= new Date(finFecha)){
    return alert('las fechas ingresadas son incorrectas')
  };
  
  const resultadoconv = convocatorias.filter((conv) => {
    if (new Date(conv.fecha) >= new Date(inicioFecha) && new Date(conv.fecha) <= new Date(finFecha)) {
      return conv 
    } else{
      return alert('no hay convocatorias en esas fechas')
    }
  } 
  );

  if (resultadoconv.length !== null) {
    resultadoconv.forEach(element => {


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

      const boton = document.createElement('button');

      boton.setAttribute('id', element.id);
      boton.setAttribute('onclick', 'convocarJugadores(this)');
      boton.setAttribute('class', 'boton2bc');
      boton.appendChild(document.createTextNode('Convocar'));

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
      convocar.appendChild(boton);
      

      tr.appendChild(id);
      tr.appendChild(fecha);
      tr.appendChild(rival);
      tr.appendChild(capitan);
      tr.appendChild(convocar);

      body.appendChild(tr);

    });
  } else {
    alert('No se encuentra ninguna fecha')
  }
};

function eliminarConvocatoria(param) {
  let idEliminar = parseInt(param.getAttribute("id"));

  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

  const nuevo = convocatorias.filter(function (item) {
    return item.id !== idEliminar;
  });

  localStorage.setItem('convocatorias', JSON.stringify(nuevo));

  this.borrarBodyTabla();
  this.buscarInfo();
  
};

 function borrarBodyTabla() {
  const elemento = document.getElementById('tbody');
  while (elemento.firstChild) {
    elemento.firstChild.remove();
  }
};

function editarConvocatoria(param){
  let idEditar = parseInt(param.getAttribute("id"));
  localStorage.setItem('editame',JSON.stringify(idEditar));
  window.location.href = 'editarconvocatoria.html'
};

function convocarJugadores(param){
  let idConvocatoria = parseInt(param.getAttribute("id"));
  localStorage.setItem('convocatoria',JSON.stringify(idConvocatoria));
  window.location.href = 'listajugadoresconvocados.html'
};

function jugadoresConvocados(param) {
  const idConvocatoria = parseInt(param.getAttribute("id"));
  localStorage.setItem('convocatoria',JSON.stringify(idConvocatoria));
  window.location.href = 'jugadoresConvocados.html'
};

function leerConv() {
  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
  if (convocatorias === null) {
    fetch('../json/convocatorias.json')
      .then((res) => {
        return res.json()
      })
      .then((data) => {

        localStorage.setItem('convocatorias', JSON.stringify(data));
      })
  }
}

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

          const boton = document.createElement('button');
          boton.setAttribute('id', element.id);
          boton.setAttribute('onclick', 'convocarJugadores(this)');
          boton.setAttribute('class', 'boton2bc');
          boton.appendChild(document.createTextNode('Convocar'));
          
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
          convocar.appendChild(boton);


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

      const boton = document.createElement('button');
              
      boton.setAttribute('id', element.id);
      boton.setAttribute('onclick', 'convocarJugadores(this)');
      boton.setAttribute('class', 'boton2bc');
      boton.appendChild(document.createTextNode('Convocar'));

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
      convocar.appendChild(boton);
     
      tr.appendChild(id);
      tr.appendChild(fecha);
      tr.appendChild(rival);
      tr.appendChild(capitan);
      tr.appendChild(convocar);

      body.appendChild(tr);
    });
  }
}