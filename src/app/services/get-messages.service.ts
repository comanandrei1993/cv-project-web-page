import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { SubmitedData } from '../models/submitedData';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetMessagesService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    ) { }

  getMessages() {
    return this.http.get<{ [key: string]: SubmitedData }>(
      'https://my-cv-page.firebaseio.com/messages.json',
      {
        params: new HttpParams().set('auth', this.authService.token)
      }
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
