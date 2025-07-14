import { Component } from '@angular/core';
import { SideNavBar } from '../../components/side-nav-bar/side-nav-bar';
import { EmployeeDashboard } from '../../pages/employee-dashboard/employee-dashboard';
import { RouterLink } from '@angular/router';
import { BannerComponent } from "../../components/banner.component/banner.component";

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideNavBar, EmployeeDashboard],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css'
})
export class DashboardLayout {

}
