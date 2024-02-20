import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  clearToken(): void {
    localStorage.removeItem('jwtToken');
  }
}
