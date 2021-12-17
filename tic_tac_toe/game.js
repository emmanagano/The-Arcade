
let playerTurn = document.querySelector("#switch-text");
let turnSwitch = document.querySelector("#player-turn");
const resetButton = document.querySelector("#restart-button");
//const startButton = document.querySelector("#start-button");
//const grid = document.querySelector(".grid-container");
let gridCells = Array.from(document.querySelectorAll(".cell"));



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
    [2,4,6],
];

let thereIsWinner = false;


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
        if(thereIsWinner === true){
            for(let cell of gridCells){
                cell.textContent = "";
            };
        };
        if(inputArray.length === 9 && thereIsWinner === false){
            playerTurn.textContent = "Draw";
        };
    });
});

/*

enter our names and have them displayed
have our order chosen for us by the game
take turns placing our marks in empty spaces
not be able to place our marks in an occupied space
be told when a move causes a player to win, or to draw
start the game over without having to reset the browser
 
*/


function checkWinner(){ 
    arrayX.sort((a,b) => a - b);
    arrayO.sort((a,b) => a - b);
    if(arrayX.length == 3 || arrayO.length === 3){
        for(let winningArray of winningCombo){
            if(String(arrayX) === String(winningArray)){
                playerTurn.textContent = "Player X won!";
                thereIsWinner = true;
                gameOver();
            }else if(String(arrayO) === String(winningArray)){
                playerTurn.textContent = "Player O won!";
                thereIsWinner = true;
                gameOver();
            };
        };
    };
};

function gameOver(){
    if(thereIsWinner === true){
        for(let cell of gridCells){
            cell.textContent = "";
        };
        arrayX = [];
        arrayO = [];
        inputArray = [];
    };
};


//console.log(checkWinner(arrayX));


resetButton.addEventListener("click", function(){
    window.location.reload();
});



