import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-nav-bar',
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

}
