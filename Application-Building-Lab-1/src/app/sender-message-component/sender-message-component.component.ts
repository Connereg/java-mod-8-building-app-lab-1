import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model'

@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message-component.component.html',
  styleUrls: ['./sender-message-component.component.css']
})
export class SenderMessageComponentComponent implements OnInit {
  @Input() message: Message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 1,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
