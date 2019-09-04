import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { SubmitedData } from '../models/submitedData';

@Injectable({
  providedIn: 'root'
})
export class GetMessagesService {

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get<{ [key: string]: SubmitedData }>(
      'https://my-cv-page.firebaseio.com/messages.json'
    ).pipe(map(response => {
      const arrayOfMessages = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          arrayOfMessages.push({...response[key], id: key});
        }
      }
      return arrayOfMessages;
    }
    ));
  }
}
