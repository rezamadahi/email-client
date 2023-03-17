import { Component } from '@angular/core';
import {EmailModel} from "../../shared/models/email.model";
import {AuthService} from "../../auth/auth.service";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent {
  showModal = false;
  email: EmailModel;

  constructor(private authService: AuthService, private emailService: EmailService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`
    };
  }

  onSubmit(email: EmailModel) {
    // send email
    this.emailService.sendEmail(email).subscribe({
      next: (response) => {
        this.showModal = false;
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
