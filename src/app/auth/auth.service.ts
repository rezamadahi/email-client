import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";

interface usernameAvailableResponse {
  available: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `${environment.apiUrl}`;
  signInUrl = `${environment.apiUrl}/auth/signin`;
  signUpUrl = `${environment.apiUrl}/auth/signup`;
  usernameUrl = `${environment.apiUrl}/auth/username`;
  signedInUrl = `${environment.apiUrl}/auth/signedin`;
  signOutUrl = `${environment.apiUrl}/auth/signout`;

  constructor(private http: HttpClient ) {}

  checkUniqUsername(username: string) {
    const body = {
      username: username
    };
    return this.http.post<usernameAvailableResponse>(this.usernameUrl, body);
  }
}
