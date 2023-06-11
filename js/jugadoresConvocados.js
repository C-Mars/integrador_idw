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

// JUGADORES CONVOCADOS**********************************************************************************************
document.getElementById('convocar-ed').addEventListener('click', convocarJugadores);


function convocarJugadores(param){
    let idConvocatoria = parseInt(param.getAttribute("id"));
    localStorage.setItem('convocatoria',JSON.stringify(idConvocatoria));
    window.location.href = 'listajugadoresconvocados.html'
  }

  window.addEventListener("load", function () {
    buscarInfoJugadores();
  });
  
  const convocar = document.getElementById('convocar');
  convocar.addEventListener('click', convocarJugadores);
  
  const cancelar = document.getElementById('cancelar-conv');
  cancelar.addEventListener('click', cancelarConvoctoria);
  
  function cancelarConvoctoria() {
    window.location.href = 'listaconvocatorias.html';
  }
  // aun no esta finalizada... 
  // no actualiza una convocatoria, agrega no mas...
  function convocarJugadores(){

    const idConvocatoria = parseInt(localStorage.getItem('convocatoria'));

    // lista de checks de la tabla
    const checks = document.getElementsByClassName('checkbox');
    // para almacenar los convocados
    let convocados = [];

    // recorro la lista de checks de la tabla
    for(let i=0; i < checks.length; i++){
      if(checks[i].checked){
        const convocado = {
          'idJugador': parseInt(checks[i].getAttribute("id")),
          'idConvocarotia': idConvocatoria
        };
        
        convocados.push(convocado);
      }
    }

    // las convocatoriasJugadores del localstorage
    const datosLocalStorage = JSON.parse(localStorage.getItem('convocatoriasJugadores'));
    
    if(datosLocalStorage === null){
      // como no hay convocatoriasJugadores seteo no mas
      localStorage.setItem('convocatoriasJugadores',JSON.stringify(convocados));  
    }else{
      // si tenia convocatoriasJugadores agrego las de ahora

      // elimino (filtro) los datos del localstorage del idconvocatoria 
      const filtro = datosLocalStorage.filter(item => item.idConvocarotia !== idConvocatoria);
      // agrego los nuevos convocados al localstorage
      console.log(filtro);

      if(filtro.length > 0){
        // a los nuevos jugadoresConvocatoria les agrego los que filtre (lo que tenia en el localstorage)
        convocados.push(...filtro);
      }

      console.log(convocados);

      
      localStorage.setItem('convocatoriasJugadores',JSON.stringify(convocados));  
    }

    
    window.location.href = 'convocatorias.html';
  }

  function buscarInfoJugadores(){
    const idConvocatoria = parseInt(localStorage.getItem('convocatoria'));
    const datosLocalStorage = JSON.parse(localStorage.getItem('convocatoriasJugadores'));

    const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
    const convocatoria = convocatorias.find(item => item.id === idConvocatoria);
    // const idJugador =
    document.getElementById('titulo').
    appendChild(document.createTextNode(`Argentina vs ${convocatoria.rival} (${convocatoria.fecha})`))


    const body = document.getElementById('body');
     
    fetch('../json/jugadores.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
      data.forEach(element => {if (element.id === idConvocatoria ){
        const tr = document.createElement('tr');

        const id = document.createElement('td');
       
        const dni = document.createElement('td');
        const apellido = document.createElement('td');
        const nombre = document.createElement('td');
        const pieHabil = document.createElement('td');
        const convocar = document.createElement('td');

        id.appendChild(document.createTextNode(element.id));
        dni.appendChild(document.createTextNode(element.dni));
        apellido.appendChild(document.createTextNode(element.apellido));
        nombre.appendChild(document.createTextNode(element.nombre));
        pieHabil.appendChild(document.createTextNode(element.pieHabil));


        // checkbox
        const check = document.createElement('input');
        check.type = 'checkbox';
        // me va a servir para saber quien es el convocado
        check.id = element.id;
        
        // si hay datos de jugadores para la convocatoria
        if(datosLocalStorage !== null && element.id === idConvocatoria){                
          // verifico si el jugador ya esta en la covocatoria 
          const yaEstaConvocado = datosLocalStorage.find
            (item => item.idJugador === element.id 
              && item.idConvocarotia === idConvocatoria);
          
          // si esta hago check 
          if(yaEstaConvocado){
            check.checked = true;
          }
        }

        check.classList.add('checkbox');
        // agrego el check al td
        convocar.appendChild(check);

        tr.appendChild(id);
        tr.appendChild(dni);
        tr.appendChild(apellido);
        tr.appendChild(nombre);
        tr.appendChild(pieHabil);
        tr.appendChild(convocar);
        body.appendChild(tr);
        
      }});
    })
    // console.log(body)
  }