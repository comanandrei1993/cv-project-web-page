import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  logMeIn(formData) {
    console.log('\nfrom auth.service:');
    console.log(formData);
    this.router.navigate(['/messages']);
  }
}
