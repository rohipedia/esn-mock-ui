import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDevicesData } from './device-details.model';

@Component({
  selector: 'app-claim-esn-input',
  templateUrl: './claim-esn-input.component.html',
  styleUrls: ['./claim-esn-input.component.css']
})

export class ClaimEsnInputComponent implements OnInit {
  claimEsnForm;
  @Input('data') devicesData: IDevicesData[];

  constructor() { }

  ngOnInit() {
    this.claimEsnForm = new FormGroup({
      'device': new FormControl(this.devicesData[0].sku, Validators.required),
      'numberOfEsns': new FormControl('1', Validators.required)
    });
  }

  claimEsn() {
    console.log(this.claimEsnForm.value);
  }
}
