import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiCallService } from './services/api-call.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { authInterceptor } from './interceptors/auth.interceptor';
import { defaultInterceptor } from './interceptors/default.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { AuthService } from './services/auth.service';
import { GroupService } from './services/group.service';
import { ProjectService } from './services/project.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CacheService } from './services/cache-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ApiCallService,
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: defaultInterceptor, multi: true },
    AuthGuard,
    LoginGuard,
    AuthService,
    GroupService,
    ProjectService,
    CacheService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
