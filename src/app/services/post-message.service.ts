import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmitedData } from '../models/submitedData';

@Injectable({
  providedIn: 'root'
})
export class PostMessageService {

  constructor(private http: HttpClient) { }

  postMessage(
    fullName: string,
    subject: string,
    email: string,
    text: string,
    id?: string,
  ) {
    const myForm: SubmitedData = {
      fullName,
      subject,
      email,
      text,
    };

    this.http.post<{ name: string }>(
      'https://my-cv-page.firebaseio.com/messages.json',
      myForm
    ).subscribe(response => {
      console.log(response);
    });
  }
}
