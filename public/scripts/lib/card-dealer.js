System.register([], function(exports_1) {
    var Cards;
    return {
        setters:[],
        execute: function() {
            Cards = (function () {
                function Cards() {
                    this.test = 'TEST-TEXT-2';
                }
                Cards.prototype.unpack = function () {
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
                };
                Cards.prototype.shuffle = function () {
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
                };
                Cards.prototype.test = function () {
                    return 'TEST-TEXT';
                };
                return Cards;
            })();
            exports_1("Cards", Cards);
        }
    }
});
//# sourceMappingURL=card-dealer.js.map