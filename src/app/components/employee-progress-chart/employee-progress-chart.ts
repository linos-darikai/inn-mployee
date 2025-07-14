import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

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
  COMPLETED = 100;
  INPROGRESS = 2;
  TODO = 4;

  // Example progress percentage 0 to 100
  progress = ((this.COMPLETED + (this.INPROGRESS / 2)) * 100 / (this.COMPLETED + this.INPROGRESS + this.TODO)).toFixed(0);

  public doughnutChartData = {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: [this.progress, 100 - Number(this.progress)],
      backgroundColor: ['#2DBA95', '#E0E0E0'],  // Green and gray
      borderWidth: 0,
      cutout: '90%',  // Thin ring: increase for thinner
      hoverOffset: 0
    }]
  };

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    cutout: '90%',  // Thin doughnut thickness
    rotation: 0,  // Start from top
    circumference: 360,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
      // Plugin to draw text will be added separately if needed
    }
  };

  public doughnutChartType: 'doughnut' = 'doughnut';


}
