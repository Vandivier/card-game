import {Component} from 'angular2/core';
import {DrawCardService} from './drawCard.service';

@Component({
	selector: 'ng-main-game-component',
	template: `
  <br>
  <canvas id='game'></canvas>
  <br>
  <button id='draw' (click)='draw()'>Click to Draw a Card</button>
  <br>
  <button id='roll' (click)='roll()'>Click to Roll a Die</button>
  <br>
  <input id='chat-text'><button id='chat-button'>Click to submit chat text.</button>
  <br>
  <div id='card'>Last Card Played: {{cardPlayed}}</div>
  <div id='die'>Last Die Rolled: {{dieRolled}}</div>
  <br>
  Console:
  <div id='console'>{{gameConsoleText}}</div>
  `,
  styles: [],
  directives: [],
  providers: [DrawCardService]
})

export class AppComponent {
  gameConsoleText: any = 'This is the game console.';
  clickCount: number = 0;
  
  constructor(private _drawCardService: DrawCardService) {}
  
  /* todo...right now this is untyped and oddly integrated via appLogic.js
  chat() {
    
  }
  */
  draw() {
    this._drawCardService.draw().then(respTxt => {
        this.gameConsoleText = JSON.stringify(respTxt);
        this.cardPlayed = JSON.stringify(respTxt);
      }
    );
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
      }
    );
  }
}
