import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from './api-call.service';
import { TokenService } from './token.service';
import { LoginStatusService } from './login-status.service';
import { API_BASE_URL } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiCallService,
    private tokenService: TokenService,
    private loginStatus: LoginStatusService
  ) {}

  //private baseUrl: string = '';

  login(userData: any): Observable<any> {
    this.loginStatus.setLoginStatus(true);
    return this.apiService.post(API_BASE_URL + 'login', userData);
  }
  logout(): void {
    this.loginStatus.setLoginStatus(false);
    this.tokenService.clearToken();
  }
  signup(userData: any): Observable<any> {
    return this.apiService.post(API_BASE_URL + 'signup', userData);
  }
  isLoggedIn(): boolean {
    return this.loginStatus.getLoginStatus();
  }
}
