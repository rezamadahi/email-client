import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailShowComponent } from './email-show/email-show.component';
import {HomeComponent} from "./home/home.component";
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {SharedModule} from "../shared/shared.module";
import { EmailFormComponent } from './email-form/email-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmailCreateComponent,
    EmailReplyComponent,
    EmailInboxComponent,
    EmailShowComponent,
    HomeComponent,
    PlaceholderComponent,
    NotFoundComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }
