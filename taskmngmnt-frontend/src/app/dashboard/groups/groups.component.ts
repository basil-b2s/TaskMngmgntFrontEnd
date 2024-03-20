import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { Router } from '@angular/router';
import { GroupService } from '../../services/group.service';
import { GroupCreateDto } from '../../interfaces/group-create-dto';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent implements OnInit {
  showAddGroupModal: boolean = false;
  groups: any = [];
  loading: boolean = false;
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
    this.loading = true;
    this.groupService.getGroups().subscribe(
      (groups) => {
        console.log('navigated');
        this.groups = JSON.parse(groups);
        this.loading = false;
      },
      (err) => {
        console.log('navigated');
        this.loading = false;
        this.router.navigate(['/groups']);
        console.error(err);
      }
    );
  }

  addGroup(groupData: GroupCreateDto): void {
    if (!groupData) {
      console.log(groupData);
      this.showAddGroupModal = false;
      return;
    }

    this.groupService.addGroups(groupData).subscribe(
      (res) => {
        this.fetchGroups();
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.showAddGroupModal = false;
      }
    );
  }

  goToProjects(groupId: number) {
    console.log('projects');

    this.router.navigate(['/groups', groupId, 'projects']);
  }

  openAddGroupModal(): void {
    this.showAddGroupModal = true;
  }
}
