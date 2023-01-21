import {Component, OnInit} from '@angular/core';
import {EmailService} from "../email.service";
import {EmailSummaryModel} from "../../shared/models/email-summary.model";

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})
export class EmailInboxComponent implements OnInit {
  emailList: EmailSummaryModel[] = [];
  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {

    this.emailService.getEmailsList().subscribe({
      next: (response) => {
        this.emailList = response;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }


}
