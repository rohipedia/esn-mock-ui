import { Component, OnInit, OnDestroy } from '@angular/core';
import { EsnDataService } from '../../esn-data.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-progress-map',
  templateUrl: './progress-map.component.html',
  styleUrls: ['./progress-map.component.css']
})
export class ProgressMapComponent implements OnInit, OnDestroy {

  running: boolean = false;
  stopped: boolean = false;
  failed: boolean = false;
  completed: boolean = false;
  disableTrigger: boolean = false;

  runningStateInterval: any;

  constructor(private esnDataService: EsnDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  ngOnDestroy() {
    console.log(this.activatedRoute);
  }

  triggerValidation() {
    this.stopped = false;
    /**/
    this.runningStateInterval = setInterval(() => {
      this.running = !this.running;
    }, 400);
    /**/
    this.disableTrigger = true;
  }

  stopValidation() {
    this.running = false;
    this.stopped = true;
    this.failed = false;
    this.completed = false;
    this.disableTrigger = false;
    clearInterval(this.runningStateInterval);
  }

}
