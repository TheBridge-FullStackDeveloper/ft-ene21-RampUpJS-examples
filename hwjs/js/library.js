
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



// // Version 1 (+memory)
// let resultado1 = multiplicarDosNumeros(-99, 138);
// console.log(resultado1);

// let resultado2 = resultado1 + 4;
// console.log(resultado2);

// // Version 2 (+CPU)
// console.log( multiplicarDosNumeros( -99, -138 ) );

// console.log(multiplicarDosNumeros(-99, 138) + 4);


// -----------------------------------

let ages = []; // array

ages[0] = 27;
ages[1] = 76;
ages[2] = 99;
ages[3] = 11;

let stuff = [ 27, true, "David", [ 3, "r" ], 99 ];

console.log("Me llamo " + stuff[2] + " y tengo " + stuff[0] + " años y mi letra favorita es la... " + stuff[3][1] );

let last = stuff.length - 1; // 3
stuff[last]++;

// Añade un elemento a un array por el final sin saber su tamaño
stuff[stuff.length] = "looooooooool";

//stuff.push("looooooooool");


let myName = "David";
let myAge = 39;
let mySkills = [ "HTML", "CSS", "JS" ];

function teachCoding() {
  console.log("Soy programador fddfbthrnrtbñ regr eñgñññget >>> \"\"\"");
}

// JSON
// JavaScript Object Notation

let me = {
  name: "David",
  age: 39,
  skills: ["HTML", "CSS", "JS"]
};

console.log("Me llamo " + me.name + " " + me.surname + " y tengo " + me.age + " años y lo que sé hacer es: " + me.skills[0] + ", " + me.skills[1] + " y " + me.skills[2] );

me.name = "Max";
me.surname = "Power";

console.log("Me llamo " + me.name + " " + me.surname + " y tengo " + me.age + " años y lo que sé hacer es: " + me.skills[0] + ", " + me.skills[1] + " y " + me.skills[2]);


let darkMe = me;

darkMe.name = "DarkDavid";
darkMe.age = -39;

console.log(me.name);


// Dado un conjunto de personas, implementar una funcion que devuelva
// el promedio de edades de todas ellas

let people = [
  {
    name: "A",
    age: 18 
  },
  {
    name: "B",
    age: 23
  },
  {
    name: "C",
    age: 30
  }
];


function getAverage(people) {

  let totalAges = 0;
  let finalAverage;

  // Recorrer el array para...
  for (let i = 0; i < people.length; i++) {

    // 1) Acumular la edad de cada persona
    totalAges += people[i].age;
  }

  // 2) Dividir el total acumulado entre el número de personas
  finalAverage = totalAges / people.length;

  return finalAverage;
}

console.log( getAverage(people) );
