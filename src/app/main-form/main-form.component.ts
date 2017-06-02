import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pts-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  inputText: string;
  @Input() list;
  @Output() add = new EventEmitter();

  clickHandler() {
    this.add.emit({ text: this.inputText });
    this.inputText = null;
  }

  constructor() {
    this.inputText = "";
  }

  ngOnInit() {
  }

}
