//user will play tic tac toe with cpu
//print grid with X or O
//change grid based on user input
let playGrid = [
    [null, null, null]
    , [null, null, null]
    , [null, null, null]
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
    let gridValue = currentGrid[pos[0]][pos[1]];
    //console.log(gridValue);
    if (gridValue == "X" || gridValue == "O") {
        throwErrorMessage();
        return currentGrid;
    }
    else {
        currentGrid[pos[0]][pos[1]] = player;
        return currentGrid;
    }
}
function nextMove(currentGrid) {
    //this is the fancy function where we get the optimal next move.
    //say this is your grid
    /*
      null | null | null
      null |  X   | null
      null | null | null
    
    ^^ your next move is the corner...
    check the sums..   
    check the corners.. 0,0 - 0,2 - 2,0 - 2,2
    */
    //these are all the sums - wow, such hard code 
    let thisNextGrid = currentGrid;
    thisNextGrid.forEach((element, index) => {
        let sum = 0;
        element.map((subElem, i) => {
            subElem = subElem === 0 ? 1 : 0;
            element[i] = subElem;
        })
        console.log(element);

        sum = element[0] + element[1] + element[2];
        console.log("This row's sum: " + sum + "\n");

        //while (sum != 2) {

        // sum = currentGrid[0][0] + currentGrid[1][0] + currentGrid[2][0];
        // sum = currentGrid[0][1] + currentGrid[1][1] + currentGrid[2][1];
        // sum = currentGrid[0][2] + currentGrid[1][2] + currentGrid[2][2];
        // sum = currentGrid[0][0] + currentGrid[0][1] + currentGrid[0][2];
        // sum = currentGrid[1][0] + currentGrid[1][1] + currentGrid[1][2];
        // sum = currentGrid[2][0] + currentGrid[2][1] + currentGrid[2][2];
        // sum = currentGrid[0][0] + currentGrid[1][1] + currentGrid[2][2];

    });

}
function printGrid(newGrid) {
    //for 
    /*
    1 | 2 | 3
    4 | 5 | 6
    7 | 8 | 9
    */
    newGrid.forEach((element, index) => {//ok, this will print your grid.. but you probably want to map the bits and nulls to the indexes or the 
        console.log(
            element.map((subelement, i) => {
                if (subelement == 1) { subelement = "X"; }
                if (subelement == 0) { subelement = "O"; }
                if (subelement == null) { subelement = (i + 1) + (3 * index); }
                return subelement;
            }).join(' | ') + '\n'
        );
    });
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

// printGrid(playGrid);
// let thisMove = addMove(1);
// console.log("thisMove: " + thisMove);
// playGrid = returnNewMatrix(thisMove, playGrid, 1);
// // printGrid(playGrid);
// console.log(playGrid);
start()


async function start() {

    let thisPlayer = 1;
    let thisNum = -1;
    let done = 0
    while (!done) {
        printGrid(playGrid)
        thisNum = await ask("this is tic-tac-toe. pick a spot.\n");

        let thisMove = addMove(thisNum);

        playGrid = returnNewMatrix(thisMove, playGrid, thisPlayer);

        printGrid(playGrid);

        console.log("You chose " + thisNum + ". Above is the current grid. Now it's my turn.");
        console.log(playGrid);
        nextMove(playGrid);
        //switch turn
        thisPlayer = thisPlayer == 1 ? 0 : 1;
        // console.log("player: " + thisPlayer);

    }



}