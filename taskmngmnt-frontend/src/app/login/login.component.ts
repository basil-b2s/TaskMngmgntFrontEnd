import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { LoginStatusService } from '../services/login-status.service';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private tokenServie: TokenService,
    private loginStatus: LoginStatusService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public login(): void {
    if (this.loginForm.valid) {
      const userLoginData = this.loginForm.value;

      this.authService.login(userLoginData).subscribe(
        (res) => {
          console.log('Logged In', res);
          this.tokenServie.setToken(res);
          this.loginStatus.setLoginStatus(true);
          this.router.navigate(['/groups']);
        },
        (error) => {
          console.log('Error occured', error);
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
