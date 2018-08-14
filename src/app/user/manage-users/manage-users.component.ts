import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PaginationService } from '../../grid-features/pagination.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users: any[];
  pageSpecificUsers: any[];
  currentPageUsers: any[];

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private paginationService: PaginationService) { }

  ngOnInit() {
    this.route.data.subscribe((users: any) => {
      this.users = users.data;
      this.getUsersData(this.users);
    });
  }

  getUsersData(users) {
    const data = this.paginationService.loadData(users, false);
    if (users.length === 0 || data === undefined) {
      this.pageSpecificUsers = [];
      return;
    }
    this.users = (data.rawData !== null) ? data.rawData : users;
    this.pageSpecificUsers = data.allPagesSpecificData;
    this.currentPageUsers = data.pageData;
  }

  onChangePageSize(pageSize: number) {
    this.pageSpecificUsers = this.paginationService.changePageSize(this.users, pageSize);
    this.currentPageUsers = this.pageSpecificUsers[0].pageData;
  }

  addUser() {
    this.router.navigate(['/addUser']); 
  }
}
