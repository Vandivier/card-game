System.register(['angular2/core', './drawCard.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drawCard_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drawCard_service_1_1) {
                drawCard_service_1 = drawCard_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_drawCardService) {
                    this._drawCardService = _drawCardService;
                    this.gameConsoleText = 'This is the game console.';
                    this.clickCount = 0;
                }
                /* todo...right now this is untyped and oddly integrated via appLogic.js
                chat() {
                  
                }
                */
                AppComponent.prototype.draw = function () {
                    var _this = this;
                    this._drawCardService.draw().then(function (respTxt) {
                        _this.gameConsoleText = JSON.stringify(respTxt);
                        _this.cardPlayed = JSON.stringify(respTxt);
                    });
                };
                AppComponent.prototype.roll = function () {
                    var _this = this;
                    /*how do i add a line break...?
                    this._drawCardService.roll().then(respTxt => this.gameConsoleText += '\n\r\<br>'
                    + respTxt);
                    */
                    //todo: take number of dice and sides per die as parameters....maybe roll die array [6,7,8] means 3 die with 6, 7, and 8 sides respectively.
                    //we can even roll a 3 sided die lol...rock papers scissors? or flip a coin.
                    this._drawCardService.roll().then(function (respTxt) {
                        _this.gameConsoleText = respTxt;
                        _this.dieRolled = respTxt;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-main-game-component',
                        template: "\n  <br>\n  <canvas id='game'></canvas>\n  <br>\n  <button id='draw' (click)='draw()'>Click to Draw a Card</button>\n  <br>\n  <button id='roll' (click)='roll()'>Click to Roll a Die</button>\n  <br>\n  <input id='chat-text'><button id='chat-button'>Click to submit chat text.</button>\n  <br>\n  <div id='card'>Last Card Played: {{cardPlayed}}</div>\n  <div id='die'>Last Die Rolled: {{dieRolled}}</div>\n  <br>\n  Console:\n  <div id='console'>{{gameConsoleText}}</div>\n  ",
                        styles: [],
                        directives: [],
                        providers: [drawCard_service_1.DrawCardService]
                    }), 
                    __metadata('design:paramtypes', [drawCard_service_1.DrawCardService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map