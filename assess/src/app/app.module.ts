import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { AuthoriseComponent } from './authorise/authorise.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from "./app-routing.module";
import { DisplayComponent } from './display/display.component';
import { CountComponent } from './count/count.component';
import { displayService } from './display/displayService.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthoriseComponent,
    PostComponent,
    DisplayComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [displayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
