import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging-service.service';
import { Message } from './message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagingDataService {

  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  private senderMessages: Message[] = [];
  private userMessages: Message[] = [];
  
  getSenderMessages() {
    this.httpClient.get<Message[]>("http://localhost:8080/api/get-sender-messages").subscribe(
      (messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      }
    )
    return this.senderMessages.slice();
  }

  getUserMessages() {
    this.httpClient.get<Message[]>("http://localhost:8080/api/get-user-messages").subscribe(
      (messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      }
    )
    return this.userMessages.slice()
  }

  addUserMessage(newMessage: Message) {
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }


  deleteUserMessage(message: Message) {
    console.log(message.sequenceNumber)
    this.httpClient.delete<Message[]>(`http://localhost:8080/api/delete-user-message/${message.sequenceNumber}`).subscribe(
      (messages: Message[]) => {
        this.userMessages = messages;
        this.userMessagesChanged.emit(messages)
      }
    )
  }

  constructor(private loggingSvce: LoggingService, private httpClient: HttpClient) {
    loggingSvce.log("Messaging Data Service constructor completed");
   }
}
