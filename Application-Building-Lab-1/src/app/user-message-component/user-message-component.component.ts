import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../message.model"
import { MessagingDataService } from '../messaging-data.service';
import { LoggingService } from '../logging-service.service';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css']
})
export class UserMessageComponentComponent implements OnInit {
  @Input() message!: Message;

  constructor(private messagingDataService :MessagingDataService,private loggingSvce : LoggingService) { }

  
  onSubmitDelete() {
    this.loggingSvce.log("Deleting message... " + this.message.text)
    this.messagingDataService.deleteUserMessage(this.message)
  }

  ngOnInit(): void {
  }

}
