import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../api-call.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent implements OnInit {
  groups: any[] = [];

  constructor(private http: HttpClient, private apiService: ApiCallService) {}

  ngOnInit(): void {
    this.fetchGroups();
  }

  fetchGroups(): void {
    this.apiService.get('https://localhost:7197/api/groups').subscribe(
      (groups) => {
        this.groups = JSON.parse(groups);
        console.log(groups);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
