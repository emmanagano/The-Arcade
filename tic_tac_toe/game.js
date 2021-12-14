
let playerTurn = document.querySelector("#switch-text");
let turnSwitch = document.querySelector("#player-turn");
const resetButton = document.querySelector("#restart-button");
const startButton = document.querySelector("#start-button");
const grid = document.querySelector(".grid-container");
let gridCells = Array.from(document.querySelectorAll(".cell"));

let board = ["","","","","","","","",""];


/*
- coordinates visual:

[0] [1] [2]
[3] [4] [5]
[6] [7] [8]

*/

let inputArray = [];
let arrayX = [];
let arrayO = [];

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

let gameActive = true;

startButton.addEventListener("click", function main(){
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
               if(arrayX.length === 3){
                   compareWinner();
               };
           } else if(cell.textContent === "O"){
               arrayO.push(cellIndex);
               if(arrayO.length === 3){
                    compareWinner();
               };
           };
           if(inputArray.length === 9){
                return playerTurn.textContent = "Tie";
           };
        });
    });
});

function compareWinner(){
    for(let i = 0; i < winningCombo.length; i ++){
        let winningOuter = winningCombo[i];
        if(String(winningOuter) === String(arrayX)){
            playerTurn.textContent = "Player X won!";
            gameOver();
        } else if(String(winningOuter) === String(arrayO)){
            playerTurn.textContent = "Player O won!";
            gameOver();
        };
    };
};

function gameOver(over){
    over = true;
};

