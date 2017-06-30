import { observable } from 'mobx';
import PouchDB from 'pouchdb';
import {FacilitiesStore} from './FacilitiesStore'

var db = new PouchDB('kittens');
var store = new FacilitiesStore(db);

class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
    this.backend = store;
  }

  resetTimer() {
    this.timer = 0;
  }

  
}

export default AppState;
