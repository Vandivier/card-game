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
                    this.consoleText = 'This is the console.';
                    this.clickCount = 0;
                }
                AppComponent.prototype.draw = function () {
                    var _this = this;
                    this._drawCardService.draw().then(function (respTxt) { return _this.consoleText = respTxt; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-main-game-component',
                        template: "\n  <br>\n  <canvas id='game'></canvas>\n  <br>\n  <button id='draw' (click)='draw()'>Click to Draw a Card</button>\n  <br>\n  Console:\n  <div id='console'>{{consoleText}}</div>\n  ",
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