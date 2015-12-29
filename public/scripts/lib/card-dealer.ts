//import {Component} from 'angular2/core';

export class AppComponent {
  unpack() {
    var DeckConfig = {
        Suit: ["Clubs", "Diamonds", "Hearts", "Spades"],
        Rank: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    },
    array = [];
    
    DeckConfig.Suit.forEach(function (suit) {
      DeckConfig.Rank.forEach(function (rank) {
        array.push({
            Suit: suit,
            Rank: rank
        });
      });
    });
    return array;
  }
  shuffle() {
    var array = (!input) ? this.unpack() : input,
      currentIndex = array.length,
      temporaryValue,
      randomIndex;
      
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
