import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging-service.service';

import { MessagingDataService } from '../messaging-data.service';
import { Message } from '../message.model'
import { User } from '../user.model'


@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {
  messageString?: string;

  constructor(private loggingSvce: LoggingService, private sendingMessageService: MessagingDataService) { }

  ngOnInit(): void {
  }

  onSendMessage() {
    this.loggingSvce.log("Send the following message: ");
    if (this.messageString) {
      this.loggingSvce.log(this.messageString);
      let messageObj = new Message(new User( "COOOl", true), this.messageString, 1, 5 )

      this.sendingMessageService.addUserMessage(messageObj);
    }
    
  }

}
