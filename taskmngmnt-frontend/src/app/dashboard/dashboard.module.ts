import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from '../app.routes';
import { RouterModule } from '@angular/router';
import { AddProjectModalComponent } from './modals/add-project-modal/add-project-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    GroupsComponent,
    ProjectsComponent,
    AddProjectModalComponent,
  ],
  imports: [CommonModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
})
export class DashboardModule {}
