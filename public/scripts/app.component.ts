import {Component, OnInit} from 'angular2/core';
import {DrawCardService} from './drawCard.service';
import {AppLogic} from './appLogic.service';

@Component({
	selector: 'ng-main-game-component',
	template: `
  <br>
  <canvas id='game'></canvas>
  <br>I have entered the room as {{localUser.name}}
  <br>My Public Username: <input id="localUsername" [(ngModel)]="localUser.name">
  <!--<br>My Public Username: <input id="localUsername"><button (click)="changeLocalUserName()">Change Username</button>-->
  <br>
  <button id='draw' (click)='draw()'>Click to Draw a Card</button>
  <br>
  <button id='roll' (click)='roll()'>Click to Roll a Die</button>
  <br>
  <form id="chat-form">
    <input id='chat-text' placeholder="Enter Your Chat Message">
  </form>
  <br>
  <div *ngFor="#user of users; #i = index">
    <br>Player {{i}} - {{user.name}}
    <br>
    <div id='card'>Last Card Played: {{user.cardPlayed}}</div>
    <div id='die'>Last Die Rolled: {{user.dieRolled}}</div>
    <br>
  </div>
  <br>
  Console:
  <div id='console'>{{gameConsoleText}}</div>
  `,
  styles: [],
  directives: [],
  providers: [DrawCardService, AppLogic]
})

export class AppComponent implements OnInit {
  //public socket: any;
  gameConsoleText: string = 'This is the game console.';
  clickCount: number = 0;
  cardPlayed: string = 'default.card';
  fakeTestServerDudes: User[] = [{
    name: 'OtherFakePlayer',
    cardPlayed: 'blahblahblah',
    dieRolled: 1
  }];
  public localUser: User = {
    name: 'New User',
    cardPlayed: 'Default Card',
    dieRolled: 1
  };
  users: User[];
  
  constructor(private _drawCardService: DrawCardService, private _appLogicService: AppLogic) {}

  ngOnInit() {
    //console.log('AppComponent implements OnInit means the component will fire my parent function when loaded!');
    this.setSockets();
    this.getUserList();
    this._appLogicService.init();
    //socket.emit('test', {});
  }
  setSockets() {
    var socket = io(); //=io.connect('http://localhost');
    socket.emit('test', {});
    socket.on('error', function (reason){
        console.error('Unable to connect Socket.IO', reason);
    });
    socket.on('connect', function (){
        console.info('Connected');
        socket.emit('test', {});
    });
    socket.on('defaultUsername', function (data){
        console.log(data.username);
        $('#localUsername').val(data.username);
        //TODO why the below doesn't work
        //localUser.name = data.username;
    });
    socket.on('chat', function(msg){
      //console.log('message: ' + msg);
      $('#console').append('<br>' + msg);
    });
  }
  getUserList() {
    let arr: User[] = this.fakeTestServerDudes;
    arr.push(this.localUser);
    this.users = arr;
  }
  changeLocalUserName() {
    this.localUser.name = $('#localUsername').val();
    //socket.emit('test', {});
  }
  draw() {
    this._drawCardService.draw().then(respTxt => {
      this.gameConsoleText = JSON.stringify(respTxt);
      this.cardPlayed = JSON.stringify(respTxt);
    });
  }
  roll() {
    /*how do i add a line break...?
    this._drawCardService.roll().then(respTxt => this.gameConsoleText += '\n\r\<br>'
    + respTxt);
    */
    //todo: take number of dice and sides per die as parameters....maybe roll die array [6,7,8] means 3 die with 6, 7, and 8 sides respectively.
    //we can even roll a 3 sided die lol...rock papers scissors? or flip a coin.
    this._drawCardService.roll().then(respTxt => {
      this.gameConsoleText = respTxt;
      this.dieRolled = respTxt;
    });
  }
}

export interface User {
    name: string;
    cardPlayed: string;
    dieRolled: number;
    turnOrder: number;
    score: number;
}

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


