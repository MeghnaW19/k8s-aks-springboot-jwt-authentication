import { Injectable } from '@angular/core';
const TOKEN_KEY = 'token';
const USER_KEY = 'SecretKey';

@Injectable({
  providedIn: 'root'
})
// This service is to save logged in users details and tokens in session
export class TokenStorageService {

  constructor() { }

  // saveToken method is to save access Token while user is login
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // getToken method is to return the token stored in session storage
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  // saveUser method is to save the logged in user details in session storage
  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // getUser method is to return the saved user details from session storage
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  // signOut method to clear the session
  signOut() {
      window.sessionStorage.clear();
  }
}
