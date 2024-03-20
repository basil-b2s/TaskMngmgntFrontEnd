import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupsComponent } from './dashboard/groups/groups.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { TasksComponent } from './dashboard/tasks/tasks.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'groups',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: GroupsComponent },
      { path: ':groupId/projects', component: ProjectsComponent },
      { path: ':groupId/projects/:projectId/tasks', component: TasksComponent },
    ],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
