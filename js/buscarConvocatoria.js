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




/**BUSCAR INFO************************************************************* */


const buscar = document.getElementById('buscar-conv');
buscar.addEventListener('click', rangoBusquedaConvocatoria);

function rangoBusquedaConvocatoria() {
  const inicioFecha = document.getElementById('fechaconvinicio').value;
  const finFecha = document.getElementById('fechaconvfin').value;

  const rangodefechas = rangoBusqueda(inicioFecha,finFecha);
 
  const rangofechascorto = rangodefechas.map(i => i.toLocaleDateString());

  const datosLocalStorage = JSON.parse(localStorage.getItem('rangoFechas'));

  if(datosLocalStorage === null){
   const rangoFechasLocal = localStorage.setItem("rangoFechas",JSON.stringify(rangofechascorto)); 
  }
  this.buscarInfo();

  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

  const idRango =parseInt(localStorage.getItem('rangoFechas'));

  const convocatoriacoinc = convocatorias.filter(function (item) {
    item.fecha !== idRango;
  });
  listaConvBusq =[]
  listaConvBusq.push(convocatoriacoinc)
  alert(listaConvBusq)

  // const aux = {
  //   'fecha': document.getElementById('texfechaconv').value,
  //   'rival': document.getElementById('texeqrival').value,
  //   'capitan': document.getElementById('texcapitan').value
  // }
  // convocatoriasNuevo.push(aux);

  // const aux2 = convocatoriasNuevo.sort(function (a, b) {
  //   if (a.id < b.id) {
  //     return -1
  //   }
  //   return 0;
  // });
  // localStorage.setItem('convocatorias', JSON.stringify(aux2));


}

function rangoBusqueda(inicio,fin){
  const inicioDate = new Date(inicio);
  const finDate = new Date(fin);
  let i = inicioDate ;
  const rangoFechas = [];
  while (i <= finDate) {
    rangoFechas.push(new Date(i));
    i.setDate(i.getDate() + 1);
  };
  return rangoFechas;
}


 /**Veremos si salw */ 
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
}

