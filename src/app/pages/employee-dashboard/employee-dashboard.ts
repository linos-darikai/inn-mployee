import { Component } from '@angular/core';
import { Countdown } from '../../components/countdown/countdown';
import { employeeTest } from '../../tools/objects';
import { EmployeeProgressChart } from '../../components/employee-progress-chart/employee-progress-chart';
import { EmployeeTodoList } from '../../components/employee-todo-list/employee-todo-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { Searchbar } from '../../components/searchbar/searchbar';
import { SideNavBar } from '../../components/side-nav-bar/side-nav-bar';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [Countdown, EmployeeProgressChart, EmployeeTodoList, MatButtonModule, MatIconModule, Searchbar, SideNavBar],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css'
})
export class EmployeeDashboard {
    // temporary user_data
  user = employeeTest






}
