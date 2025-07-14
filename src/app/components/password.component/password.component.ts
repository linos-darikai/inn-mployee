import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-password',
  imports: [ReactiveFormsModule, InputTextModule, MessageModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
isInvalid(arg0: string) {
return;
}
onSubmit() {
throw new Error('Method not implemented.');
}
passwordForm = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
  });
  

}
