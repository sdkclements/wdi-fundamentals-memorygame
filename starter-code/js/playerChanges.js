var cards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'queen', 'queen', 'queen', 'king', 'king', 'king', 'king'];

// sudo Shuffle main array
var resetBoard = function() {


    function shuffle(a) {
        var tempArray = [];
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }

        var tempArray = a.toString();
        console.log(tempArray);
    }

    shuffle(cards);
}

newBoard = resetBoard();