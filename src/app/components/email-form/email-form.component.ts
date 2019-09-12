import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostMessageService } from 'src/app/services/post-message.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: NgForm;

  submited = false;

  constructor(private postMessageService: PostMessageService) { }

  ngOnInit() {
  }

  onSubmit(myForm) {
    this.submited = true;

    this.postMessageService.postMessage(
      myForm.fullName,
      myForm.subject,
      myForm.email,
      myForm.text
      );

    this.myForm.reset();
  }

}
