import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-grid-top',
  templateUrl: './grid-top.component.html',
  styleUrls: ['./grid-top.component.css']
})
export class GridTopComponent implements OnInit {

  @Output() pageSizeChanged = new EventEmitter<number>();
  searchText: string = '';
  pageSizes: number[];
  selectedPageSize: number;

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.pageSizes = this.paginationService.getPageSizes();
    this.selectedPageSize = this.pageSizes[0];
  }

  changePageSize() {
    this.pageSizeChanged.emit(this.selectedPageSize);
    this.paginationService.pageChanged.next(0);
  }

}
