import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { taskLists } from '../../tools/task-lists';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-hr-edit-form',
  imports: [MatTableModule, CommonModule, MatSortModule, MatButtonModule, MatIconModule],
  templateUrl: './hr-edit-form.html',
  styleUrl: './hr-edit-form.css'
})
export class HrEditForm {
  tasks: any;
  displayedColumns = [ 'task'];

  constructor() {
    const tLists = [];

    for(let i = 0; i < taskLists.length; i++){
      for(let j = 0; j < taskLists[i].length; j++){
        tLists.push(taskLists[i][j]);
      }
    }

    this.tasks = new MatTableDataSource(tLists);
  }

}
