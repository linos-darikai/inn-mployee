// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { firebaseConfig } from '../../environments/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: FirebaseApp;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    // You can add other Firebase service initializations here if needed
  }
}
