import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  @Input() pageSpecificData: any;
  currentPageNumber: number = 0;
  pageChanged = new Subject();
  pageChangeSubscription: Subscription;

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.pageChangeSubscription = this.paginationService.pageChanged.subscribe(
      (number: number) => {
        this.currentPageNumber = number;
      }
    )
  }

  ngOnDestroy() {
    this.pageChangeSubscription.unsubscribe();
  }

  changePage(number: number) {
    this.currentPageNumber = number;
    this.paginationService.pageChanged.next(number);
  }

}
