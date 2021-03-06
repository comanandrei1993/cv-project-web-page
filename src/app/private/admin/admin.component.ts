import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  invalidUserData: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  logMeIn(formData: NgForm) {
    this.authService.logMeIn(formData)
    .subscribe(
      response => {
        this.router.navigate(['/messages']);
      },
      error => {
        this.invalidUserData = true;
      }
    );
  }

}
