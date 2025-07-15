import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Message } from "primeng/message";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',  
  imports: [Message, ReactiveFormsModule, CommonModule],
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, this.passwordStrengthValidator]],
      oldPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Custom Validator for Strength
  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 8;

    const isValid = hasNumber && hasSpecialChar && hasMinLength;

    return isValid ? null : { weakPassword: true };
  }

  // Validator for Matching Passwords
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('newPassword')?.value;
    const confirm = group.get('oldPassword')?.value;

    return pass === confirm ? null : { passwordMismatch: true };
  }

  showMismatchError(): boolean {
    return this.passwordForm.errors?.['passwordMismatch'] && this.passwordForm.touched;
  }

  showStrengthError(): boolean {
    const control = this.passwordForm.get('newPassword');
    return control?.errors?.['weakPassword'] && (control.dirty || control.touched);
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log("✅ Passwords valid and matched:", this.passwordForm.value);
    } else {
      this.passwordForm.markAllAsTouched();
    }
  }
}
