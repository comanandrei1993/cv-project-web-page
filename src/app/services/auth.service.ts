import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponseData {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = null;

  constructor(
    private http: HttpClient,
    ) { }

  logMeIn(formData) {
    console.log('\nfrom auth.service:');
    console.log(formData);

    const authObs: Observable<AuthResponseData> = this.http
    .post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzE7tLVPuw9XWreoA39dViHQoJeJ-olb4',
      {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      }
    );

    authObs.subscribe(response => { this.token = response.idToken; });

    return authObs;
  }
}
