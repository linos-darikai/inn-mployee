import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // Required for reactive forms

// Angular Material Modules
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface StepData {
  label: string;
  inputLabel?: string;
  inputName?: string;
  placeholder?: string;
  formGroup?: FormGroup;
  subSteps?: StepData[];
}

@Component({
  selector: 'app-progress-tracker',
  imports: [MatButtonModule, MatInputModule,  MatFormFieldModule, MatStepperModule, ReactiveFormsModule, CommonModule],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.css'
})
export class ProgressTrackerComponent {
    steps: StepData[];

  constructor(private fb: FormBuilder) {
    this.steps = this.buildSteps();

}






  // Helper to build steps and formGroups dynamically
  private buildSteps(): StepData[] {
    return [
      {
        label: 'Step 1: Personal Info',
        inputLabel: 'Name',
        inputName: 'name',
        placeholder: 'John Doe',
        formGroup: this.fb.group({
          name: ['', Validators.required]
        }),
        subSteps: [
          {
            label: 'Sub-step 1.1: Age',
            inputLabel: 'Age',
            inputName: 'age',
            placeholder: 'e.g. 25',
            formGroup: this.fb.group({
              age: ['', Validators.required]
            })
          },
          {
            label: 'Sub-step 1.2: Email',
            inputLabel: 'Email',
            inputName: 'email',
            placeholder: 'you@example.com',
            formGroup: this.fb.group({
              email: ['', [Validators.required, Validators.email]]
            })
          }
        ]
      },
      {
        label: 'Step 2: Preferences',
        formGroup: this.fb.group({}),
        subSteps: [
          {
            label: 'Sub-step 2.1: Notifications',
            inputLabel: 'Receive notifications?',
            inputName: 'notify',
            placeholder: 'yes / no',
            formGroup: this.fb.group({
              notify: ['', Validators.required]
            })
          },
          {
            label: 'Sub-step 2.2: Schedule',
            subSteps: [
              {
                label: 'Sub-sub-step 2.2.1: Morning Schedule',
                inputLabel: 'Morning Task',
                inputName: 'morning',
                placeholder: 'e.g. Gym',
                formGroup: this.fb.group({
                  morning: ['', Validators.required]
                })
              },
              {
                label: 'Sub-sub-step 2.2.2: Evening Schedule',
                inputLabel: 'Evening Task',
                inputName: 'evening',
                placeholder: 'e.g. Study',
                formGroup: this.fb.group({
                  evening: ['', Validators.required]
                })
              }
            ]
          }
        ]
      },
      {
        label: 'Step 3: Done',
        formGroup: this.fb.group({})
      }
    ];
  }
}
