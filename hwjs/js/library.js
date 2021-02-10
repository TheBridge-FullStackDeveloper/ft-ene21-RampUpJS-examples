
function saludarA(person) {
  console.log("Hola " + person);
}

//saludarA("David");

//let myName = prompt("Say my name");
//saludarA(myName);

//confirm("Eres el puto amo??")
//alert("Te quiero")




function multiplicarDosNumeros(number1, number2) {
  //return number1 * number2;

  let result = 0;
  let beg, end;

  // Si number2 es positivo o cero...
  if (number2 >= 0) {
    // --> El bucle tiene que ir DESDE cero HASTA number2
    beg = 0;
    end = number2;
  }
  // Si number2 es negativo...
  else {
    // --> El bucle tiene que ir DESDE number2 HASTA cero
    beg = number2;
    end = 0;
  }
  
  for (let i = beg; i < end; i++) {
    result += number1;
  }

  return result;
}



// f(x, y) = x * y

// f(2,3) = 6
// f(-12, 12) = -144



// Version 1 (+memory)
let resultado1 = multiplicarDosNumeros(-99, 138);
console.log(resultado1);

let resultado2 = resultado1 + 4;
console.log(resultado2);

// Version 2 (+CPU)
console.log( multiplicarDosNumeros( -99, -138 ) );

console.log(multiplicarDosNumeros(-99, 138) + 4);
