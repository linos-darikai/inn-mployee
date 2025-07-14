import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputTextModule, MessageModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
isInvalid(arg0: string) {
  return true;
}
onSubmit() {
throw new Error('Method not implemented.');
}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  
}
