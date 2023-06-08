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
// window.addEventListener("load", function () {
//   buscarInfo();
// });

const buscar = document.getElementById('buscar-conv');
// buscar.addEventListener('click', buscarFechaConvocatoria);
buscar.addEventListener('click', rangoBusqueda);

function rangoBusqueda(inicio, fin) {
  const inicioDate = new Date(inicio);
  const finDate = new Date(fin);
  let i = inicioDate;
  const rangoFechas = [];
  while (i <= finDate) {
    rangoFechas.push(new Date(i));
    i.setDate(i.getDate() + 1);
  };
  rangoFechas.map.toString()
  return console.log(rangoFechas);
}
// function buscarFechaConvocatoria() {
// //   // const idConvocatoria = parseInt(localStorage.getItem('convocatorias'));
// //   // const datosLocalStorage = JSON.parse(localStorage.getItem('convocatorias'));

// //   // const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
// //   // const convocatoria = convocatorias.find(item => item.id === idConvocatoria);
//   const body = document.getElementById('tbody');

//   const inicio = document.getElementById('fechaconvinicio').value;
//   const fin = document.getElementById('fechaconvfin').value;
//   const rangoFechas = rangoBusqueda(inicio, fin);
//   const rangoFechasString = rangoFechas.parse().split(',')[0];
//   body.innerHTML ='';
//   rangoFechas.forEach(element =>{
//     body.innerHTML += element + '<br/>'
//   })
// }
//   rangoFechasString.forEach(element => {
//     if (element == convocatorias.fecha) {
//       const tr = document.createElement('tr');

//       const id = document.createElement('td');
//       const fecha = document.createElement('td');
//       const rival = document.createElement('td');
//       const capitan = document.createElement('td');
//       const convocar = document.createElement('td');

//       id.appendChild(document.createTextNode(element.id));
//       fecha.appendChild(document.createTextNode(element.fecha));
//       rival.appendChild(document.createTextNode(element.rival));
//       capitan.appendChild(document.createTextNode(element.capitan));


//       const editar = document.createElement('button');
//       editar.setAttribute('id', element.id);
//       editar.setAttribute('onclick', 'editarConvocatoria(this)');
//       editar.setAttribute('class', 'boton2b');
//       editar.appendChild(document.createTextNode('Editar'));

//       const eliminar = document.createElement('button');
//       eliminar.setAttribute('id', element.id);
//       eliminar.setAttribute('onclick', 'eliminarConvocatoria(this)');
//       eliminar.setAttribute('class', 'boton2b');
//       eliminar.appendChild(document.createTextNode('Eliminar'));

//       convocar.appendChild(eliminar);
//       convocar.appendChild(editar);


//       tr.appendChild(id);
//       tr.appendChild(fecha);
//       tr.appendChild(rival);
//       tr.appendChild(capitan);
//       tr.appendChild(convocar);

//       body.appendChild(tr);
//     }
//   });
//   alert('No se encuentra ninguna fecha en el sistema')
// }


// function buscarFechaConvocatoria() {
//   const body = document.getElementById('tbody');

//   const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));

//   // sino encuentro nada en el localstorage
//   // busco desde el archivo
//   if (convocatorias === null) {
//     fetch('../json/convocatorias.json')
//       .then((res) => {
//         return res.json()
//       })
//       .then((data) => {
//         // seteo el localstorage
//         localStorage.setItem('convocatorias', JSON.stringify(data));

//         // completo la tabla
//         data.forEach(element => {
//           const tr = document.createElement('tr');

//           const id = document.createElement('td');
//           const fecha = document.createElement('td');
//           const rival = document.createElement('td');
//           const capitan = document.createElement('td');
//           const convocar = document.createElement('td');

//           id.appendChild(document.createTextNode(element.id));
//           fecha.appendChild(document.createTextNode(element.fecha));
//           rival.appendChild(document.createTextNode(element.rival));
//           capitan.appendChild(document.createTextNode(element.capitan));


//           const editar = document.createElement('button');
//           editar.setAttribute('id', element.id);
//           editar.setAttribute('onclick', 'editarConvocatoria(this)');
//           editar.setAttribute('class', 'boton2b');
//           editar.appendChild(document.createTextNode('Editar'));

//           const eliminar = document.createElement('button');
//           eliminar.setAttribute('id', element.id);
//           eliminar.setAttribute('onclick', 'eliminarConvocatoria(this)');
//           eliminar.setAttribute('class', 'boton2b');
//           eliminar.appendChild(document.createTextNode('Eliminar'));



//           tr.appendChild(id);
//           tr.appendChild(fecha);
//           tr.appendChild(rival);
//           tr.appendChild(capitan);
//           tr.appendChild(convocar);

//           body.appendChild(tr);
//         });
//       })
//   }
//   else {
//     convocatorias.forEach(element => {
//       const tr = document.createElement('tr');

//       const id = document.createElement('td');
//       const fecha = document.createElement('td');
//       const rival = document.createElement('td');
//       const capitan = document.createElement('td');
//       const convocar = document.createElement('td');

//       id.appendChild(document.createTextNode(element.id));
//       fecha.appendChild(document.createTextNode(element.fecha));
//       rival.appendChild(document.createTextNode(element.rival));
//       capitan.appendChild(document.createTextNode(element.capitan));


//       const editar = document.createElement('button');
//       editar.setAttribute('id', element.id);
//       editar.setAttribute('onclick', 'editarConvocatoria(this)');
//       editar.setAttribute('class', 'boton2b');
//       editar.appendChild(document.createTextNode('Editar'));

//       const eliminar = document.createElement('button');
//       eliminar.setAttribute('id', element.id);
//       eliminar.setAttribute('onclick', 'eliminarConvocatoria(this)');
//       eliminar.setAttribute('class', 'boton2b');
//       eliminar.appendChild(document.createTextNode('Eliminar'));

//       convocar.appendChild(eliminar);
//       convocar.appendChild(editar);


//       tr.appendChild(id);
//       tr.appendChild(fecha);
//       tr.appendChild(rival);
//       tr.appendChild(capitan);
//       tr.appendChild(convocar);

//       body.appendChild(tr);
//     });
//   }
// }


