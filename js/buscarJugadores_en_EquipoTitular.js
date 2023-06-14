// Obtener la referencia del input de búsqueda
var searchInput = document.getElementById('site-search');

// Agregar un event listener para capturar el evento de búsqueda
searchInput.addEventListener('keyup', function() {
  // Obtener el valor ingresado en el input de búsqueda
  var searchText = searchInput.value.toLowerCase();

  // Obtener todas las filas de la tabla de jugadores
  var rows = document.querySelectorAll('.tablajugadores tr');

  // Recorrer las filas de la tabla y ocultar las que no coincidan con la búsqueda
  for (var i = 1; i < rows.length; i++) {
    var playerCell = rows[i].getElementsByTagName('td')[1];
    var playerName = playerCell.textContent.toLowerCase();

    if (playerName.includes(searchText)) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
});