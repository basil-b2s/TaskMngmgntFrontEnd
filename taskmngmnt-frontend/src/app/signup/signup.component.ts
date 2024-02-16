import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log('joo');
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      groupName: ['', [Validators.required]],
    });
  }

  public signup(): void {
    console.log('hiii');
    if (this.signupForm.valid) {
      const userSignupData = this.signupForm.value;

      this.http
        .post('https://localhost:7197/api/signup', userSignupData, {
          responseType: 'text',
        })
        .subscribe(
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
