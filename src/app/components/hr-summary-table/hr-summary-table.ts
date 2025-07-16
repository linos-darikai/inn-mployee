<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { SimpleUser, mockUsers} from '../../tools/objects';
@Component({
  selector: 'app-hr-summary-table',
  imports: [MatTableModule, MatIconModule, CommonModule, MatSortModule, MatButtonModule],
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-summary-table',
  imports: [],
>>>>>>> main
  templateUrl: './hr-summary-table.html',
  styleUrl: './hr-summary-table.css'
})
export class HrSummaryTable {
<<<<<<< HEAD
    users = new MatTableDataSource(mockUsers);
    displayedColumns: string[] = ['name', 'email', 'task1', 'task2', 'task3', 'task4', 'task5'];
=======
>>>>>>> main

}
