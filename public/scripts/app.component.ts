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
  Console:
  <div id='console'>{{consoleText}}</div>
  `,
  styles: [],
  directives: [],
  providers: [DrawCardService]
})

export class AppComponent {
  consoleText: any = 'This is the console.';
  clickCount: number = 0;
  
  constructor(private _drawCardService: DrawCardService) {}

  draw() {
    this._drawCardService.draw().then(respTxt => this.consoleText = respTxt);
  }
}