import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showLeftMenu: boolean = false;
  currentUrl: string = '/';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.showLeftMenu = (event.url !== '/');
        this.currentUrl = event.url;
      }
    });
  }

  navigateBack() {
    let previousUrl = '/';
    switch (this.currentUrl) {
      case '/':
      case '/dashboard':
        previousUrl = '/';
        break;
      case '/users':
      case '/validate':
        previousUrl = '/dashboard';
        break;
      case '/addUser':
        previousUrl = '/users';
        break;
      default:
        previousUrl = '/';
        break;
    }
    this.router.navigate([previousUrl]);
  }
}
