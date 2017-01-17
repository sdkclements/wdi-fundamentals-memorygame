// This seperate JS file is intended only to take my array of cards and "shuffle" them.

// var deckArray = ["queen", "queen", "king", "king"];

// Since suits dont matter the new array I will be creating will iterate through deckArray 4 times
// Start with one iteration first.
// function shuffleDeck(deck, count){
// 	var shufldArray = []; // this is temporary

// }
// console.log(deckArray);

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var choiceOne = cardTwo;
var choiceTwo = cardOne;

//var allCards = document.getElementById('allCards')



var checkForMatch = function(choiceOne, choiceTwo) {
	if (choiceOne !== choiceTwo) {
		//alert("sorry try again");
		changeTurn();
	}else if (choiceOne === choiceTwo) {
		match = true;
		alert("its a match");

	}
}
checkForMatch();
