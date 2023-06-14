
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
/*********************NUEVA CONVOCATORIA***********************************************/

  
  const guardar = document.getElementById('g-nuev-conv');
  guardar.addEventListener("click", crearConvocatoria);
  
  const cancelar = document.getElementById('c-nuev-conv');
  cancelar.addEventListener("click", cancelarConvoctoria);
  
  function crearConvocatoria() {
    const jsonCovocatorias = localStorage.getItem('convocatorias');
    if (jsonCovocatorias !== null) {
      const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
      
      maxId = convocatorias.reduce((max, obj) => obj.id > max ? obj.id : max, -Infinity);
      let i = 0;
  
      if (maxId !== -Infinity) {
        i = maxId + 1;
      }
      
      // const valorFecha =document.getElementById('texfechaconv').value;
      // const valorDate = new Date(valorFecha);
      // const fechaString = valorDate.toLocaleDateString();
      // alert(fechaString)

      const convocatoria = {
        'id': i,
        'fecha': document.getElementById('texfechaconv').value,
        'rival': document.getElementById('texeqrival').value,
        'capitan': document.getElementById('texcapitan').value
      }
      convocatorias.push(convocatoria);
      localStorage.setItem('convocatorias', JSON.stringify(convocatorias));
  
      window.location.href = 'convocatorias.html';
    }
  }
  function cancelarConvoctoria() {
    window.location.href = 'convocatorias.html';
  }