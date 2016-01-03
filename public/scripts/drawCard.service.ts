import {Injectable} from 'angular2/core';

@Injectable()
export class DrawCardService {
  draw() {
    return Promise.resolve(this.shuffle()[0]);
  }
  
  roll() {
    var stdDie: number[];
    stdDie = [1,2,3,4,5,6];
    return Promise.resolve(this.shuffle(stdDie)[0]);
  }
  
  standardDeck() {
    var deckConfig: {
        Suit: string[],
        Rank: string[]
    }, array: any[];
    
    deckConfig = {
        Suit: ["Clubs", "Diamonds", "Hearts", "Spades"],
        Rank: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    };
    array = [];
    
    deckConfig.Suit.forEach(function (suit) {
      deckConfig.Rank.forEach(function (rank) {
        array.push({
            Suit: suit,
            Rank: rank
        });
      });
    });
    return array;
  }
  
  shuffle(arrayToShuffle) {
    //I feel like I shouldn't have to do this...
    var temporaryValue: any, randomIndex: any, array: any[], currentIndex: number;
    
    array = (!arrayToShuffle) ? this.standardDeck() : arrayToShuffle,
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
  
  customDeck() {
    //get customDeck.json if it exists, otherwise return false/null/undefined
    return 'undefined';
  }
  
  chat(chatTxt) {
    console.log('I need to emit and listen...' + chatTxt);
  }
  
  test() {
    return 'DrawCardService test passed.';
  }
}
