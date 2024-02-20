import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { Router } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent implements OnInit {
  groups: any[] = [];
  // isGroups : boolean = false;
  constructor(
    private http: HttpClient,
    private apiService: ApiCallService,
    private router: Router,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.fetchGroups();
  }

  fetchGroups(): void {
    this.groupService.getGroups().subscribe(
      (groups) => {
        console.log('navigated');
        this.groups = JSON.parse(groups);
      },
      (err) => {
        console.log('navigated');
        this.router.navigate(['/groups']);
        console.error(err);
      }
    );
  }

  goToProjects(groupId: number) {
    console.log('projects');

    this.router.navigate(['/groups', groupId, 'projects']);
  }
}
