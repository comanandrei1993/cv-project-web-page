import { Injectable } from '@angular/core';

import { SubmitedData } from 'src/app/models/submitedData';

@Injectable({
  providedIn: 'root'
})
export class FormDataGrabberService {

  submitedData: SubmitedData = {
    fullname: '',
    subject: '',
    email: '',
    text: ''
  };

  submitedDataJson: string;

  constructor() { }

  getData() {
    // this.submitedData.email = this.myForm.value.email;
    // this.submitedData.subject = this.myForm.value.subject;
    // this.submitedData.text = this.myForm.value.text;
    // this.submitedData.fullname = this.myForm.value.fullName;

    console.log(this.submitedData);
    this.submitedDataJson = JSON.stringify(this.submitedData);
    console.log(this.submitedDataJson);
  }

  saveData() {



  }
}
