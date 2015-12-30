import {Injectable} from 'angular2/core';

@Injectable()
export class DrawCardService {
  debugger;
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
    this.array = (!arrayToShuffle) ? this.standardDeck() : arrayToShuffle,
      this.currentIndex = this.array.length,
      this.temporaryValue,
      this.randomIndex;
      
    while (0 !== this.currentIndex) {
      this.randomIndex = Math.floor(Math.random() * this.currentIndex);
      this.currentIndex -= 1;
      this.temporaryValue = this.array[this.currentIndex];
      this.array[this.currentIndex] = this.array[this.randomIndex];
      this.array[this.randomIndex] = this.temporaryValue;
    }
    return this.array;
  }
  
  test() {
    return 'DrawCardService test passed.';
  }
}