import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../components/login.component/login.component';
import { BannerComponent } from "../../components/banner.component/banner.component";


@Component({
  selector: 'app-login-page',
  imports: [LoginComponent, BannerComponent],
  standalone: true,
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {



}
