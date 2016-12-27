console.log("JS file is connected to HTML! Woo!");

// FIRST VAR TEST
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var choiceOne = cardTwo;
var choiceTwo = cardOne;

if (choiceOne !== choiceTwo) {
	alert("sorry try again");
}else if (choiceOne === choiceTwo) {
	alert("its a match");
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