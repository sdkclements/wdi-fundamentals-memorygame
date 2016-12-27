console.log("JS file is connected to HTML! Woo!");

// FIRST VAR TEST
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var choiceOne = cardTwo;
var choiceTwo = cardOne;


// odd value for turn is player1s turn even is player 2
var turn = 1

var changeTurn = function(){
	turn += 1;
}
// Decide whether to remove cards from table.

var match = false;
var removeMatches = function() {
	// find cards that were matched and remove them from current game array
}
var checkForMatch = function(choiceOne, choiceTwo) {
	if (choiceOne !== choiceTwo) {
		alert("sorry try again");
		changeTurn();
	}else if (choiceOne === choiceTwo) {
		match = true;
		alert("its a match");

	}
}
// Management of players turns

// Manage Player Points
var playerOneScore = 0;
var playerTwoScore = 0;

var addPlayerScore = function(playerOneScore, playerTwoScore){

}
//Using Switch instead of if /else -- try this first 
// var cardValue = 1;

// switch (cardValue) {
// 	case 0:
// 		card = 'queen';
// 		break;
// 	case 1:
// 		card = 'king';
// 		break;
	// case 2:
	// 	card = 'three';
	// 	break;
	// case 3:
	// 	card = 'four';
	// 	break;
	// case 4:
	// 	card = 'five';
	// 	break;
	// case 5:
	// 	card = 'six';
	// 	break;
	// case 6:
	// 	card = 'seven';
	// 	break;
	// case 7:
	// 	card = 'eight';
	// 	break;						
	// case 8:
	// 	card = 'nine';
	// 	break;
	// case 9:
	// 	card = 'ten';
	// 	break;
	// case 10:
	// 	card = 'jack';
	// 	break;
	// case 11:
	// 	card = 'ace';
	// 	break;
	// case 12:
	// 	card = 'two';
	// 	break;
	// default:
	// 	card = null;
	// 	alert('Wrong value for a card');
	// }