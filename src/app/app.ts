import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './services/firebase.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected title = 'innbucks-onboarding';
  showNotification = false;
  notificationMessage = '';
  notificationType = 'info';

  constructor(
    private firebaseService: FirebaseService,
  ) {
    // Firebase app is initialized here once
  }
}
