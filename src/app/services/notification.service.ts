// src/app/services/notification.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private messageSource = new BehaviorSubject<{ message: string; type: string } | null>(null);
  message$ = this.messageSource.asObservable();

  show(message: string, type: string = 'info') {
    this.messageSource.next({ message, type });

    // Auto-clear after 5 seconds
    setTimeout(() => this.clear(), 1000);
  }

  clear() {
    this.messageSource.next(null);
  }
}
