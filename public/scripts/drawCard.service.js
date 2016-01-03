System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DrawCardService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DrawCardService = (function () {
                function DrawCardService() {
                }
                DrawCardService.prototype.draw = function () {
                    return Promise.resolve(this.shuffle()[0]);
                };
                DrawCardService.prototype.roll = function () {
                    var stdDie;
                    stdDie = [1, 2, 3, 4, 5, 6];
                    return Promise.resolve(this.shuffle(stdDie)[0]);
                };
                DrawCardService.prototype.standardDeck = function () {
                    var deckConfig, array;
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
                };
                DrawCardService.prototype.shuffle = function (arrayToShuffle) {
                    //I feel like I shouldn't have to do this...
                    var temporaryValue, randomIndex, array, currentIndex;
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
                };
                DrawCardService.prototype.customDeck = function () {
                    //get customDeck.json if it exists, otherwise return false/null/undefined
                    return 'undefined';
                };
                DrawCardService.prototype.chat = function (chatTxt) {
                    console.log('I need to emit and listen...' + chatTxt);
                };
                DrawCardService.prototype.test = function () {
                    return 'DrawCardService test passed.';
                };
                DrawCardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DrawCardService);
                return DrawCardService;
            })();
            exports_1("DrawCardService", DrawCardService);
        }
    }
});
//# sourceMappingURL=drawCard.service.js.map