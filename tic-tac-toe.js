//user will play tic tac toe with cpu
//print grid with X or O
//change grid based on user input
let grid = [
    [1, 2, 3]
    , [4, 5, 6]
    , [7, 8, 9]
]

function addMove(int) {
    const loc = (int % 3) == 0 ? 2 : (int % 3) - 1;
    let pos = [0, 0];
    //if it's 1, the matrix pos is 1,1 
    //if it's 2, the matrix pos is 1,2 
    //...
    //if it's 4, the matrix pos is 2,1
    if (int < 4 && int > 0) {
        pos = [0, loc]
    }
    if (int > 3 && int < 7) {
        pos = [1, loc]
    }
    if (int > 6 && int < 10) {
        pos = [2, loc]
    }
    if (int < 1 || int > 9) {
        throwErrorMessage();
    }
    return pos;
}
function returnNewMatrix(pos, currentGrid, player) {
    //will take in a matrix position
    //check if it is not already marked with X or O
    //return an updated grid with X or O
    let gridValue = currentGrid[pos[0], pos[1]];
    if (gridValue == "X" || gridValue == "O") {
        throwErrorMessage();
        return currentGrid;
    }
    else {
        currentGrid[pos[0], pos[1]] = player;
        return currentGrid;
    }
}
function nextMove(currentGrid){
    //this is the fancy function where we get the optimal next move.
}
function printGrid(newGrid){
    
}


const readline = require('readline')
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function ask(input) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(input, resolve);
    });
}


async function start() {

}

start()

