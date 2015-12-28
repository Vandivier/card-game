import {Injectable} from 'angular2/core';

@Injectable()
export class DrawCardService {
  draw() {
    return Promise.resolve('drawCard.service.ts response succesful.');
  }
}
