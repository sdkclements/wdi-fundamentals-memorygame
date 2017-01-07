// FIRST VAR TEST
// var cardOne = mainCardArray[0];
// var cardTwo = mainCardArray[1];
// var cardThree = mainCardArray[2];
// var cardFour = mainCardArray[3];

// var choiceOne = cardTwo;
// var choiceTwo = cardOne;

// var gameBoard = document.getElementById('game-board');
// var mainCardArray = ['queen', 'queen', 'king', 'king'];



var mainCardArray = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function(){
for (var i = 0; i < mainCardArray.length; i++) {

}
}
//-----------------------------------
// RESET BUTTON


 var resetButton = document.getElementById('reset');
 var alertUser = function(){
	alert('button click works');
	resetButton.className = '.resetClick';
}



resetButton.addEventListener('click', alertUser);

//---------------------------------

//---------------------------------
// HIDE AND REPLACE CARD
// This replaces the cardOne howver the css styling is messed up as a result

var addKingCard = function(){
	cardToHide.parentNode.replaceChild(cardToAdd, cardToHide);

}

var cardToAdd = document.createElement("div");
cardToAdd.className = "card";
cardToAdd.id = "kingCard";
var cardToHide = document.getElementById('cardOne');





cardToHide.addEventListener('click', addKingCard);

// Try and change class based on a click for all cards

// $(document).ready(function(){
//     $('.reset').click(function() {
//         $('.card').remove();
//         createBoard();
//     });
// });





// var resetButton = document.getElementById('reset');
// resetButton.addEventListener('click', resetGameBoard);








// var createCards = function() {

//     var arrayLength = mainCardArray.length
//     var singleCardCreation = document.createElement('div');
//     var card = document.getElementsByClassName('.card');


//     for (var i = 0; i < arrayLength; i++) {

//         if (i === 0) { // create a div element for each card assign it a card class
//             var newCard1 = document.createElement('div');
//             newCard1.className = 'card';

//             gameBoard.appendChild(newCard1);
//         }
//         if (i === 1) { // create a div element for each card assign it a card class
//             var newCard2 = document.createElement('div');
//             newCard2.className = 'card';
//             gameBoard.appendChild(newCard2);
//         }
//         if (i === 2) { // create a div element for each card assign it a card class
//             var newCard3 = document.createElement('div');
//             newCard3.className = 'card';
//             gameBoard.appendChild(newCard3);
//         }
//         if (i === 3) { // create a div element for each card assign it a card class
//             var newCard4 = document.createElement('div');
//             newCard4.className = 'card';
//             gameBoard.appendChild(newCard4);
//         }



//     }


// };
// createCards();

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