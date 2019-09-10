import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-picture-header',
  templateUrl: './picture-header.component.html',
  styleUrls: ['./picture-header.component.scss']
})
export class PictureHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/admin']);
  }
}
