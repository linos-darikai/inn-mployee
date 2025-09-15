import { Component } from '@angular/core';
import { taskTests } from '../../tools/objects';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort'; // if using sorting
import { MatPaginatorModule } from '@angular/material/paginator'; // if using pagination
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-todo-list',
  imports: [MatTableModule, CommonModule, MatSortModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './employee-todo-list.html',
  styleUrl: './employee-todo-list.css'
})
export class EmployeeTodoList {
  tasks = new MatTableDataSource(taskTests);
  displayedColumns: string[] = ['title', 'status'];

}
