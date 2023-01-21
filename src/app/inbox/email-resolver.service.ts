import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EmailModel} from "../shared/models/email.model";
import {EmailService} from "./email.service";
import {catchError} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<EmailModel> {

  constructor(private emailService: EmailService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { id } = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }
}
