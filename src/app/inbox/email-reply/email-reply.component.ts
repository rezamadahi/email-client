import {Component, Input, OnChanges} from '@angular/core';
import {EmailModel} from "../../shared/models/email.model";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnChanges {

  showModal = false;
  @Input() email!: EmailModel;

  constructor(private emailService: EmailService) {}

  ngOnChanges(): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n---------- ${this.email.from} wrote: \n > ${this.email.text}`
    };
  }

  onSubmit(email: EmailModel) {
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
