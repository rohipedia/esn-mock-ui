import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from '../../../grid-features/pagination.service';

@Component({
  selector: 'app-validate-grid',
  templateUrl: './validate-grid.component.html',
  styleUrls: ['./validate-grid.component.css']
})
export class ValidateGridComponent implements OnInit {

  @Input('esn') esns;
  pageSpecificEsns: any[];
  currentPageEsns: any[];

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.getEsnData(this.esns);
  }

  getEsnData(esns) {
    const data = this.paginationService.loadData(esns, false);
    if (esns.length === 0 || data === undefined) {
      this.pageSpecificEsns = [];
      return;
    }
    this.esns = (data.rawData !== null) ? data.rawData : esns;
    this.pageSpecificEsns = data.allPagesSpecificData;
    this.currentPageEsns = data.pageData;
  }

}
