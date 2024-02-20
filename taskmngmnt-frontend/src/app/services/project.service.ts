import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../config/api.config';

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
}
