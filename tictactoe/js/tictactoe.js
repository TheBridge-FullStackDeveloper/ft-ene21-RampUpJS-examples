// ------------ CONST & VARS ------------

const EMPTY = "";
const TOKEN_O = "O";
const TOKEN_X = "X";

let choice;

let board = ["", "", "", "", "", "", "", "", ""];
/*
let board = [ [ "", "", "" ],
              [ "", "", "" ],
              [ "", "", "" ]
];
*/

let turn = 0;
let next = TOKEN_O;

// ------------ FUNCTIONS ------------

function updateNextPlayer(turn) {

  // Turno par (X)
  if( turn % 2 === 0 ) {
    return TOKEN_X;
  }
  // Turno impar (O)
  else {
    return TOKEN_O;
  }

  // Ternary version:
  //return turn % 2 === 0 ? TOKEN_X : TOKEN_O;
}

function putTokenIn(player, choice, board) {
  board[choice] = player;

  return board;
}

function match(next, solution, board) {
  
  // Si la última jugada hace 3 en raya para una solución concreta...
  if (board[ solution[0] ] === next &&
      board[ solution[1] ] === next &&
      board[ solution[2] ] === next) {
    return true; // ... GANA!!!
  }
  else {
    return false;
  }
}

function continueGame(board, next, turn) {

  let result = true;

  // Si ha habido 5 jugadas o más...
  if(turn > 4) {

    // Si no es la última jugada posible...
    if(turn < 9) {

      const victory = [
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [6, 4, 2]
      ];

      // ------ Condiciones de victoria ------

      // De momento nadie ha ganado
      let somebodyWon = false;

      // Mientras no haya comprobado todas las victorias
      // posibles y no haya ganado nadie todavía...
      for (let i = 0; i < victory.length && !somebodyWon; i++) {

        // Si el que acaba de mover tiene 3 en línea...
        somebodyWon = match(next, victory[i], board);
      }

      // Si no ganó nadie, el juego continúa
      result = !somebodyWon ? true : false;
    }
    else {
      result = false;
    }
  }

  return result;
}

// ------------ MAIN ------------

// Jugar...
do {
  // ------------ 0) Pre-Process ------------

  // Incrementar el turno
  turn++;

  // Determinar siguiente jugador
  next = updateNextPlayer(turn);
  
  // ------------ 1) Input ------------
  
  // Recoger una jugada válida...

  do {
    choice = window.prompt("Elige una casilla (0-8)");
    choice = parseInt(choice);
    
  // ... mientras sea una casilla vacía
  } while (board[choice] !== EMPTY);

  // ------------ 2) Process ------------

  // Colocar la ficha en el tablero
  board = putTokenIn(next, choice, board);

  // ------------ 3) Output ------------

  console.log(board);

// ... mientras el juego continúe
} while (continueGame(board, next, turn));
