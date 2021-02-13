// Exercício 01

function celsiusToFahrenheit(temp_c) {
  var temp_f = (9 * temp_c) / 5 + 32;
  return temp_f;
}

document.getElementById("converter").onclick = function () {
  var celsius = parseFloat(document.getElementById("temp_celsius").value);
  var fahrenheit = celsiusToFahrenheit(celsius);
  document.getElementById("temp_fahr").innerHTML =
    "<strong>" + fahrenheit + "</strong>";
};

// Exercício 02
var inicio = 1930;
document.getElementById("anos_copa").innerHTML = "";
for (var a = inicio; a <= 2018; a += 4) {
  document.getElementById("anos_copa").innerHTML += "<li>" + a;
  +" </li>";
}

// Exercício 03
