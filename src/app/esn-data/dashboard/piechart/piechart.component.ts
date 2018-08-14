import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  @Input() pieData;
  public pieChartLabels: string[] = ['Used ESNs', 'Unused ESNs'];
  public pieChartData: any[];
  public pieChartType: string = 'pie';

  ngOnInit() {
    this.pieChartData = [this.pieData.totalAvailableValidESNs, this.pieData.totalESNLastPulled];
  }

  chartHovered(e: any): void {
    console.log(e);
  }

}
