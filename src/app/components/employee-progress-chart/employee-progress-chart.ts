import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { taskTests } from '../../tools/objects';

@Component({
  selector: 'app-employee-progress-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './employee-progress-chart.html',
  styleUrl: './employee-progress-chart.css'
})
export class EmployeeProgressChart {
  tasks = taskTests;
  progress = 0;
  progressPercent = 0;

  public doughnutChartData: any;
  public doughnutChartOptions: ChartOptions<'doughnut'>;
  public doughnutChartType: 'doughnut' = 'doughnut';

  constructor() {
    // Calculate progress
    let completedOrStarted = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].status === 'done')  {
        completedOrStarted += 1;
      } else if (this.tasks[i].status === 'started') {
        completedOrStarted += 0.5;
      }
    }

    this.progress = Math.round((completedOrStarted / this.tasks.length) * 100);
    this.progressPercent = this.progress;

    // Chart data
    this.doughnutChartData = {
      labels: ['Completed', 'Remaining'],
      datasets: [{
        data: [this.progressPercent, 100 - this.progressPercent],
        backgroundColor: ['#2DBA95', '#E0E0E0'],
        borderWidth: 0,
        cutout: '90%',
        hoverOffset: 0
      }]
    };

    // Chart options
    this.doughnutChartOptions = {
      cutout: '90%',
      rotation: 0,
      circumference: 360,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    };
  }
}
