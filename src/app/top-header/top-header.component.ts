import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MdTextareaAutosize} from '@angular/material';

@Component({
  selector: 'pts-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  @Input() newTodo;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
