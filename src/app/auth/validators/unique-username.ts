import {AbstractControl, AsyncValidator} from "@angular/forms";
import {catchError, Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../auth.service";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {
  }

  validate = (control: AbstractControl): Promise<any> | Observable<any> => {
    const { value } = control;
    return this.authService.checkUniqUsername(value).pipe(
      map(() => {
        return null;
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true});
        } else {
          return of({ someError: true});
        }
      })
    );
  }

}
