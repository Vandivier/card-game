import {Injectable} from 'angular2/core';

@Injectable()
export class DrawCardService {
  DeckConfig = {
      Suit: ["Clubs", "Diamonds", "Hearts", "Spades"],
      Rank: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
  };
  array = [];
  
  draw() {
    return Promise.resolve(this.shuffle[0]);
  }
  
  unpack() {
    this.DeckConfig.Suit.forEach(function (suit) {
      this.DeckConfig.Rank.forEach(function (rank) {
        this.array.push({
            Suit: this.suit,
            Rank: this.rank
        });
      });
    });
    return this.array;
  }
  
  shuffle(input) {
    array = (!input) ? this.unpack() : input,
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
  
  test() {
    return 'DrawCardService test passed.';
  }
}