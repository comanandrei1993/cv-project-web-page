import { Component, OnInit } from '@angular/core';

import { SubmitedData } from 'src/app/models/submitedData';
import { GetMessagesService } from 'src/app/services/get-messages.service';
import { DeleteMessageService } from 'src/app/services/delete-message.service';

@Component({
  selector: 'app-messages-received',
  templateUrl: './messages-received.component.html',
  styleUrls: ['./messages-received.component.scss']
})
export class MessagesReceivedComponent implements OnInit {
  messages: SubmitedData[] = [];
  gettingMessages = false;

  constructor(
    private getMessagesService: GetMessagesService,
    private deleteMessageService: DeleteMessageService,
    ) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.gettingMessages = true;
    this.getMessagesService.getMessages().subscribe(messages => {
      this.gettingMessages = false;
      this.messages = messages;
    });
  }

  onDeleteMessage(id: string) {

    this.deleteMessageService.deleteMessage(id).subscribe(
      res => {
        this.getMessages();
      }
    );
  }

}
