import {Component} from 'angular2/core';

@Component({
  selector: 'directory',
  styles: [require('./directory.component.styl')],
  template: require('./directory.component.jade'),
})
class Directory {
  value: string = '.'
}

export default Directory;
