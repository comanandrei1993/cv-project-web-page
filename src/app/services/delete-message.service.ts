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
      `https://my-cv-page.firebaseio.com/messages/${id}.json`
    );
  }
}
