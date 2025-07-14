import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-employee-progress-chart',
  imports: [NgChartsModule],
  templateUrl: './employee-progress-chart.html',
  styleUrl: './employee-progress-chart.css'
})
export class EmployeeProgressChart {
  /*-- 
  
  Objects/Sections must have a boolean stating whether or not they have been opened/completed
  We will iterate through each Object/Sections (herein referred to as tasks) and based on whether they have been completed/opened
  Determine wether we will consider them DONE, IN-PROGRESS OR TODO 

  --*/

  // Test Values
  COMPLETED = 7;
  INPROGRESS = 2;
  TODO = 4;


    // Chart content
  public pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: false,
  };
  public pieChartLabels = [ 'Done', 'In Progress', 'ToDo' ];
  public pieChartDatasets = [ {
    data: [ this.COMPLETED, this.INPROGRESS, this.TODO ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }

}
