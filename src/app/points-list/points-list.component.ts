import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pts-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.scss']
})
export class PointsListComponent implements OnInit {

  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
