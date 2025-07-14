import { Component } from '@angular/core';
import { SideNavBar } from '../../components/side-nav-bar/side-nav-bar';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css'
})
export class EmployeeDashboard {

  // temporary user_data
  user = {
    name: 'Phil'
  }

}
