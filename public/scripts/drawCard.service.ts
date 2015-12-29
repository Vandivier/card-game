import {Injectable} from 'angular2/core';
import {Cards} from './lib/card-dealer';

@Injectable()
export class DrawCardService {
  draw() {
    return Promise.resolve('You drew the following card: ' + Cards.unpack());
  }
}
