import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input('message') message: string = '';

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.notificationReceived.subscribe((error: any) => {
       this.message = error.message;
    });
  }
}
