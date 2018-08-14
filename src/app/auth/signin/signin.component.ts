import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('mylogin') mylogin: NgForm;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.signoutUser();
  }

  login(username, password) {
    const user = {
      'username': username,
      'password': password
    }
    this.authService.signinUser(user);
  }

}
