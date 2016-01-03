/*
import {Injectable} from 'angular2/core';

@Injectable()
export class DrawCardService {
  draw() {
    return Promise.resolve(this.shuffle()[0]);
  }
  
  standardDeck() {
    DeckConfig = {
        Suit: ["Clubs", "Diamonds", "Hearts", "Spades"],
        Rank: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    };
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
  
  shuffle(arrayToShuffle) {
    array = (!arrayToShuffle) ? this.standardDeck() : arrayToShuffle,
      currentIndex = array.length,
      this.temporaryValue,
      this.randomIndex;
      
    while (0 !== currentIndex) {
      this.randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      this.temporaryValue = array[currentIndex];
      array[currentIndex] = array[this.randomIndex];
      array[this.randomIndex] = this.temporaryValue;
    }
    return array;
  }
  
  test() {
    return 'DrawCardService test passed.';
  }
  
  customDeck() {
    //get customDeck.json if it exists, otherwise return false/null/undefined
    return 'undefined';
  }
}
*/
//# sourceMappingURL=turnManager.component.js.map