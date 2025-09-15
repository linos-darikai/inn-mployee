import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { FirebaseService } from "../services/firebase.services";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(
    private authService: FirebaseService,
  ){}

  async canActivate(): Promise<boolean> {
    const user = await this.authService.getCurrentUser();

    if(user) {
      return true;
    } else {
      return false;
    }
  }
}