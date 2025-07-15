import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, InputTextModule, MessageModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
isInvalid(arg0: string): unknown {
throw new Error('Method not implemented.');
}
  onSubmit() {
throw new Error('Method not implemented.');
}
  resetForm = new FormGroup({
    email: new FormControl(''),
  });
  

}
