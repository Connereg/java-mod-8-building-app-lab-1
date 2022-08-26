import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationHistoryComponentComponent } from './conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ConversationControlComponentComponent } from './conversation-control-component/conversation-control-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HighlightDirective } from './highlight.directive';

import { MessagingDataService } from './messaging-data.service';
import { LoggingService } from './logging-service.service';
import { MessageCountComponent } from './message-count/message-count.component';
import { ApplicationBodyComponent } from './application-body/application-body.component';
@NgModule({
  declarations: [
    AppComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    ContactListComponentComponent,
    ConversationControlComponentComponent,
    ContactComponentComponent,
    SendMessageComponentComponent,
    UserMessageComponentComponent,
    SenderMessageComponentComponent,
    HeaderComponentComponent,
    HighlightDirective,
    MessageCountComponent,
    ApplicationBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    LoggingService,
    MessagingDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
