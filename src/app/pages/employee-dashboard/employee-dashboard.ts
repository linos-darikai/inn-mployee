import { Component } from '@angular/core';
import { SideNavBar } from '../../components/side-nav-bar/side-nav-bar';
import { Countdown } from '../../components/countdown/countdown';
import { employeeTest } from '../../tools/objects';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [Countdown],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css'
})
export class EmployeeDashboard {
    // temporary user_data
  user = employeeTest






}
