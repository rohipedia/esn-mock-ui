import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { PaginationService } from '../../../grid-features/pagination.service';


@Component({
  selector: 'app-esn-grid',
  templateUrl: './esn-grid.component.html',
  styleUrls: ['./esn-grid.component.css']
})
export class EsnGridComponent implements OnInit {

  @Input('data') esnData: any;
  isAdmin: boolean = false;
  pageSpecificEsns: any[] = [];
  currentPageEsns: any[] = [];

  constructor(private authService: AuthService, 
              private paginationService: PaginationService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin;
    this.getEsnData(this.esnData);
    
    this.paginationService.pageChanged.subscribe((number: number) => {
      this.currentPageEsns = this.pageSpecificEsns[number].pageData;
    });
  }

  getEsnData(esns) {
    const data = this.paginationService.loadData(esns, false);
    if (esns.length === 0 || data === undefined) {
      this.pageSpecificEsns = [];
      return;
    }
    this.esnData = (data.rawData !== null) ? data.rawData : esns;
    this.pageSpecificEsns = data.allPagesSpecificData;
    this.currentPageEsns = data.pageData;
  }

  onChangePageSize(pageSize){
    this.pageSpecificEsns = this.paginationService.changePageSize(this.esnData, pageSize);
    this.currentPageEsns = this.pageSpecificEsns[0].pageData;
  }

}
