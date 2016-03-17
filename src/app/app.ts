import {Component} from 'angular2/core';
import UpManager from './up-manager.component';

@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [UpManager],
  styles: [require('./app.styl')],
  template: require('./app.jade'),
})
export class App {}
