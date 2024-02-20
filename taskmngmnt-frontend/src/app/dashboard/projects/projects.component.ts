import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  showAddProjectModal: boolean = false;
  isProjects: boolean = false;
  projects: any[] = [];
  groupId!: string | null;
  constructor(
    private apiService: ApiCallService,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}
  ngOnInit(): void {
    console.log('hiii');
    this.route.paramMap.subscribe((params) => {
      this.groupId = params.get('groupId');

      if (this.groupId !== null) {
        this.fetchProjects(this.groupId);
      }
    });
  }

  fetchProjects(groupId: string): void {
    this.projectService.getProjects(groupId).subscribe(
      (projects) => {
        this.projects = JSON.parse(projects);
        if (this.projects.length > 0) {
          this.isProjects = true;
        }
        console.log(projects);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  openAddProjectModal() {
    this.showAddProjectModal = true;
  }
  addProject(projectData: any) {
    // Logic to add project
    console.log('New project added:', projectData);

    // Close the modal
    this.showAddProjectModal = false;
  }

  onCloseModal() {
    this.showAddProjectModal = false;
  }
}
