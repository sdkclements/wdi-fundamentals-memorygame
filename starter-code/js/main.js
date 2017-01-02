// FIRST VAR TEST
// var cardOne = mainCardArray[0];
// var cardTwo = mainCardArray[1];
// var cardThree = mainCardArray[2];
// var cardFour = mainCardArray[3];

// var choiceOne = cardTwo;
// var choiceTwo = cardOne;

// var gameBoard = document.getElementById('game-board');
// var mainCardArray = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
// var mainCardArray = ['queen', 'queen', 'king', 'king'];
var cards = ['queen', 'queen', 'king', 'king'];


var checkForMatch = function(arr) {

    if (arr[0] !== arr[1]) {
        alert('Try again')
        
    }else if (arr[0] === arr[1]) {
        // match = true;
        alert("its a match");

    }
}


var gameBoard = document.getElementById('game-board');
function createBoard() {
    
    for (var i = 0; i < cards.length; i++) {
       var cardL = document.createElement('div');
       cardL.className = 'card';

       cardL.setAttribute('data-card', cards[i]);
       cardL.addEventListener('click', twoInPlayCheck);
       
       gameBoard.appendChild(cardL);
       gameBoard.appendChild(cardL);

    }
};

function twoInPlayCheck() {
    cardsInPlay.push(this.getAttribute('data-card'));
console.log(this.getAttribute('data-card'));

if (this.getAttribute('data-card') === 'king'){
    this.innerHTML = "<div id='kingCard'>";
}else{
    this.innerHTML = "<div id='queenCard'>";
}
    if (cardsInPlay.length === 2) {
        
        checkForMatch(cardsInPlay);

        cardsInPlay = [];
    }
}

$(document).ready(function(){
    $('.reset').click(function() {
        $('.card').remove();
        createBoard();
    });
});





// var resetButton = document.getElementById('reset');
// resetButton.addEventListener('click', resetGameBoard);

createBoard();






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




