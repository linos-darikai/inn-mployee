import { Routes } from '@angular/router';
import { LoginPage } from './pages/login.page/login.page';
import { EmployeeDashboard } from './pages/employee-dashboard/employee-dashboard';
import { ResetPasswordPage } from './pages/reset-password.page/reset-password.page';
import { PasswordPage } from './pages/password.page/password.page';
import { HrDashboard } from './pages/hr-dashboard/hr-dashboard';
import { FormTemplateLayout } from './layouts/form-template-layout/form-template-layout';
import { CreateUser } from './components/temp/create-user/create-user';
import { AuthGuard } from './gaurds/auth-guard';
import { AdminGuard } from './gaurds/admin-guard';
import { EmployeeGuard } from './gaurds/employee-guard';



export const routes: Routes = [
    // TEMPORARILY CHANGED FROM LOGINPAGE TO EMPLOYEE DASHBOARD
    { path: '', component: HrDashboard, canActivate: [AdminGuard] }, // To be changed back to LoginPage
    { path: 'login', component: LoginPage},
    { path: 'test/create-user', component: CreateUser}, // Form purely for testing purposes
    { path: 'reset-password', component: ResetPasswordPage},
    { path: 'password', component: PasswordPage},
    { path: 'dashboard', component: EmployeeDashboard, canActivate: [EmployeeGuard] },
    { path: 'form', component: FormTemplateLayout, canActivate: [EmployeeGuard] }
    // DYNAMIC ROUTE UPDATING

    
];  
