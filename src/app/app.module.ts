// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// AngularFire imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

// Font Awesome imports
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AdminComponent } from './private/admin/admin.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { MessagesReceivedComponent } from './private/messages-received/messages-received.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PictureHeaderComponent } from './components/picture-header/picture-header.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    AdminComponent,
    AppComponent,
    ContactComponent,
    EmailFormComponent,
    MessagesReceivedComponent,
    MySkillsComponent,
    NavbarComponent,
    PictureHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // AngularFire
    AngularFireModule.initializeApp(environment.firebase, 'my-cv-page'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    // Font Awesome
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
