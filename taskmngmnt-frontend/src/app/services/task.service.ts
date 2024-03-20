import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_BASE_URL } from '../../config/api.config';
import { TaskCreateCreateDto } from '../interfaces/task-create-dto';
import { CacheService } from './cache-service.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private cache: Map<string, any> = new Map<string, any>();

  constructor(
    private apiService: ApiCallService,
    private cacheService: CacheService
  ) {}

  getTasks(groupId: string, projectId: string): Observable<any> {
    // const cacheKey = `tasks_${groupId}_${projectId}`;
    // const cachedData: Tasks[] | null =
    //   this.cacheService.getItem<Tasks[]>(cacheKey);
    // //const a = JSON.stringify(cachedData);
    // const updatedCachedData = cachedData ? [...cachedData] : [];
    // console.log(updatedCachedData);
    // // console.log(cachedData);
    // updatedCachedData?.push({
    //   taskId: 54,
    //   description: 'string',
    //   dueDate: '26-02-2024 10:38:54',
    //   assignee: 'basilsaji222@gmail.com',
    //   createdBy: 'basilsaji222@gmail.com',
    //   currentStatus: 'Not Started',
    // });
    // if (cachedData) {
    //   return of(cachedData);
    // } else {
      return this.apiService
        .get(API_BASE_URL + `groups/${groupId}/projects/${projectId}/tasks`)
        // .pipe(
        //   tap((tasks) => {
        //     this.cacheService.setItem(cacheKey, tasks);
        //   })
        // );
    // }
  }

  addTasks(
    groupId: string,
    projectId: string,
    taskData: TaskCreateCreateDto
  ): Observable<any> {
    return this.apiService.post(
      API_BASE_URL + `groups/${groupId}/projects/${projectId}/tasks`,
      taskData
    );
  }

  deleteTask(
    groupId: string,
    projectId: string,
    taskId: number
  ): Observable<any> {
    return this.apiService.delete(
      API_BASE_URL + `groups/${groupId}/projects/${projectId}/tasks/${taskId}`
    );
  }
}

// export interface Tasks {
//   taskId: number;
//   description: String;
//   dueDate: string;
//   assignee: string;
//   createdBy: string;
//   currentStatus: string;
// }
