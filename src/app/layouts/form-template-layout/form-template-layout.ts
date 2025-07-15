import { Component } from '@angular/core';
import { ProgressTrackerComponent } from "../../components/progress-tracker.component/progress-tracker.component";
import { FormTemplateComponent } from "../../components/form-template.component/form-template.component";
import { FormNavbarComponent } from "../../components/form-navbar.component/form-navbar.component";

@Component({
  selector: 'app-form-template-layout',
  imports: [ProgressTrackerComponent, FormTemplateComponent, FormNavbarComponent],
  templateUrl: './form-template-layout.html',
  styleUrl: './form-template-layout.css'
})
export class FormTemplateLayout {

}
