import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { FirebaseService } from '../services/firebase.services';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  constructor(
    private authService: FirebaseService,
    private router: Router){}

  async canActivate(): Promise<boolean | any> {
    const user = await this.authService.getCurrentUser();

    if(!user) {
      return this.router.navigate(['/login']);
    }

    const userRole = await this.authService.getUserRole();
    if (!userRole) {
      return false;
    }
    
    if (userRole == 'admin') {
      return true;
    } else return false;
  }
}