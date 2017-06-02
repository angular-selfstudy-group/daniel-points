import { Component, Inject } from '@angular/core';

@Component({
  selector: 'pts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onAdd(length, event) {
    if (!event.text) return;
    this.todo.add(length, event);
  }

  constructor(@Inject('todo') private todo){}
}
