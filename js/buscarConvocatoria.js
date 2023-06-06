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
buscar.addEventListener('click', buscarConvocatoria);





// function buscarConvocatoria(){
//   const convocatorias = localStorage.getItem('convocatorias');

//   if(convocatorias !== null){
//       const jsonData = JSON.parse(convocatorias);

//       const buscarConv = document.getElementById('buscar-conv').value;

//       console.log(buscarConv);

//   }
//   window.location.href='busquedaconvocatoria.html'
// }
// const result = jsonData.filter(function(item){
//     return item.fecha.toLowerCase().includes(buscarConv);
//     item.rival.toLowerCase().includes(buscarConv);
//       //     item.capitan.toLowerCase().includes(buscarConv);
//       });
//     }
// }

function buscarConvocatoria() {
//   const convocatoria = parseInt(localStorage.getItem('convocatorias'));


  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
  // const convocatoria = convocatorias.find(item => item.id === idConvocatoria);

  // document.getElementById('titulo').
  //   appendChild(document.createTextNode(`Convocatoria vs ${convocatoria.rival} (${convocatoria.fecha})`))


  const body = document.getElementById('tbody');
  fetch('../json/convocatorias.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      data.forEach(element => {
        if (convocatorias.fecha === element) {
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
        }
        
        if (datosLocalStorage !== null) {
          const estaFechaConv = datosLocalStorage.find
            (item => item.fecha === element.fecha);
        }

        tr.appendChild(id);
        tr.appendChild(fecha);
        tr.appendChild(capitan);
        tr.appendChild(apellido);
        tr.appendChild(convocar);
        
        body.appendChild(tr);

      });
    }).catch((error) => {
      console.log('error', error)
    });
}