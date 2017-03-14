import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { Routing } from './app.routing';
import { ChatComponent }  from './components/chat.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Routing ],
  declarations: [ AppComponent, ChatComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
