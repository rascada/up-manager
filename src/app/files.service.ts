import { Injectable } from 'angular2/core';

export interface File {
  name: string
  path: string
}

@Injectable()
export class Files {
  _files: [File]

  getFolder(path) {
    return console.log(this._files);
  }
}
