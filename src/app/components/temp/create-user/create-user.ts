import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators  } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.services';
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
    private firebaseService: FirebaseService
  ){}

  createUserForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  errorMessage: string = ''; // if you want to then make the form sexy

  async onSumbit() {
    const email = this.createUserForm.get('email')?.value;
    const password = this.createUserForm.get('password')?.value;

    if(!email || !password) {
      console.error('Please provide a valid email or password');
      return;
    }

    const successfulCreation = await this.firebaseService.createUser(email, password);

    if(successfulCreation) {
      this.router.navigate(['/']);
    } else {
      console.error('failed to create account');
      alert('Failed to create account');
    }
  }

}
