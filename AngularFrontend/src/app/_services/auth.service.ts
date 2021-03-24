import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

// This service is responsible for the login and register of user
export class AuthService {

  constructor(private http: HttpClient) { }


  // register method using HttpClient to register a user
  register(user): Observable<any> {
    return this.http.post(environment.API + 'user', {
      email: user.email,
      password: user.password,
      name: user.name,
      age: ''
    }, httpOptions);
  }

  //  login method using HttpClient for a user to login
  login(credentials): Observable<any> {
    return this.http.post(environment.API + 'login' ,{
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }



}
