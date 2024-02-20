import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private apiService: ApiCallService) {}

  getGroups(): Observable<any> {
    return this.apiService.get(API_BASE_URL + 'groups');
  }
}
