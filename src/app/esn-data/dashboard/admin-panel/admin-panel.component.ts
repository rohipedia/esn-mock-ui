import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CoreService } from '../../../core/core.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  @Input('data') data;

  constructor(private http: Http, 
              private router: Router,
              private coreService: CoreService) { }

  ngOnInit() {
  }

  manageUsers() {
    this.router.navigate(['users']);
  }
  
  validateEsns() {
    this.router.navigate(['validate']);
  }

  import() {
    this.http.get('http://localhost:8080/api/importExcel')
      .subscribe((response: Response) => {
        console.log(response.json());
      }, (error: any) => {
        this.coreService.notificationReceived.next(error.json().message);
      });
  }

}