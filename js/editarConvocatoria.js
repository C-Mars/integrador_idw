// EDITAR CONVOCATORIA************************************************************************
window.addEventListener("load", function () {
    leerDatos();
  });
  
  const guardar = document.getElementById('g-ed-conv');
  guardar.addEventListener('click', guardarConvocatoria);
  
  const cancelar = document.getElementById('c-ed-conv');
  cancelar.addEventListener('click', cancelarEdicion);
  
  function leerDatos(){
    const idEditar = parseInt(localStorage.getItem('editame'));
  
    const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
  
    const convocatoria = convocatorias.find(item => item.id === idEditar );
    document.getElementById('texfechaconv').value = convocatoria.fecha;
    document.getElementById('texeqrival').value = convocatoria.rival;
    document.getElementById('texcapitan').value = convocatoria.capitan;
  }
  
  function editarConvocatoria(param){
    let idEditar = parseInt(param.getAttribute('id'));
    localStorage.setItem('editame',JSON.stringify(idEditar));
    window.location.href = 'editarconvocatoria.html'
  }
  
  function cancelarEdicion(){
    window.location.href = 'convocatorias.html';
  }
  
  function guardarConvocatoria(){
    const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
    
    const idEditar = parseInt(localStorage.getItem('editame'));
  
    // me quedo con los items menos el que quiero modificar
    const convocatoriasNuevo = convocatorias.filter( function(item){
      return item.id !== idEditar;
    });
    
    const aux = {
      'id' : idEditar,
      'fecha' : document.getElementById('fechaconv').value,
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