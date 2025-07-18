import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { FirebaseService } from '../../services/firebase.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputTextModule, MessageModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(
  private router: Router,
  private authService: FirebaseService
){}

loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

isInvalid(arg0: string) {
  return true;
}

async onSubmit(): Promise<void> {
  const userEmail = this.loginForm.get('email')?.value;
  const userPassword = this.loginForm.get('password')?.value;

  if(!userEmail || !userPassword){
    throw new Error('Please submit a valid email address & Pasword');
    return;
  }

  const successfulLogIn = await this.authService.logIn(userEmail, userPassword);
  if(successfulLogIn){
    this.router.navigate(['/']);
  }
  
}
  
  
  
}
