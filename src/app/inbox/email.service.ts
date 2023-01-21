import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {EmailModel} from "../shared/models/email.model";
import {EmailSummaryModel} from "../shared/models/email-summary.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailsUrl = `${environment.apiUrl}/emails`;

  constructor(private http: HttpClient) {}

  getEmailsList() {
    return this.http.get<EmailSummaryModel[]>(this.emailsUrl);
  }

  getEmail(id: string) {
    return this.http.get<EmailModel>(this.emailsUrl + `/${id}`);
  }

  sendEmail() {}

}
