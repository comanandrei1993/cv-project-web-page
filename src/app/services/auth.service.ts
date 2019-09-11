import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    ) { }

  logMeIn(formData) {
    console.log('\nfrom auth.service:');
    console.log(formData);
    this.router.navigate(['/messages']);

    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzE7tLVPuw9XWreoA39dViHQoJeJ-olb4',
        {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true
        }
      )
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
