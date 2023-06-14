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


window.addEventListener("load", function () {
  buscarInfo();
  borrarBodyTabla();
});


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
  };

  const convocatorias = JSON.parse(localStorage.getItem('convocatorias'));
  
  const idRango = JSON.parse(localStorage.getItem('rangoFechas'));
  
  // const listaFecha = Array.from(convocatorias, (convocatoria) => convocatoria.fecha);
  // console.log(listaFecha)
  
  
  // const filtro = convocatorias.map(conv=> conv.fecha)
  // alert(filtro)
  /** No funciona */
//   idRango.forEach((item) => {
//     const filtro = listaFecha.filter((conv)=> {
//       return conv === item})
//     const listaBusqueda = []
//     filtro.forEach((p) => {
//         const aux = {
//           'id' : p.id,
//           'fecha' : p.fecha,
//           'rival' : p.rival,
//           'capitan' :p.capitan
//         }
//           listaBusqueda.push(aux);
//           const aux2 = listaBusqueda.sort( function(a,b){
//             if(a.id < b.id){
//               return -1
//             }
//             return 0;
//           })   
//           localStorage.setItem('convocabus', JSON.stringify(aux2));
//         })
      
      
//     }) 
    
// ;
  
  // });
  // const idConvocatoria = parseInt(localStorage.getItem('convocatoria'));
 

  /**CREA UN NUEVO OBJETO NO FUNCIONA**/
  /**FUNCIONA EL FILTRO PERO SUBE AL LOCALSTORAGE EL ÚLTIMO DATO*/
  
  
  idRango.forEach((item) => {
      // const listaBusqueda = []
    
    convocatorias.forEach((conv) => {
      // const listaBusqueda = []
      if(item === conv.fecha){
        const listaBusqueda = []
        
          const aux = {
            'id' : conv.id,
            'fecha' :conv.fecha,
            'rival' :conv.rival,
            'capitan' :conv.capitan
          }
          listaBusqueda.push(aux);
   
          localStorage.setItem('convocabus', JSON.stringify(listaBusqueda));     
      } 
      // localStorage.setItem('convocabus', JSON.stringify(listaBusqueda)); 
    }) 
    // localStorage.setItem('convocabus', JSON.stringify(listaBusqueda));
  });


  };


// function rangoBusqueda(inicio,fin){
//   const inicioDate = new Date(inicio);
//   const finDate = new Date(fin);
//   let i = inicioDate ;
//   const rangoFechas = [];
//   while (i <= finDate) {
//     rangoFechas.push(new Date(i));
//     i.setDate(i.getDate() + 1);
//   };
//   return rangoFechas;
// };




