
let displayText = document.querySelector("#switch-text");
let turnSwitch = document.querySelector("#player-turn");
const grid = document.querySelector(".grid-container");
let gridCells = Array.from(document.querySelectorAll(".cell"));



// Buttons
const resetButton = document.querySelector("#restart-button");


/*
- coordinates visual:

[0] [1] [2]
[3] [4] [5]
[6] [7] [8]

*/

// Global variables

const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let inputArray = [];
let arrayX = [];
let arrayO = [];
let gameIsActive = true;
let board = ["","","","","","","","",""];



gridCells.forEach(cell => {
    let cellIndex = gridCells.indexOf(cell);
    cell.addEventListener("click", function startGame(){
        inputArray.push(cell);
        if(inputArray.length % 2 === 1){
            cell.textContent = "X";
            turnSwitch.textContent = "O";
            arrayX.push(cellIndex);
            cell.removeEventListener("click",startGame);
            checkWinner();
        }else if(inputArray.length % 2 === 0){
            cell.textContent = "O";
            turnSwitch.textContent = "X";
            arrayO.push(cellIndex);
            cell.removeEventListener("click",startGame);
            checkWinner();
        };
        if(inputArray.length === 9){
            displayText.textContent = "Draw";
        };
    });
});

function checkWinner(){
    
};

resetButton.addEventListener("click", function(){
    window.location.reload();
});



