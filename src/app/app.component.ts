import { Component, Inject } from '@angular/core';
import { Todo } from "app/todo";

@Component({
  selector: 'pts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  newTodo: Todo = new Todo();
  constructor(@Inject("list") private list){}

  addTodo() {
    this.list.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.list.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.list.deleteTodoById(todo.id);
  }

  get todos() {
    return this.list.getAllTodos();
  }
}
