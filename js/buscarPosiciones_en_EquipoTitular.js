// Obtener la tabla de jugadores
var tablaJugadores = document.getElementsByClassName('tablajugadores')[0];

// Obtener todas las filas de la tabla, excepto la primera (encabezados)
var filas = tablaJugadores.getElementsByTagName('tr');
var numFilas = filas.length;

// Definir un objeto para mapear las posiciones con sus abreviaturas
var posiciones = {
  'Arq': 'Arquero',
  'Def': 'Defensor',
  'Med': 'Volante',
  'Del': 'Delantero'
};

// Recorrer todas las filas a partir de la segunda
for (var i = 1; i < numFilas; i++) {
  // Obtener la celda de la posición de cada fila
  var celdaPosicion = filas[i].getElementsByTagName('td')[3];
  
  // Obtener el contenido de la celda
  var posicion = celdaPosicion.textContent.trim();
  
  // Verificar si la posición existe en el objeto posiciones
  if (posicion in posiciones) {
    // Reemplazar el contenido de la celda con la abreviatura correspondiente
    celdaPosicion.textContent = posicion + ' (' + posiciones[posicion] + ')';
  }
}
