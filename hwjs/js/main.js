// document.write("Hola Mundo (muggles mode)");
console.log("Hola Mundo (developer mode)");

// Constantes y variables

const PI = 3.14159; // number
const CURRENT_YEAR = 2021; // number

let message; // string
message = "Hello world"; // string

let workToday = true; // boolean

console.log( 3 + 2 * 5 );
console.log( true || false && true ); // true

console.log("Today is " + CURRENT_YEAR + ". " + message);
console.log("Tomorrow is " + (CURRENT_YEAR + 1) + ". " + message);

console.log(typeof message);
console.log(typeof workToday);
console.log(typeof CURRENT_YEAR);

workToday = !workToday && true;
console.log(workToday); // false

workToday = !workToday && true;
console.log(workToday); // true

// Tipos y operaciones:
/*
  number: + - * / %
  string: +
  boolean: && || !
  undefined
  null

  Comparación: ==, >, 
*/

// Condicionales
if (CURRENT_YEAR > 2000 && workToday) {
  console.log("Nos engañaron");
}
else {
  console.log("El apocalipsis va a llegar");
}


if (CURRENT_YEAR > 2000) {
  if (workToday) {
    console.log("Nos engañaron");
  }
  else {
    console.log("Soy feliz");
  }
}
else {
  console.log("El apocalipsis va a llegar");
}
