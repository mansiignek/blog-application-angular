import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080'; // Update with your Spring Boot server URL

  constructor(private http: HttpClient) {}

  createUser(userRequest: User): Observable<string> {
    return this.http.post<string>(this.baseUrl + '/users/addUsers',userRequest);
  }
  updateUser(id:number,userRequest: User): Observable<string> {
    return this.http.put<string>(this.baseUrl + '/users/' + id,userRequest);
  }
}
