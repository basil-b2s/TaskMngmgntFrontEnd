import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { Observable, ObservedValueOf } from 'rxjs';
import { API_BASE_URL } from '../../config/api.config';
import { ProjectCreateDto } from '../interfaces/project-create-dto';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private apiService: ApiCallService) {}

  getProjects(groupId: string): Observable<any> {
    return this.apiService.get(
      API_BASE_URL + 'groups/' + groupId + '/projects'
    );
  }

  addProjects(groupId: string, projectData: ProjectCreateDto): Observable<any> {
    return this.apiService.post(
      API_BASE_URL + 'groups/' + groupId + '/projects',
      projectData
    );
  }
}
