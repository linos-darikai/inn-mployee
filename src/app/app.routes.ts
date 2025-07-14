import { Routes } from '@angular/router';
import { LoginPage } from './pages/login.page/login.page';
import { EmployeeDashboard } from './pages/employee-dashboard/employee-dashboard';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { ResetPasswordPage } from './pages/reset-password.page/reset-password.page';

export const routes: Routes = [
    // TEMPORARILY CHANGED FROM Dashboard to ResetPage
    { path: '', component: ResetPasswordPage }, // To be changed back to LoginPage
];
