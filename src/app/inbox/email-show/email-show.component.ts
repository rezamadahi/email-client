import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmailModel} from "../../shared/models/email.model";

// import {EmailService} from "../email.service";
// import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email: EmailModel;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    // });
    // this.id = this.activatedRoute.snapshot.params['id'];
    this.email = this.activatedRoute.snapshot.data['email'];
    this.activatedRoute.data.subscribe(({ email }) => {
      this.email = email;
    })
  }

  ngOnInit(): void {
    // this.activatedRoute.params.pipe(
    //   switchMap(({ id }) => {
    //     return this.emailService.getEmail(id);
    //   })
    // ).subscribe(email => {
    //   this.email = email;
    // });
  }

}
