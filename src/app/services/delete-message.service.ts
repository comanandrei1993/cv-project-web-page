import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteMessageService {

  constructor(private http: HttpClient) { }

  deleteMessage(id: string) {
    console.log(id);
    return this.http.delete(
      `http://crossorigin.me/https://console.firebase.google.com/project/my-cv-page/database/my-cv-page/data/messages/${id}.json`
      )
      .subscribe();
  }
}
