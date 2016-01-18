System.register(['angular2/core', './drawCard.service', './appLogic.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drawCard_service_1, appLogic_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drawCard_service_1_1) {
                drawCard_service_1 = drawCard_service_1_1;
            },
            function (appLogic_service_1_1) {
                appLogic_service_1 = appLogic_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_drawCardService, _appLogicService) {
                    this._drawCardService = _drawCardService;
                    this._appLogicService = _appLogicService;
                    //public socket: any;
                    this.gameConsoleText = 'This is the game console.';
                    this.clickCount = 0;
                    this.cardPlayed = 'default.card';
                    this.fakeTestServerDudes = [{
                            name: 'OtherFakePlayer',
                            cardPlayed: 'blahblahblah',
                            dieRolled: 1
                        }];
                    this.localUser = {
                        name: 'New User',
                        cardPlayed: 'Default Card',
                        dieRolled: 1
                    };
                }
                AppComponent.prototype.ngOnInit = function () {
                    //console.log('AppComponent implements OnInit means the component will fire my parent function when loaded!');
                    this.setSockets();
                    this.getUserList();
                    this._appLogicService.init();
                    //socket.emit('test', {});
                };
                AppComponent.prototype.setSockets = function () {
                    var socket = io(); //=io.connect('http://localhost');
                    socket.emit('test', {});
                    socket.on('error', function (reason) {
                        console.error('Unable to connect Socket.IO', reason);
                    });
                    socket.on('connect', function () {
                        console.info('Connected');
                        socket.emit('test', {});
                    });
                    socket.on('defaultUsername', function (data) {
                        console.log(data.username);
                        $('#localUsername').val(data.username);
                        //TODO why the below doesn't work
                        //localUser.name = data.username;
                    });
                    socket.on('chat', function (msg) {
                        //console.log('message: ' + msg);
                        $('#console').append('<br>' + msg);
                    });
                };
                AppComponent.prototype.getUserList = function () {
                    var arr = this.fakeTestServerDudes;
                    arr.push(this.localUser);
                    this.users = arr;
                };
                AppComponent.prototype.changeLocalUserName = function () {
                    this.localUser.name = $('#localUsername').val();
                    //socket.emit('test', {});
                };
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
                        template: "\n  <br>\n  <canvas id='game'></canvas>\n  <br>I have entered the room as {{localUser.name}}\n  <br>My Public Username: <input id=\"localUsername\" [(ngModel)]=\"localUser.name\">\n  <!--<br>My Public Username: <input id=\"localUsername\"><button (click)=\"changeLocalUserName()\">Change Username</button>-->\n  <br>\n  <button id='draw' (click)='draw()'>Click to Draw a Card</button>\n  <br>\n  <button id='roll' (click)='roll()'>Click to Roll a Die</button>\n  <br>\n  <form id=\"chat-form\">\n    <input id='chat-text' placeholder=\"Enter Your Chat Message\">\n  </form>\n  <br>\n  <div *ngFor=\"#user of users; #i = index\">\n    <br>Player {{i}} - {{user.name}}\n    <br>\n    <div id='card'>Last Card Played: {{user.cardPlayed}}</div>\n    <div id='die'>Last Die Rolled: {{user.dieRolled}}</div>\n    <br>\n  </div>\n  <br>\n  Console:\n  <div id='console'>{{gameConsoleText}}</div>\n  ",
                        styles: [],
                        directives: [],
                        providers: [drawCard_service_1.DrawCardService, appLogic_service_1.AppLogic]
                    }), 
                    __metadata('design:paramtypes', [drawCard_service_1.DrawCardService, appLogic_service_1.AppLogic])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*for reference as per a refactored https://angular.io/docs/ts/latest/tutorial/toh-pt4.html

import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
  private HEROES: Hero[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
  ];
  
  getHeroes() {
    return Promise.resolve(this.HEROES);
  }
}

export interface Hero {
  id: number;
  name: string;
}
*/
//# sourceMappingURL=app.component.js.map