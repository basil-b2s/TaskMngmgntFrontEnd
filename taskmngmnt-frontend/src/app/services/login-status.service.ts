import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginStatusService {
  constructor() {}

  getLoginStatus(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  setLoginStatus(status: boolean): void {
    localStorage.setItem('isLoggedIn', status.toString());
  }
}
