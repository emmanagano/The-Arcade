
let playerTurn = document.querySelector("#switch-text");
let turnSwitch = document.querySelector("#player-turn");
const resetButton = document.querySelector("#restart-button");
let gridCells = Array.from(document.querySelectorAll(".cell"));
let goButton = document.querySelector("#go-button");


let inputArray = [];
let arrayX = [];
let arrayO = [];
let thereIsWinner = false;
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



let userNameX = document.querySelector("#user-x-name");
let userNameO = document.querySelector("#user-o-name");
let playerX = document.querySelector("#player-x");
let playerO = document.querySelector("#player-o");

goButton.addEventListener("click",function getUser(){
    let userXValue = document.querySelector("#user-x-name").value;
    let userOValue = document.querySelector("#user-o-name").value;
    if(userXValue && userOValue){
        userNameX.classList.add("display-none");
        userNameO.classList.add("display-none");
        playerX.classList.add("user-input");
        playerX.textContent = `${userXValue}`;
        playerO.classList.add("user-input");
        playerO.textContent = `${userOValue}`;
    };
    if(userXValue ==="" || userOValue === ""){
        alert("Please enter your name");
    };
});


gridCells.forEach(cell => {
    let cellIndex = gridCells.indexOf(cell);
    cell.addEventListener("click", function startGame(){
        inputArray.push(cell);
        if(inputArray.length % 2 === 1){
            cell.textContent = "X";
            turnSwitch.textContent = "O";
            arrayX.push(cellIndex);
            cell.removeEventListener("click",startGame);
            playerO.classList.add("underline-name");
            playerX.classList.remove("underline-name");
            checkWinner(arrayX);
        }else if(inputArray.length % 2 === 0){
            cell.textContent = "O";
            turnSwitch.textContent = "X";
            arrayO.push(cellIndex);
            cell.removeEventListener("click",startGame);
            playerX.classList.add("underline-name");
            playerO.classList.remove("underline-name");
            checkWinner(arrayO);
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

//let playerData = [];

function checkWinner(playerArray){ 
    arrayX.sort((a,b) => a - b);
    arrayO.sort((a,b) => a - b);
    //console.log("arrayO:",String(arrayO),"arrayX:",String(arrayX));
    for(let winningArray of winningCombo){
        //console.log("winningArray:", String(winningArray));
        if(String(arrayX).includes(String(winningArray))){
            playerTurn.textContent = "Player X won!";
            playerX.classList.add("announce-winner");
            playerO.classList.remove("underline-name");
        }else if(String(arrayO).includes(String(winningArray))){
            playerTurn.textContent = "Player O won!";
            playerO.classList.add("announce-winner");
            playerX.classList.remove("underline-name");
        };
    };
    
};




//console.log(checkWinner(arrayX));


resetButton.addEventListener("click", function(){
    window.location.reload();
});



