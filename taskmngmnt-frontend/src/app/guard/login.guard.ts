import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.route.navigate(['/groups']);
      return false;
    } else {
      return true;
    }
  }
}
