import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  setItem<T>(key: string, data: T): void {
    const serializedData = JSON.stringify(data);
    sessionStorage.setItem(key, serializedData);
  }

  getItem<T>(key: string): T | null {
    const serializedData = sessionStorage.getItem(key);
    if (serializedData) {
      return JSON.parse(serializedData);
    }
    return null;
  }
}
