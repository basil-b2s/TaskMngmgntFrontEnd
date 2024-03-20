import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../config/api.config';
import { TaskStatusCreateDto } from '../interfaces/task-status-create-dto';

@Injectable({
  providedIn: 'root',
})
export class TaskStatusService {
  constructor(private apiService: ApiCallService) {}

  getTaskStatus(groupId: string, projectId: string): Observable<any> {
    return this.apiService.get(
      API_BASE_URL +
        'groups/' +
        groupId +
        '/projects/' +
        projectId +
        '/statuses'
    );
  }

  addTaskStatus(
    groupId: string,
    projectId: string,
    taskData: TaskStatusCreateDto
  ): Observable<any> {
    // console.log('finished');
    return this.apiService.post(
      API_BASE_URL + 'groups/' + groupId + '/projects/' + projectId + '/statuses',
      taskData
    );
}};
