import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model'

@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message-component.component.html',
  styleUrls: ['./sender-message-component.component.css']
})
export class SenderMessageComponentComponent implements OnInit {
  @Input() message!: Message;

  constructor() {}

  getCurrentStyles() {
    let currentStyles = {
      'background-color': this.message?.sender.isOnline? 'blue' : 'red',
    };
    return currentStyles;
  }

  ngOnInit(): void {
  }

}
