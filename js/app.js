/* Minimum Requirements
-Display an empty tic-tac-toe board when the page is initially displayed.
-A player can click on the nine cells to make a move.
-Every click will alternate between marking an X and O.
-Display whose turn it is (X or O).
-The cell cannot be played again once occupied with an X or O.
-Provide win logic and display a winning message.
-Provide logic for a cat’s game (tie), also displaying a message.
-Provide a Reset Game button that will clear the contents of the board.*/

// PSEUDOCODE
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
console.log(messageEl)
const winningCombos = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]   
    ]


const squareIndex = [0,1,2,3,4,5,6,7,8]
/*---------------------------- Variables (state) ----------------------------*/
let board = ["","","","","","","","",""]
let turn = "X"
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/

squareEls.forEach((square,id)=>{
    square.addEventListener("click", (e)=>handleClick(e,id))
})

/*-------------------------------- Functions --------------------------------*/

function init () {
    console.log(" game start")
} 
init()
render()
function render(){
    updateBoard();
    updateMessage();
}
const placePiece = (index) => {
board[index] = turn
} 
function handleClick (event,id){
    console.log(event.target)
    console.log(id)
    if(board[id].length === 0 && winner === false){
        placePiece(id)
        updateBoard()
        checkForWinner()
        checkForTie()
        switchPlayerTurn()
        console.log(board)
        render()
    }
}


function updateBoard(){
    board.forEach((boardIdx, idx) => {
        console.log(boardIdx)
        if (boardIdx === "X"){
            console.log(boardIdx)
            squareEls[idx].innerText = "X"
        } else if (boardIdx === "O"){
            squareEls[idx].innerText = "O";
        } else {
            squareEls[idx].innerText = ""
        } 
    })
}

function updateMessage (){
    if (winner === false && tie === false){
    console.log("The next player is " + turn)
    } else if ( winner === false && tie === true){
        console.log("You tied try again")
    } else {
        console.log("You win!")
    }
}
render()

const checkForWinner = () => {
const xIds = []
const oIds = []
board.forEach((a,id) => {
    if (a === "X"){
        xIds.push(id)
    } else if (a === "O"){
        oIds.push(id)
    }
})
winningCombos.forEach((banana)=>{
    if (xIds.includes(banana[0]) && xIds.includes(banana[1]) &&  xIds.includes(banana[2])){
    console.log("X wins")
    }
    else if (oIds.includes(banana[0]) && oIds.includes(banana[1]) &&  oIds.includes(banana[2])){
    console.log("O wins")
    } //create tie logic
})
}
const checkForTie = () => {
    board.find((boardIdx) => {
    if( boardIdx === ""){
    return tie = false
    } return tie = true
    
    })
}

switchPlayerTurn = () => {
    if (winner === false){
        console.log(turn)
        if (turn === "X"){
        turn = "O"
        }else if (turn === "O"){
            turn = "X"
    } 
}}

/*----------------------------- Event Listeners -----------------------------*/



