import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080'; // Update with your Spring Boot server URL

  constructor(private http: HttpClient) {}

  authenticate(request: any) {
    return this.http.post(`${this.baseUrl}/authenticate`, request);
  }

  generateOtp(request: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/generateOtp`,request);
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
