
// LOOP
/*
1) Inicialización del estado de partida
2) Condición de parada
3) Cambio en las condiciones
*/

// Se pide: Decir Bitelchús por consola 3 veces

// 1) Contador
let i = 0;
let m = "";

// 2) Llegue a 3
while(i < 3) {

  // Acción/ones a realizar
  console.log("Bitelchús");

  // 3) Incrementar el contador
  //i = i + 1;
  //i += 1;
  i++;

  m += "A";
}

console.log(m);

// ------------------------

let user = "";

// Mientras no sea el usuario admin...
while (user != "admin") {

  // Pedir nombre de usuario
  user = prompt("Escriba el usuario");

  // Si es admin...
  if (user == "admin") {
    let key = "";

    // Mientras no esté bien la clave...
    while (key != "1234") {

      // Pedir la clave
      key = prompt("Escriba la clave");
    }
  }
}

console.log("Bienvenidx, Crack ", user);
