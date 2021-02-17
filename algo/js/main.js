// ---------------- ESTADO INICIAL ----------------

let enabledButton;
const btn1 = document.getElementById("btn1");
const img1 = document.getElementById("img1");

function init(initialState, initialClass, initialText, initialImage) {

  enabledButton = initialState;
  btn1.className += initialClass;
  btn1.innerText = initialText;

  // Cambiar la imagen
  img1.src = initialImage;
}

init(false, " off", "OFF", "img/balrog.jpg");

// ---------------- CAMBIOS ----------------

// Cuando el usuario haga click en el botón...
btn1.addEventListener("click", changeState);
/*
btn1.addEventListener("click", function() {
  changeState();
});
*/

// ... lo cambio al contrario
function changeState() {
  
  // if (está en ON) {
  if (enabledButton) {
    enabledButton = false;
    btn1.classList.remove("on");
    btn1.classList.add("off");
    btn1.innerText = "OFF";

    // Cambiar la imagen
    img1.src = "img/balrog.jpg";
  }
  else {
    enabledButton = true;
    btn1.classList.remove("off");
    btn1.classList.add("on");
    btn1.innerText = "ON";

    // Cambiar la imagen
    img1.src = "img/newgandalf.jpg";
  }
}
