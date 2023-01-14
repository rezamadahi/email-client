import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {BehaviorSubject, tap} from "rxjs";

interface usernameAvailableResponse {
  available: boolean
}

interface SignUpResponse {
  username: string
}

interface  SignedInResponse {
  authenticated: boolean;
  username: string;
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

  signedIn$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

  constructor(private http: HttpClient ) {}

  checkUniqUsername(username: string) {
    const body = {
      username: username
    };
    return this.http.post<usernameAvailableResponse>(this.usernameUrl, body);
  }

  signUp(credentials: any) {
    return this.http.post<SignUpResponse>(this.signUpUrl, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(this.signedInUrl).pipe(
      tap(({authenticated}) => {
        authenticated ? this.signedIn$.next(true) : this.signedIn$.next(false);
      })
    );
  }

  signOut() {
    return this.http.post(this.signOutUrl, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);

      })
    );
  }

  signIn(credentials: any) {
    return this.http.post<SignUpResponse>(this.signInUrl, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }
}
