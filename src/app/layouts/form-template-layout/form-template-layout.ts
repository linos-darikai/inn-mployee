import { Component } from '@angular/core';
import { ProgressTrackerComponent } from "../../components/progress-tracker.component/progress-tracker.component";
import { FormTemplateComponent } from "../../components/form-template.component/form-template.component";

@Component({
  selector: 'app-form-template-layout',
  imports: [ProgressTrackerComponent, FormTemplateComponent],
  templateUrl: './form-template-layout.html',
  styleUrl: './form-template-layout.css'
})
export class FormTemplateLayout {

}
