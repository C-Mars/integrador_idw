
/*************************VALIDACIÓN ***********************************/
function validarUsuario() {
  const nomusuario = document.getElementById('textUsuario').value;
  const contrasenia = document.getElementById('texcontrasenia').value;

  if (nomusuario.length === 0 || contrasenia.length === 0) {
    alert('El nombre de usuario o clave está vacío');
    return false;
  } else {
    alert('Hola ' + nomusuario + '! Bienvenido/a');
  }

}


function crearCuenta() {
  alert('Para crear una cuenta debe tener la autorizacion de AFA. Para más información ingrese a la página de contacto del sitio')
}
/****************************FORMULARIO***********************************/
const enviar = document.getElementById('enviar-cont');
enviar.addEventListener('click', formularioContacto)

function leerForm() {
  contacto = JSON.parse(localStorage.getItem('contacto'));
  if (contacto === null) {
    fetch('../json/contacto.json')
      .then((res) => {
        return res.json()
      })
      .then((data) => {

        localStorage.setItem('contacto', JSON.stringify(data));
      })
  }
}

function formularioContacto() {
  leerForm()
  const jsonFormCont = localStorage.getItem('contacto');
  if (jsonFormCont !== null) {
    const formContactos = JSON.parse(localStorage.getItem('contacto'));

    let idMax = formContactos.reduce((max, obj) => obj.id > max ? obj.id : max, -Infinity);
    let i = 0;

    if (idMax !== -Infinity){
      i = idMax + 1;
    }
    const cont = {
      'id': i,
      'nombreyapellido': document.getElementById('nombreyapellido').value,
      'email': document.getElementById('email').value,
      'asunto': document.getElementById('asunto').value,
      'comentario': document.getElementById('comentario').value
    }

    formContactos.push(cont);

    localStorage.setItem('contacto', JSON.stringify(formContactos));

  }
}

