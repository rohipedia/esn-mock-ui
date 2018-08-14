import { Component, OnInit } from '@angular/core';
import { EsnDataService } from '../esn-data.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-validate-esn',
  templateUrl: './validate-esn.component.html',
  styleUrls: ['./validate-esn.component.css']
})
export class ValidateEsnComponent implements OnInit {

  constructor(private esnDataService: EsnDataService, private store: Store<{ esn: any[] }>) { }

  validatedEsns: any[];

  ngOnInit() {
    this.store.select('esn').subscribe((esns: any[]) => {
      if (esns.length > 0) {
        this.validatedEsns = esns;
      } else {
        this.esnDataService.getValidateEsnData();
      }
    });
  }
 
}
