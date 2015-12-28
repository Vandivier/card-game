import {Hero} from './hero';
import {drawResponseData} from '../processes/draw-process';
import {Injectable} from 'angular2/core';

@Injectable()
export class DrawService {
  draw() {
    return Promise.resolve(drawResponseData);
  }
}
