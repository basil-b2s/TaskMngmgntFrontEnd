import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectCreateDto } from '../../interfaces/project-create-dto';

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
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.groupId = params.get('groupId');

      if (this.groupId) {
        this.fetchProjects(this.groupId);
      }
    });
  }

  fetchProjects(groupId: string): void {
    this.projectService.getProjects(groupId).subscribe(
      (projects) => {
        this.projects = JSON.parse(projects);

        console.log(projects);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  addProject(projectData: ProjectCreateDto): void {
    if (!projectData) {
      this.showAddProjectModal = false;
      return;
    }
    this.projectService.addProjects(this.groupId!, projectData).subscribe(
      (res) => {
        this.fetchProjects(this.groupId!);
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.showAddProjectModal = false;
      }
    );
  }

  openAddProjectModal(): void {
    this.showAddProjectModal = true;
  }
}
