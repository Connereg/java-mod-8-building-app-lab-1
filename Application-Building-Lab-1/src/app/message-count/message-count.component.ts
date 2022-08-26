import { Component, OnInit } from '@angular/core';
import { MessagingDataService } from '../messaging-data.service';
import { Message } from '../message.model'

@Component({
  selector: 'app-message-count',
  templateUrl: './message-count.component.html',
  styleUrls: ['./message-count.component.css']
})
export class MessageCountComponent implements OnInit {
  userMessageCount = 0;
  senderMessageCount = 0;

  constructor(private messagingSvce: MessagingDataService) { }

  ngOnInit(): void {
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log(messages.length);
      this.userMessageCount = messages.length;
    })

    this.messagingSvce.senderMessagesChanged.subscribe((messages: Message[]) => {
      console.log(messages.length);
      this.senderMessageCount = messages.length;
    })
  }

}
