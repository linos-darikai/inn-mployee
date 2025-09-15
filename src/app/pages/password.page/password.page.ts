import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner.component/banner.component";
import { PasswordComponent } from "../../components/password.component/password.component";

@Component({
  selector: 'app-password.page',
  imports: [BannerComponent, PasswordComponent],
  templateUrl: './password.page.html',
  styleUrl: './password.page.css'
})
export class PasswordPage {

}
