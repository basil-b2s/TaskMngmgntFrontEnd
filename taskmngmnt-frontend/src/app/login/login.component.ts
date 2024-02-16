import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

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
    private apiService: ApiCallService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public login(): void {
    if (this.loginForm.valid) {
      const userLoginData = this.loginForm.value;

      this.apiService
        .post('https://localhost:7197/api/login', userLoginData)
        .subscribe(
          (res) => {
            console.log('Logged In', res);
            localStorage.setItem('jwtToken', res);
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.log('Error occured', error);
          }
        );
    }
  }
}
