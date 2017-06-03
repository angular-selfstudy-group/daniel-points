import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pts-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.scss']
})
export class PointsListComponent implements OnInit {

  @Input() todos;
  @Output() removeTodo = new EventEmitter();
  @Output() toggleTodoComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
