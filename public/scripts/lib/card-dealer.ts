export class Cards {
  unpack() {
  DeckConfig = {
      Suit: ["Clubs", "Diamonds", "Hearts", "Spades"],
      Rank: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
  };
  array = [];
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
  
  shuffle() {
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
    return 'TEST-TEXT';
  }
  
  test = 'TEST-TEXT-2';
}