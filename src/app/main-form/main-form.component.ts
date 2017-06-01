import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pts-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  onClick(value) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
