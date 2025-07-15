import { Routes } from '@angular/router';
import { LoginPage } from './pages/login.page/login.page';
import { EmployeeDashboard } from './pages/employee-dashboard/employee-dashboard';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { ResetPasswordPage } from './pages/reset-password.page/reset-password.page';
import { PasswordPage } from './pages/password.page/password.page';
import { FormTemplateLayout } from './layouts/form-template-layout/form-template-layout';

export const routes: Routes = [
    // TEMPORARILY CHANGED FROM LOGINPAGE TO EMPLOYEE DASHBOARD
    { path: '', component: FormTemplateLayout }, // To be changed back to LoginPage
    { path: 'login', component: LoginPage},
    { path: 'reset-password', component: ResetPasswordPage},
    { path: 'password', component: PasswordPage},
    { path: 'form', component: FormTemplateLayout},

];  
