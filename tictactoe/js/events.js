
let currentToken = "X";

// Capturar el elemento disparador....
const pos00 = document.getElementById("position0_0");

// Asignarle un callback ante un evento
pos00.addEventListener("click", function () {

  putToken(currentToken, this.id);
});

// Definir la función de callback
function putToken(token, position) {
  // Poner una ficha en una posición

  document
    .getElementById(position)
    .innerHTML = token;

  document
    .getElementById(position)
    .className = "casillaMarcada";

  currentToken = currentToken === "X" ? "O" : "X";
}
