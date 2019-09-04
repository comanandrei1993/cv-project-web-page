import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: NgForm;

  // submitedData: SubmitedData;



  submited = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(myForm) {
    console.log(this.myForm);

    console.log(myForm);

    // this.submitedData = myForm;
    // console.log(this.submitedData);

    this.submited = true;
    this.http.post<{ name: string }>(
      'https://my-cv-page.firebaseio.com/messages.json',
      myForm
    ).subscribe(response => {
      console.log(response);
    });
    this.myForm.reset();
  }

}
