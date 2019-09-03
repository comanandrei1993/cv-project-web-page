import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormDataGrabberService } from '../../services/form-data-grabber.service';

import { SubmitedData } from 'src/app/models/submitedData';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: NgForm;

  submitedData: SubmitedData = {
    fullname: '',
    subject: '',
    email: '',
    text: ''
  };

  submited = false;

  constructor(private formDataGrabberService: FormDataGrabberService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);

    this.formDataGrabberService.submitedData.email = this.myForm.value.email;
    this.formDataGrabberService.submitedData.subject = this.myForm.value.subject;
    this.formDataGrabberService.submitedData.text = this.myForm.value.text;
    this.formDataGrabberService.submitedData.fullname = this.myForm.value.fullName;

    // console.log(this.submitedData);
    // console.log(this.formDataGrabberService.submitedData);

    this.formDataGrabberService.getData();

    this.submited = true;
    this.myForm.reset();
  }

}
