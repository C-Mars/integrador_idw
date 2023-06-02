

// *************** Consulta ********************* //
// function enviar(){
//     let nombreApellido = document.getElementById("nombreyapellido");
//     alert(nombreApellido)
// document.getElementById('leerLocalStorgeMejorado').addEventListener('click',leerLocalStorgeMejorado);
// document.getElementById('enviar').addEventListener('click',enviar);

// function enviar(){
//     const jsonContacto = localStorage.getItem('contacto');

//     // si hay datos agrego al lo que haya en el local
//     if(jsonContacto !== null){
//         const jsonData = JSON.parse(jsonContacto);

//         let id = jsonData.length;

//         const contactoNuevo = {
//             'id': id,
//             'nombreyapellido': document.getElementById('nombreyapellido').value,
//             'email': document.getElementById('email').value,
//             'asunto': document.getElementById('asunto').value,
//             'comentario': document.getElementById('comentario').value,
//         }
        
//         jsonData.push(contactoNuevo);
        
//         // console.log(jsonData);

//         // elimino del local la clave alumnos
//         localStorage.removeItem('contacto');

//         const guardar = JSON.stringify(jsonData);
        
//         localStorage.setItem('contacto', guardar);
//     }
// }

/*convocatorias */

document.getElementById('nueva-conv').addEventListener('click',crearConvocatoria );

function crearConvocatoria(){
    window.location.href= 'crearconvocatoria.html'
}