
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
    [2,4,6],
];

let gameIsActive = true;


gridCells.forEach(cell => {
    let cellIndex = gridCells.indexOf(cell);
    cell.addEventListener("click", function startGame(e){
        e = e.target;
        inputArray.push(cell);
        if(inputArray.length % 2 === 1){
            cell.textContent = "X";
            turnSwitch.textContent = "O";
            arrayX.push(cellIndex);
            cell.removeEventListener("click",startGame);
            checkWinner(e);
        }else if(inputArray.length % 2 === 0){
            cell.textContent = "O";
            turnSwitch.textContent = "X";
            arrayO.push(cellIndex);
            cell.removeEventListener("click",startGame);
            checkWinner(e);
        };
        if(inputArray.length === 9){
            playerTurn.textContent = "Draw";
        };
    });

});

/*
 massive bugs in your code:
 - only few winning combinations are possible. 
 - your checkWinner function is useless. 
 - the event listener doesn't stop once a player won.
 - pick whether you want the startButton or not.
 - the board doesn't clear up
    - either that or make sure the user can no longer click the board.
 - if you get stuck at this for a long time, 
    reconsider not making a vs. computer AI. Would be too times consuming
    might not reach deadline
 - you have no use of gameIsActive and board variables.


*/


function checkWinner(e){ 
    arrayX.sort((a,b) => a - b);
    arrayO.sort((a,b) => a - b);
    if(arrayX.length == 3 || arrayO.length === 3){
        for(let winningArray of winningCombo){
            if(String(arrayX) === String(winningArray)){
                playerTurn.textContent = "Player X won!";
            }else if(String(arrayO) === String(winningArray)){
                playerTurn.textContent = "Player O won!"
                e.stopPropagation();
            };
        };

    };
};

//console.log(checkWinner(arrayX));


resetButton.addEventListener("click", function(){
    window.location.reload();
});



