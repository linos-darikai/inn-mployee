import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../../services/firebase.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [
        MatSidenavModule,
        CommonModule,
        RouterModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
      ],
  templateUrl: './side-nav-bar.html',
  styleUrl: './side-nav-bar.css'
})
export class SideNavBar {
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  logOut() {
    if(confirm('Are you sure you want to log out?')) {
      try {
        this.firebaseService.logOut();
        console.log('Logged out successfully.');
        this.router.navigate(['/login']);

      } catch(error: any) {
        const errorMessage = String(error.message);
        console.log('Failed to log out. Please try again later');
        console.log('Error code' + errorMessage);
      }
    }

    
  }
}
