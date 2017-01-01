// Management of players turns

// Manage Player Points


// odd value for turn is player1s turn even is player 2

var mainCardArray = ['queen', 'queen', 'king', 'king'];


var cardOne = mainCardArray[0];
var cardTwo = mainCardArray[1];
var cardThree = mainCardArray[2];
var cardFour = mainCardArray[3];

var checkForMatch = function(choiceOne, choiceTwo) {
	if (choiceOne !== choiceTwo) {
		console.log("wrong try again");
		
	}else if (choiceOne === choiceTwo) {
		match = true;
		console.log("its a match");

	}
}

//checkForMatch(cardOne, cardTwo);

// Shuffle main array
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    console.log(a)
}

shuffle(mainCardArray);