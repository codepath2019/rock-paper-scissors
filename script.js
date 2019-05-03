// alert("Hellow World in new file");

var computerMove;

// computerMove = computerPlay();

// returns the moves the computer selects by random
    // 0 -> "rock"
    // 1 -> "paper"
    // 2 -> "scissors"
function computerPlay() {
    var upperLimitInt = 3;
    return mapNumToMove(randomIntFrom0ToN(upperLimitInt));
}

// return an integer between 0 and n inclusive
function randomIntFrom0ToN(upperLimit) {
    return Math.floor(Math.random() * upperLimit); 
}

// given an integer, return one of the following values: 'rock', 'paper', 'scissors'
function mapNumToMove(num) {
    // switch
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}




// Is value a reserved word




