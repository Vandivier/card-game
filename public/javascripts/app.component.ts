import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Component({
	selector: 'ng-main-game-component',
	template: `
  <br>
  <canvas id='game'></canvas>
  <br>
  <button id='draw' (click)='draw()'>Click to Draw a Card</button>
  <br>
  Console:
  <div id='console'>This is the console.</div>
  `
})

export class AppComponent {
  draw(event) {
    console.log('bro u clicked me');
    //todo: call service for a card and mention something on game console.
  }
  
  getRandomQuote() {
  this.http.get('http://localhost:3000/api/draw')
    .map(res => res.text())
    .subscribe(
      data => this.randomQuote = data,
      err => this.logError(err),
      () => console.log('Random Quote Complete')
    );
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
}
