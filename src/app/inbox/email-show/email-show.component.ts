import {Component, OnInit} from '@angular/core';
import {EmailService} from "../email.service";
import {ActivatedRoute, Route} from "@angular/router";
import {EmailModel} from "../../shared/models/email.model";

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  id: any;
  email: any;

  constructor(private emailService: EmailService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
  }

  ngOnInit(): void {
    this.getEmailDetails(this.id);
  }

  getEmailDetails(id: string) {
    this.emailService.getEmailDetails(id).subscribe({
      next: (response) => {
        console.log(response);
        this.email = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
