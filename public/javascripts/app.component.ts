import {Component} from 'angular2/core';

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
  providers: []
})

export class AppComponent implements OnInit {
  consoleText: string = 'This is the console.';
  clickCount: number = 1;

  draw() {
    if (this.clickCount = 1) {
      this.consoleText = 'bro u clicked me.';
    } else if (this.clickCount < 4) {
      this.consoleText = 'so u clicked me again...but y?';
    } else {
      this.consoleText = 'yo u clicked me again. This is like the ' + this.clickCount + 'th time already, what gives? I don\'t have any services yet ICYMI';
    }
    this.clickCount++;
  }
}
