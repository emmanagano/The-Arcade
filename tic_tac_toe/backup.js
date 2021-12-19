// const startButton = document.querySelector("#start-button");


// let currentPlayer = "X";
// const announceWinner = () => `Player ${currentPlayer} won!`;
// const announceDraw = () => `Draw! `;
// const switchTurn = () => `Player ${currentPlayer}'s turn`;

// displayText.textContent = switchTurn();

// function cellClicked(event){ //handle cell click
//     const cellInput = event.target;
//     const cellIndex = parseInt(cellInput.getAttribute("data-cell-index"));
//     inputArray.push(cellIndex);
// };


// function switchPlayer(){ // handle player change
//     if(inputArray.length % 2 === 1){
//         currentPlayer = "X";
//         displayText.textContent = switchTurn();
//     }else if(inputArray.length % 2 === 0){
//         currentPlayer = "O";
//         displayText.textContent = switchTurn();
//     };
// };

// function checkWinner(){ //handle result validation

// };

// function gameReset(){// handle restart game

// };

// function upadateCell(){ //handle cell played

// };

// gridCells.forEach(cell => {
//     cell.addEventListener("click", cellClicked);
// })

// resetButton.addEventListener("click", gameReset);

/*
- coordinates visual:

[0] [1] [2]
[3] [4] [5]
[6] [7] [8]

*/

//[[0],[3],[6]]

// let vertical = [
//     [
//         gridCells[0],
//         gridCells[3],
//         gridCells[6]
//     ],
//     [
//         gridCells[1],
//         gridCells[4],
//         gridCells[7]
//     ],
//     [
//         gridCells[2],
//         gridCells[5],
//         gridCells[8]
//     ]
// ];

// let horizontal = [
//     [
//         gridCells[0],
//         gridCells[1],
//         gridCells[2]
//     ],
//     [
//         gridCells[3],
//         gridCells[4],
//         gridCells[5]
//     ],
//     [
//         gridCells[6],
//         gridCells[7],
//         gridCells[8]
//     ],
// ];

// let diagonal = [
//     [
//         gridCells[0],
//         gridCells[4],
//         gridCells[8]
//     ],
//     [
//         gridCells[6],
//         gridCells[4],
//         gridCells[2]
//     ],
// ];

// for(let i = 0; i < 9; i++){
//     let verticalIndex = vertical[i];
//     console.log(typeof verticalIndex)
// };

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



// function checkWinner(){ 
//     let winner = false;
//     if(arrayX.length === 3 || arrayO.length === 3){
//         for(let i = 0; i < winningCombo.length; i++){
//             let winningIndex = winningCombo[i];
//             let winningInner = winningIndex[i];
            
            
//         };
//     };
// };
