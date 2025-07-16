import { Component } from '@angular/core';
import { taskLists } from '../../tools/task-lists';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-hr-chart',
  imports: [NgChartsModule],
  templateUrl: './hr-chart.html',
  styleUrl: './hr-chart.css'
})
export class HrChart {
// Test Task Lists
TASKLISTS = taskLists;
completed = 0;
inProgress = 0;
notStarted = 0;

public doughnutChartData: any;
public doughnutChartOptions: ChartOptions<'doughnut'>;
public doughnutChartType: 'doughnut' = 'doughnut';

constructor() {
  for(let i = 0; i < this.TASKLISTS.length; i++){
    for(let j = 0; j < this.TASKLISTS[i].length; j++) {
      let task = this.TASKLISTS[i][j];
      if (task.status === 'done') {
        this.completed +=1;
      } else if (task.status === 'started') {
        this.inProgress +=1;
      } else {
        this.notStarted +=1;
      }
    }
  }


  //Chart Data
  this.doughnutChartData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [{
      data: [this.completed, this.inProgress, this.notStarted],
      backgroundColor: ['#13294B', '#F6CE73', '#94E9B8'],
      borderWidth: 0,
      cutout: '60%',
      hoverOffset: 0
    }]
  };  

  //Chart Options
this.doughnutChartOptions = {
  responsive: true,
  cutout: '90%',
  rotation: 0,
  spacing: 2,
  offset: 5,
  circumference: 360,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'center',
      labels: {
        boxWidth: 8,
        padding: 30,
        usePointStyle: true,
        pointStyle: 'circle',
        generateLabels: (chart) => {
          const dataSet = chart.data.datasets[0];
          const data = (dataSet.data ?? []) as (number | null)[];
          const filteredData = data.filter((v): v is number => v !== null && v !== undefined);
          const total = filteredData.reduce((sum, val) => sum + val, 0);

          return chart.data.labels!.map((label, i) => {
            const value = data[i] ?? 0;
            const percent = total ? ((value / total) * 100).toFixed(1) : '0';
            return {
              text: `${label}       ${percent}%`,
              fillStyle: Array.isArray(dataSet.backgroundColor)
                ? dataSet.backgroundColor[i]
                : dataSet.backgroundColor,
              strokeStyle: '#fff',
              lineWidth: 0,
              hidden: isNaN(value) || value === 0,
              index: i,
            };
          });
        }
      }
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: context => {
          const dataSet = context.chart.data.datasets[0];
          const data = (dataSet.data ?? []) as (number | null)[];
          const filteredData = data.filter((v): v is number => v !== null && v !== undefined);
          const total = filteredData.reduce((a, b) => a + b, 0);
          const value = context.parsed ?? 0;
          const percent = total ? ((value / total) * 100).toFixed(1) : '0';
          return `${context.label}: ${value} (${percent}%)`;
        }
      }
    }
  }
};




}
}
