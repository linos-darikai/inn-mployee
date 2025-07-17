import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from "./pages/login.page/login.page";
import { FirebaseService } from './services/firebase.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'innbucks-onboarding';
  constructor(private firebaseService: FirebaseService) {
    // Firebase app is initialized here once
  }
}
