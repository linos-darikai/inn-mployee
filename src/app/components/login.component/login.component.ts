import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FirebaseService } from '../../services/firebase.services';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputTextModule, MessageModule, CommonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(
  private router: Router,
  private authService: FirebaseService,
){}
errorMessage: string = '';

loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

isInvalid(arg0: string) {
  return true;
}

async onSubmit(): Promise<any> {
  const userEmail = await this.loginForm.get('email')?.value;
  const userPassword = await this.loginForm.get('password')?.value;

  if(!userEmail || !userPassword){
    return;
  }


    const successfulLogIn = await this.authService.logIn(userEmail, userPassword);
    if(successfulLogIn === true){
      const userRole = await this.authService.getUserRole();
      if(userRole == 'admin') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      

    } else {
      this.errorMessage = String(successfulLogIn);
      return;
    } 
  }
  
}
  
  
  

