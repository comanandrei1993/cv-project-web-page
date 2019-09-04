import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { SubmitedData } from 'src/app/models/submitedData';

@Component({
  selector: 'app-messages-received',
  templateUrl: './messages-received.component.html',
  styleUrls: ['./messages-received.component.scss']
})
export class MessagesReceivedComponent implements OnInit {
  messages: SubmitedData[] = [];
  gettingMessages = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.gettingMessages = true;
    this.http.get<{ [key: string]: SubmitedData }>(
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
    ))
    .subscribe(messages => {
      this.gettingMessages = false;
      this.messages = messages;
      console.log(this.messages);
    });
  }

  onDeleteMessage(id) {



  }

}
