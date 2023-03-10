import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { MatchPassword } from "../validators/match-password";
import {AuthService} from "../auth.service";
import {UniqueUsername} from "../validators/unique-username";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [this.uniqueUsername.validate]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, { validators: [this.matchPassword.validate]});

  constructor(
    private matchPassword: MatchPassword,
    private authService: AuthService,
    private uniqueUsername: UniqueUsername,
    private router: Router
  ) {}

  get username() {
    return this.authForm.get('username');
  }

  get password() {
    return this.authForm.get('password');
  }

  get passwordConfirmation() {
    return this.authForm.get('passwordConfirmation');
  }

  onSubmit() {
    this.authService.signUp(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: err => {
        if (!err.status) {
          this.authForm.setErrors({ noConnection: true});
        } else {
          this.authForm.setErrors({ unknownError: true });
        }
      }
    });
  }

}
