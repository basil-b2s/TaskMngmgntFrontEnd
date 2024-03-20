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
import { AddGroupModalComponent } from './modals/add-group-modal/add-group-modal.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskModalComponent } from './modals/add-task-modal/add-task-modal.component';
import { AddTaskStatusModalComponent } from './modals/add-task-status-modal/add-task-status-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GroupsComponent,
    ProjectsComponent,
    AddProjectModalComponent,
    AddGroupModalComponent,
    TasksComponent,
    AddTaskModalComponent,
    AddTaskStatusModalComponent,
    DeleteModalComponent,
  ],
  imports: [CommonModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
})
export class DashboardModule {}
