import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { PostMessageService } from 'src/app/services/post-message.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: NgForm;

  // submitedData: SubmitedData;



  submited = false;

  constructor(private http: HttpClient, private postMessageService: PostMessageService) { }

  ngOnInit() {
  }

  onSubmit(myForm) {
    console.log(this.myForm);

    console.log(myForm);

    // this.submitedData = myForm;
    // console.log(this.submitedData);

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
