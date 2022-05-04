import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private url = 'https://randomuser.me/api';
  constructor(private http : HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get(this.url);
  }
  getPostInfo(loginObj: any): Observable<any> {
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>('https://reqres.in/api/posts', loginObj, { headers })
    
}
}
