import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  list: any[];

  add(length, event) {
    this.list.push({id: 1,text: event.text});
    console.log(this.list);
  }

  constructor() {
    this.list = [];
  }

}
