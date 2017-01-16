var cardsInPlay = [];
// var mainCardArray = ['queen', 'queen', 'king', 'king'];
var cards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'queen', 'queen', 'queen', 'king', 'king', 'king', 'king'];

// check if the cards in 'cardsInPlay' are matches

var checkForMatch = function(arr) {

    if (arr[0] !== arr[1]) {


    } else if (arr[0] === arr[1]) {
        // match = true;
        alert("its a match");

    }
}

// function showplayerScore(arr){

// }


var gameBoard = document.getElementById('game-board');

function createBoard() {

    for (var i = 0; i < cards.length; i++) {
        var cardL = document.createElement('div');
        cardL.className = 'card';


        cardL.setAttribute('data-card', cards[i]);
        cardL.addEventListener('click', twoInPlayCheck);

        gameBoard.appendChild(cardL);
        //gameBoard.appendChild(cardL);

    }
};

function twoInPlayCheck() {
    cardsInPlay.push(this.getAttribute('data-card'));
    console.log(this.getAttribute('data-card'));

    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<div id='kingCard'>";
    }
    if (this.getAttribute('data-card') === 'ace') {
        this.innerHTML = "<div id='aceCard'>";
    }
    if (this.getAttribute('data-card') === 'two') {
        this.innerHTML = "<div id='twoCard'>";
    }
    if (this.getAttribute('data-card') === 'three') {
        this.innerHTML = "<div id='threeCard'>";
    }
    if (this.getAttribute('data-card') === 'four') {
        this.innerHTML = "<div id='fourCard'>";
    }
    if (this.getAttribute('data-card') === 'five') {
        this.innerHTML = "<div id='fiveCard'>";
    }
    if (this.getAttribute('data-card') === 'six') {
        this.innerHTML = "<div id='sixCard'>";
    }
    if (this.getAttribute('data-card') === 'seven') {
        this.innerHTML = "<div id='sevenCard'>";
    }
    if (this.getAttribute('data-card') === 'eight') {
        this.innerHTML = "<div id='eightCard'>";
    }
    if (this.getAttribute('data-card') === 'nine') {
        this.innerHTML = "<div id='nineCard'>";
    }
    if (this.getAttribute('data-card') === 'ten') {
        this.innerHTML = "<div id='tenCard'>";
    }
    if (this.getAttribute('data-card') === 'jack') {
        this.innerHTML = "<div id='jackCard'>";
    }
    if (this.getAttribute('data-card') === 'queen') {
        this.innerHTML = "<div id='queenCard'>";
    }
    if (cardsInPlay.length === 2) {

        checkForMatch(cardsInPlay);
        // update player score
        // update turn - if correct go again, else next turn

        cardsInPlay = [];
    }
}
createBoard();