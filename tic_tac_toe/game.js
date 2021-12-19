
let displayText = document.querySelector("#switch-text");
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
    if(userXValue === "" || userOValue === ""){
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
            playerO.classList.add("underline-name");
            playerX.classList.remove("underline-name");
            checkWinner();
        }else if(inputArray.length % 2 === 0){
            cell.textContent = "O";
            turnSwitch.textContent = "X";
            arrayO.push(cellIndex);
            playerX.classList.add("underline-name");
            playerO.classList.remove("underline-name");
            checkWinner();
        };
        if(inputArray.length === 9 && thereIsWinner === false){
            displayText.textContent = "Draw";
        };
    },{once : true});
});



function checkWinner(){ 
    arrayX.sort((a,b) => a - b);
    arrayO.sort((a,b) => a - b);
    for(let i = 0; i < winningCombo.length; i++){
        let winningArray = winningCombo[i];
        winningArray = String(winningArray);
        if(String(arrayX).includes(winningArray)){
            displayText.textContent = "Player X won!";
            playerX.classList.add("announce-winner");
            playerO.classList.remove("underline-name");
            thereIsWinner = true;
        }else if(String(arrayO).includes(winningArray)){
            displayText.textContent = "Player O won!";
            playerO.classList.add("announce-winner");
            playerX.classList.remove("underline-name");
            thereIsWinner = true;
        };
        if(arrayX.length >= 4 && thereIsWinner === false){
            if(
                document.getElementById("0").innerHTML === "X" &&
                document.getElementById("3").innerHTML === "X" &&
                document.getElementById("6").innerHTML === "X" 
                
            ){
                displayText.textContent = "Player X won!";
                playerX.classList.add("announce-winner");
                playerO.classList.remove("underline-name");
            };
            if(
                document.getElementById("1").innerHTML === "X" &&
                document.getElementById("4").innerHTML === "X" &&
                document.getElementById("7").innerHTML === "X" 
            ){
                displayText.textContent = "Player X won!";
                playerX.classList.add("announce-winner");
                playerO.classList.remove("underline-name");
            };
            if(
                document.getElementById("2").innerHTML === "X" &&
                document.getElementById("5").innerHTML === "X" &&
                document.getElementById("8").innerHTML === "X" 
            ){
                displayText.textContent = "Player X won!";
                playerX.classList.add("announce-winner");
                playerO.classList.remove("underline-name");
            };
            if(
                document.getElementById("0").innerHTML === "X" &&
                document.getElementById("4").innerHTML === "X" &&
                document.getElementById("8").innerHTML === "X" 
            ){
                displayText.textContent = "Player X won!";
                playerX.classList.add("announce-winner");
                playerO.classList.remove("underline-name");
            };
            if(
                document.getElementById("2").innerHTML === "X" &&
                document.getElementById("4").innerHTML === "X" &&
                document.getElementById("6").innerHTML === "X" 
            ){
                displayText.textContent = "Player X won!";
                playerX.classList.add("announce-winner");
                playerO.classList.remove("underline-name");
            };
        };
        if(arrayO.length >= 4 && thereIsWinner === false){
            if(
                document.getElementById("0").innerHTML === "O" &&
                document.getElementById("3").innerHTML === "O" &&
                document.getElementById("6").innerHTML === "O" 
            ){
                displayText.textContent = "Player O won!";
                playerO.classList.add("announce-winner");
                playerX.classList.remove("underline-name");
            };
            if(
                document.getElementById("1").innerHTML === "O" &&
                document.getElementById("4").innerHTML === "O" &&
                document.getElementById("7").innerHTML === "O" 
            ){
                displayText.textContent = "Player O won!";
                playerO.classList.add("announce-winner");
                playerX.classList.remove("underline-name");
            };
            if(
                document.getElementById("2").innerHTML === "O" &&
                document.getElementById("5").innerHTML === "O" &&
                document.getElementById("8").innerHTML === "O" 
            ){
                displayText.textContent = "Player O won!";
                playerO.classList.add("announce-winner");
                playerX.classList.remove("underline-name");
            };
            if(
                document.getElementById("0").innerHTML === "O" &&
                document.getElementById("4").innerHTML === "O" &&
                document.getElementById("8").innerHTML === "O" 
            ){
                displayText.textContent = "Player O won!";
                playerO.classList.add("announce-winner");
                playerX.classList.remove("underline-name");
            };
            if(
                document.getElementById("2").innerHTML === "O" &&
                document.getElementById("4").innerHTML === "O" &&
                document.getElementById("6").innerHTML === "O" 
            ){
                displayText.textContent = "Player O won!";
                playerO.classList.add("announce-winner");
                playerX.classList.remove("underline-name");
            };
        }
    };
};

resetButton.addEventListener("click", function(){
    window.location.reload();
});



