import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = '';
  post(url: string, data: any): Observable<any> {
    // console.log('post request worked');
    return this.http.post(url, data);
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
