// ------------ CONST & VARS ------------

let choice;

const empty = "";
const tokenO = "O";
const tokenX = "X";

let board = ["", "", "", "", "", "", "", "", ""];
// let board = [ [ "", "", "" ],
//               [ "", "", "" ],
//               [ "", "", "" ] ];

let turn = 1;
let previous = "";
let next = tokenO;

// ------------ FUNCTIONS ------------

function putTokenIn(player, choice, board) {
  board[choice] = player;

  return board;
}

function match(victory, previous, solution, board) {
  let mySolution = victory[solution];

  if (board[ mySolution[0] ] === previous &&
      board[ mySolution[1] ] === previous &&
      board[ mySolution[2] ] === previous) {
        return true;
      }
  return false;
}

function continueGame(board, previous, turn) {

  if(turn < 6) {
    const victory = [
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 4, 8], [6, 4, 2]
    ];

    // Condiciones de victoria
    // Si el que acaba de mover tiene 3 en línea
    let won = false;

    // Mientras no haya comprobado todas las victorias
    // YYYY no haya match (ganado nadie)...
    for (let i = 0; i < victory.length && !won; i++) {
      won = match(victory, previous, i, board);
    }

    return won;
  }

  return true;
}

// ------------ MAIN ------------

do {
  // ------------ 1) Input ------------

  // Recoger una jugada válida
  // del jugador al que le toque

  do {
    choice = window.prompt("¿Dónde? (0-8)");
  } while (board[choice] !== empty);

  // ------------ 2) Process ------------

  // Colocar la ficha

  board = putTokenIn(next, choice, board);

  // Dar paso al siguiente

  turn++;
  previous = next;

  if( turn % 2 === 0 ) { // Turno par (X)
    next = tokenX;
  }
  else { // Turno impar (O)
    next = tokenO;
  }
  //next = turn % 2 === 0 ? tokenX : tokenO;

  // ------------ 3) Output ------------

  console.log(board);

} while (turn < 10 && continueGame(board, previous, turn));









