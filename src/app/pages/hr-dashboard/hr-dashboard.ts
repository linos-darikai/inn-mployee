import { Component } from '@angular/core';
import { SideNavBar } from '../../components/side-nav-bar/side-nav-bar';
import { adminTest } from '../../tools/objects';
import { HrSummaryCards } from '../../components/hr-summary-cards/hr-summary-cards';
@Component({
  selector: 'app-hr-dashboard',
  imports: [SideNavBar, HrSummaryCards ],
  templateUrl: './hr-dashboard.html',
  styleUrls: ['./hr-dashboard.css', '../employee-dashboard/employee-dashboard.css']
})
export class HrDashboard {
  user = adminTest;

}
