
//const playerTurn = document.querySelector(".turn-container");
let turnSwitch = document.querySelector("#player-turn");
const button = document.querySelector("#restart-button");
const grid = document.querySelector(".grid-container");
const gridCells = Array.from(document.querySelectorAll(".cell"));
//console.log(gridCells);

let board = ["","","","","","","","",""];

const playerX = "Player X Won!";
const playerO = "Player O Won!";
const tie = "TIE";

/*
- coordinates visual:

[0] [1] [2]
[3] [4] [5]
[6] [7] [8]

*/

const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let inputArray = [];
let arrayX = [];
let arrayO = [];


gridCells.forEach( (cell) => {
    let cellIndex = gridCells.indexOf(cell);
    cell.addEventListener("click", function startGame(){
        if(inputArray.length % 2 === 1){
            cell.textContent = "X";
            turnSwitch.textContent = "O";
            inputArray.push(cellIndex);
            cell.removeEventListener("click",startGame);
        } else if(inputArray.length % 2 === 0){
            cell.textContent = "O";
            turnSwitch.textContent = "X";
            inputArray.push(cellIndex);
            cell.removeEventListener("click",startGame);
        };
        
       if(cell.textContent === "X"){
           arrayX.push(cellIndex);
       } else if(cell.textContent === "O"){
           arrayO.push(cellIndex);
       };
       if(arrayX.length === 3){
           compareWinner();
       };
       if(arrayO.length === 3){
           compareWinner();
       };
       
    });
    
});

// let winner = [];

// winningCombo.forEach(winningArray => {
//     winner = winningArray;
// });



function compareWinner(){
    winningCombo.forEach(winningArray => {
        winner = winningArray;
    });
};
