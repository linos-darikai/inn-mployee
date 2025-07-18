import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './services/firebase.services';
import { NotificationService } from './services/notification.service';
import { MessageModule, Message } from 'primeng/message';
import { Notification } from "./components/notification/notification.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageModule, Notification, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'innbucks-onboarding';
  showNotification = false;
  notificationMessage = '';
  notificationType = 'info';

  constructor(
    private firebaseService: FirebaseService,
    private notificationService: NotificationService

  ) {
    // Firebase app is initialized here once
  }

  ngOnInit() {
    this.notificationService.message$.subscribe((data) => {
      if (data) {
        this.notificationMessage = data.message;
        this.notificationType = data.type;
        this.showNotification = true;
      } else {
        this.showNotification = false;
      }
    });

  }
}
