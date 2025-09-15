import { Component } from '@angular/core';
import { SideNavBar } from '../../components/side-nav-bar/side-nav-bar';
import { adminTest } from '../../tools/objects';
import { HrSummaryCards } from '../../components/hr-summary-cards/hr-summary-cards';
import { HrSummaryTable } from '../../components/hr-summary-table/hr-summary-table';
import { HrChart } from '../../components/hr-chart/hr-chart';
import { HrEditForm } from "../../components/hr-edit-form/hr-edit-form";
@Component({
  selector: 'app-hr-dashboard',
  imports: [SideNavBar, HrSummaryCards, HrSummaryTable, HrChart, HrEditForm],
  templateUrl: './hr-dashboard.html',
  styleUrls: ['./hr-dashboard.css', '../employee-dashboard/employee-dashboard.css']
})
export class HrDashboard {
  user = adminTest;

}
