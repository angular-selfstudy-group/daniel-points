import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pts-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class Footer implements OnInit {

  @Input() todos;

  constructor() { }

  ngOnInit() {
  }

}
