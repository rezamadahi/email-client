import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { MatchPassword } from "../validators/match-password";
import {AuthService} from "../auth.service";
import {UniqueUsername} from "../validators/unique-username";

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
    private uniqueUsername: UniqueUsername
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

}
