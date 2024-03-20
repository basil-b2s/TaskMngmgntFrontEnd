import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { AuthService } from '../services/auth.service';
import { SignupDto } from '../interfaces/signupDto';

@Component({
  selector: 'app-signup',
  // standalone: true,
  // imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: ApiCallService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      groupName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      referralCode: [''],
    });
  }

  public signup(): void {
    console.log('hiii');
    if (this.signupForm.valid) {
      const userSignupData: SignupDto = this.signupForm.value;
      this.authService.signup(userSignupData).subscribe(
        (res) => {
          console.log('Account Created Successfully', res);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('ERror occured', error);
        }
      );
    }
  }
}
