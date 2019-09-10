import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { AdminComponent } from './private/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { MessagesReceivedComponent } from './private/messages-received/messages-received.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'email-form', component: EmailFormComponent },
  { path: 'my-skills', component: MySkillsComponent },
  { path: 'messages', component: MessagesReceivedComponent },
  { path: '**', redirectTo: '/about-me' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
