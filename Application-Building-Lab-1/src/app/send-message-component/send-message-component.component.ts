import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging-service.service';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {
  messageString?: string;

  loggingSvce = new LoggingService();

  constructor() { }

  ngOnInit(): void {
  }

  onSendMessage() {
    this.loggingSvce.log("Send the following message: ");
    if (this.messageString) {
      this.loggingSvce.log(this.messageString);
    }
    
  }

}
