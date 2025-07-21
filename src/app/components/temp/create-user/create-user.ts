import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators  } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.services';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {
  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
    private notificationService: NotificationService
  ){}

  createUserForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  async onSumbit() {
    const email = this.createUserForm.get('email')?.value;
    const password = this.createUserForm.get('password')?.value;

    if(!email || !password) {
      this.notificationService.show('Please provide both an email and a pasword', 'error');
      return;
    }

    const successfulCreation = await this.firebaseService.createUser(email, password);

    if(successfulCreation) {
      this.router.navigate(['/']);
    } else {
      console.error('failed to create account');
      this.notificationService.show('Failed to create account', 'error');
    }
  }

}
