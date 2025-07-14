import { Routes } from '@angular/router';
import { LoginPage } from './pages/login.page/login.page';
import { EmployeeDashboard } from './pages/employee-dashboard/employee-dashboard';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [
    // TEMPORARILY CHANGED FROM LOGINPAGE TO EMPLOYEE DASHBOARD
    { path: '', component: DashboardLayout }, // To be changed back to LoginPage
];
