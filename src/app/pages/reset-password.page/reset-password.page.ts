import { Component } from '@angular/core';
import { ResetPasswordComponent } from "../../components/reset-password.component/reset-password.component";
import { BannerComponent } from "../../components/banner.component/banner.component";

@Component({
  selector: 'app-reset-password-page',
  imports: [ResetPasswordComponent, BannerComponent],
  templateUrl: './reset-password.page.html',
  styleUrl: './reset-password.page.css'
})
export class ResetPasswordPage {

}
