document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
  
    // Obtén los valores ingresados en el formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Crea una nueva fila en la tabla con los valores ingresados
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
  
    // Reinicia los valores del formulario
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  });
  