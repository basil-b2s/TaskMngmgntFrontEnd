import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [DashboardComponent, GroupsComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
