import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Implement this method in AuthService to check if the user is logged in
  }

  // getUsername(): string {
  //   return this.authService.getUsername(); // Implement this method in AuthService to get the username
  // }

  logout(): void {
    this.authService.logout(); // Implement this method in AuthService to logout the user
    this.router.navigate(['/login']); // Navigate to login page after logout
  }
}
