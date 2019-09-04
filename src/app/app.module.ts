// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PictureHeaderComponent } from './components/picture-header/picture-header.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MessagesReceivedComponent } from './private/messages-received/messages-received.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutMeComponent,
    PictureHeaderComponent,
    EmailFormComponent,
    MySkillsComponent,
    MessagesReceivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
