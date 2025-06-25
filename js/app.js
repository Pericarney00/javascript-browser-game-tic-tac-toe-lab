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

/*---------------------------- Variables (state) ----------------------------*/
 let board = ["","","","","","","","",""]
 let turn = "X"
 let winner = false
 let tie = false


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function render(){
    updateBoard();
    updateMessage();
}
function init () {
    console.log(" game start")
} render()
function handleClick (){}
function updateBoard(){
    board.forEach((boardIdx, idx) => {
        if (boardIdx === "X"){
            squareEls[idx].innerText = "X"
        } else if (boardIdx === "O"){
            squareEls[idx].innerText = "O";
        } else {
            squareEls[idx].innerText = ""
        } 
 console.log(squareEls[idx])
    })
}

function updateMessage (){
    if (winner === false && tie === false){
       console.log("The next player is " + turn)
    } else if ( winner === false & tie === true){
        console.log("You tied try again")
    } else {
        console.log("You win!")
    }
}
render()
/*----------------------------- Event Listeners -----------------------------*/



