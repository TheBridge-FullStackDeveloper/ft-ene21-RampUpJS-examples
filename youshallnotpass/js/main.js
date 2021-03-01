// ---------------- ESTADO INICIAL ----------------

let enabledButton;
const btn1 = document.getElementById("btn1");
const img1 = document.getElementById("img1");

function init(initialState, initialClass, initialText, initialImage) {

  enabledButton = initialState;
  btn1.className += initialClass;
  btn1.innerText = initialText;
  img1.src = initialImage;
}

init(false, " off", "OFF", "img/balrog.jpg");

// ---------------- CAMBIOS ----------------

// Cuando el usuario haga click en el botón...
btn1.addEventListener("click", function() {
  enabledButton = changeState(enabledButton, btn1, img1);
});

// ... lo cambio al contrario
function changeState(currentState, buttonDOM, imageDOM) {
  
  // if (está en ON) {
  if (currentState) {
    currentState = false;
    buttonDOM.classList.remove("on");
    buttonDOM.classList.add("off");
    buttonDOM.innerText = "OFF";

    // Cambiar la imagen
    imageDOM.src = "img/balrog.jpg";
  }
  else {
    currentState = true;
    buttonDOM.classList.remove("off");
    buttonDOM.classList.add("on");
    buttonDOM.innerText = "ON";

    // Cambiar la imagen
    imageDOM.src = "img/newgandalf.jpg";
  }

  return currentState;
}
