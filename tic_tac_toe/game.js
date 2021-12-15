
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

let cellIndex;
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

startButton.addEventListener("click", main());

function main(){
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
                playerTurn.textContent = "Draw";
            };
        });
    });
};

function checkWinner(){ 
    if(arrayX.length === 3 || arrayO.length === 3){
        for(let i = 0; i < winningCombo.length; i++){
            let winningIndex = winningCombo[i];
            if(String(arrayX) === String(winningIndex)){
                playerTurn.textContent = "Player X Won!";
            }else if(String(arrayO) === String(winningIndex)){
                playerTurn.textContent = "Player O Won!";
            };
        };
    };
};


resetButton.addEventListener("click", function(){
    window.location.reload();
});



