import {Component} from 'angular2/core';
import { Files, File } from './files.service';
import Directory from './directory.component';

@Component({
  selector: 'up-manager',
  providers: [Files],
  directives: [Directory],
  styles: [require('./up-manager.component.styl')],
  template: require('./up-manager.component.jade'),
})
class UpManager {
  directories: [any] = ['siema']

  constructor(public files: Files) {}

  ngOnInit() {
    console.log(this.files.getFolder());
  }
}

export default UpManager;
