import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-bottom',
  templateUrl: './grid-bottom.component.html',
  styleUrls: ['./grid-bottom.component.css']
})
export class GridBottomComponent implements OnInit {

  @Input() currentDataLength: number;
  @Input() totalDataLength: number;
  @Input() pageSpecificData: any;

  constructor() { }

  ngOnInit() {
  }

}
