import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { FirebaseService } from '../../services/firebase.services';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
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
  private authService: FirebaseService,
  private notificationService: NotificationService
){}

loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

isInvalid(arg0: string) {
  return true;
}

async onSubmit(): Promise<any> {
  const userEmail = this.loginForm.get('email')?.value;
  const userPassword = this.loginForm.get('password')?.value;

  if(!userEmail || !userPassword){
    this.notificationService.show('Please provide a valid email and password', 'error');
    return;
  }


    const successfulLogIn = await this.authService.logIn(userEmail, userPassword);
    if(successfulLogIn){
      return this.router.navigate(['/']);
    } else {
      return;
    } 
  }
  
}
  
  
  

