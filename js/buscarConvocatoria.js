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


const buscar = document.getElementById('buscar-conv');
buscar.addEventListener('click', rangoBusquedaConvocatoria);



function rangoBusquedaConvocatoria() {
  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

  const inicioFecha = document.getElementById('fechaconvinicio').value;

  const finFecha = document.getElementById('fechaconvfin').value;
 

  const resultadoconv = convocatorias.filter((conv) => {
    if (new Date(conv.fecha) >= new Date(inicioFecha) && new Date(conv.fecha) <= new Date(finFecha)) {
      return conv
    }
  });
  
  
  
  const body = document.getElementById('tbody');
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

    const botonConvocados = document.createElement('button');

    botonConvocados.setAttribute('id', element.id);
    botonConvocados.setAttribute('onclick', 'jugadoresConvocados(this)');
    botonConvocados.setAttribute('class', 'boton2bc');
    botonConvocados.appendChild(document.createTextNode('Convocados'));

    convocar.appendChild(eliminar);
    convocar.appendChild(editar);
    convocar.appendChild(boton);
    convocar.appendChild(botonConvocados);

    tr.appendChild(id);
    tr.appendChild(fecha);
    tr.appendChild(rival);
    tr.appendChild(capitan);
    tr.appendChild(convocar);

    body.appendChild(tr);

  });
}