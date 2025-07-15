import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // Required for reactive forms

// Angular Material Modules
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { StepperSelectionEvent } from '@angular/cdk/stepper';


@Component({
  selector: 'app-progress-tracker',
  imports: [MatButtonModule, MatInputModule,  MatFormFieldModule, MatStepperModule, ReactiveFormsModule, CommonModule],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.css'

})
export class ProgressTrackerComponent {
}